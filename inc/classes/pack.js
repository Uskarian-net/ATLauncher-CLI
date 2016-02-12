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

    const PackVersion = require('./packVersion');

    const objectSymbol = Symbol();

    class Pack {
        /**
         * Creates a Pack object from the given object.
         *
         * @param {Object} object
         */
        constructor(object) {
            this[objectSymbol] = {
                description: object.description,
                id: object.id,
                name: object.name,
                safeName: object.safeName,
                supportURL: object.supportURL,
                type: object.type,
                versions: [],
                websiteURL: object.websiteURL
            };

            object.versions.forEach(function (version) {
                this[objectSymbol].versions.push(new PackVersion(version));
            }.bind(this));
        }

        /**
         * Gets the description for this pack.
         *
         * @returns {String}
         */
        get description() {
            return this[objectSymbol].description;
        }

        /**
         * Gets the internal ID of this pack.
         *
         * @returns {Number}
         */
        get id() {
            return this[objectSymbol].id;
        }

        /**
         * Gets the name of this pack.
         *
         * @returns {String}
         */
        get name() {
            return this[objectSymbol].name;
        }

        /**
         * Gets the safe name of this pack (for use in commands and url's).
         *
         * @returns {String}
         */
        get safeName() {
            return this[objectSymbol].safeName;
        }

        /**
         * Gets the support URL for this pack.
         *
         * @returns {String}
         */
        get supportURL() {
            return this[objectSymbol].supportURL;
        }

        /**
         * Gets the type of this pack.
         *
         * @returns {String}
         */
        get type() {
            return this[objectSymbol].type;
        }

        /**
         * Gets all the published versions (if any) for this pack.
         * @returns {PackVersion[]}
         */
        get versions() {
            return this[objectSymbol].versions;
        }

        /**
         * Gets the website URL for this pack.
         *
         * @returns {String}
         */
        get websiteURL() {
            return this[objectSymbol].websiteURL;
        }
    }

    module.exports = Pack;
})();