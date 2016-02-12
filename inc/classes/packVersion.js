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
                minecraft: object.minecraft,
                published: new Date(object.published * 1000),
                version: object.version
            };
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
         * Gets the date that this version was published.
         *
         * @returns {Date}
         */
        get published() {
            return this[objectSymbol].published;
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