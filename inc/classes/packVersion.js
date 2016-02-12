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

    const objectSymbol = Symbol();

    class PackVersion {
        /**
         * Creates a PackVersion object from the given object.
         *
         * @param {Object} object
         */
        constructor(object) {
            this[objectSymbol] = {
                version: object.version,
                minecraft: object.minecraft,
                hash: object.hash,
                canUpdate: object.canUpdate || true,
                isRecommended: object.isRecommended || false,
                isDev: object.isDev || false
            };
        }

        /**
         * If this version can be updated to.
         *
         * @returns {Boolean}
         */
        get canUpdate() {
            return this[objectSymbol].canUpdate;
        }

        /**
         * A unique hash to be used to determine if a development version has been updated or not.
         *
         * @returns {String}
         */
        get hash() {
            return this[objectSymbol].hash;
        }

        /**
         * If this version is a development version or not.
         *
         * @returns {Boolean}
         */
        get isDev() {
            return this[objectSymbol].isDev;
        }

        /**
         * If this version is recommended or not.
         *
         * @returns {Boolean}
         */
        get isRecommended() {
            return this[objectSymbol].isRecommended;
        }

        /**
         * Gets the Minecraft version of this version (ie. 1.7.10).
         *
         * @returns {String}
         */
        get minecraft() {
            return this[objectSymbol].minecraft;
        }

        /**
         * Gets the version of this version (ie. 3.2.3.2).
         *
         * @returns {String}
         */
        get version() {
            return this[objectSymbol].version;
        }
    }

    module.exports = PackVersion;
})();