#!/usr/bin/env node

/*
 * ATLauncher CLI - https://github.com/ATLauncher/ATLauncher-CLI
 * Copyright (C) 2016 ATLauncher
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

(function () {
    'use strict';

    const fs = require('fs');
    const _ = require('lodash');
    const path = require('path');
    const async = require('async');
    const touch = require('touch');
    const crypto = require('crypto');
    const mkdirp = require('mkdirp');
    const request = require('request');

    const CACHE_PATH = path.join(process.cwd(), 'cache', 'json');
    const TIMESTAMP_PATH = path.join(process.cwd(), 'cache', '.timestamp');

    class CacheManager {
        /**
         * Gets the contents of a file (JSON parsed) from the cache.
         *
         * @returns {Object}
         */
        getObject(file) {
            return new Promise(function (resolve, reject) {
                if (this.shouldUpdateCache) {
                    this.updateCache().then(doWork).catch(reject);
                } else {
                    doWork();
                }

                function doWork() {
                    fs.readFile(path.join(process.cwd(), 'cache', 'json', file), function (err, json) {
                        if (err) {
                            return reject(err);
                        }

                        resolve(JSON.parse(json));
                    });
                }
            }.bind(this));
        }

        /**
         * Checks to see if the cache should be updated or not.
         *
         * @returns {Boolean}
         */
        get shouldUpdateCache() {
            if (!fs.existsSync(TIMESTAMP_PATH)) {
                return true;
            }

            let lastUpdated = parseInt(fs.readFileSync(TIMESTAMP_PATH));

            return lastUpdated < (new Date().getTime() - 600000);
        }

        /**
         * Updates the cache to fetch the latest files needed to run the application (information about packs, minecraft versions, forge etc).
         *
         * @returns {Promise}
         */
        updateCache() {
            return new Promise(function (resolve, reject) {
                if (!fs.existsSync(CACHE_PATH)) {
                    mkdirp.sync(CACHE_PATH);
                }

                request.get({url: 'https://download.nodecdn.net/containers/atl/launcher/json/hashes.json', json: true}, function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }

                    let files = _.filter(body, {folder: 'JSON'});

                    async.each(files, function (file, next) {
                        let filePath = path.join(process.cwd(), 'cache', 'json', file.name);

                        if (!fs.existsSync(filePath)) {
                            touch.sync(filePath);
                        }

                        if (crypto.createHash('sha1').update(fs.readFileSync(filePath)).digest('hex') === file.sha1) {
                            return next();
                        }

                        request.get(`https://download.nodecdn.net/containers/atl/launcher/json/${file.name}`)
                            .on('error', next)
                            .pipe(fs.createWriteStream(filePath))
                            .on('close', () => next());
                    }, (err) => err ? reject(err) : fs.writeFile(TIMESTAMP_PATH, new Date().getTime(), (err) => err ? reject(err) : resolve()));
                });
            }.bind(this));
        }
    }

    module.exports = new CacheManager();
})();