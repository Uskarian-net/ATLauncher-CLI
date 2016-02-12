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

    const _ = require('lodash');

    const Pack = require('../classes/pack');
    const CacheManager = require('./cacheManager');

    class PackManager {
        /**
         * Gets all the packs as Pack objects that are in the launcher.
         *
         * @returns {Promise}
         */
        getAllPacks() {
            return new Promise(function (resolve, reject) {
                CacheManager.getObject('packs.json').then(function (object) {
                    let packs = [];

                    object.forEach(function (pack) {
                        packs.push(new Pack(pack));
                    });

                    resolve(packs);
                }).catch(reject);
            }.bind(this));
        }

        /**
         * Gets a single pack by the given safe name.
         *
         * @param {String} name
         * @returns {Promise}
         */
        getPack(name) {
            return new Promise(function (resolve, reject) {
                this.getAllPacks().then(function (packs) {
                    let pack = _.find(packs, {safeName: name});

                    if (!pack) {
                        return reject(new Error(`No pack found with the given safe name of ${name}`));
                    }

                    resolve(pack);
                }).catch(reject);
            }.bind(this));
        }
    }

    module.exports = new PackManager();
})();