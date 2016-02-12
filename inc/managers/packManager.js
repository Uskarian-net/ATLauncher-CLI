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

    const api = require('atlauncher-api')();

    const Pack = require('../classes/pack');

    class PackManager {
        getAllPacks() {
            return new Promise(function (resolve, reject) {
                api.packs.full.all(function (err, res) {
                    if (err) {
                        return reject(err);
                    }

                    let packs = [];

                    res.forEach(function (pack) {
                        packs.push(new Pack(pack));
                    });

                    resolve(packs);
                });
            });
        }
    }

    module.exports = new PackManager();
})();