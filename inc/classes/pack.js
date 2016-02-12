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
                id: object.id,
                position: object.position,
                name: object.name,
                type: object.type,
                devVersions: [],
                versions: [],
                createServer: object.createServer || true,
                leaderboards: object.leaderboards || true,
                logging: object.logging || true,
                description: object.description,
                supportURL: object.supportURL,
                websiteURL: object.websiteURL
            };

            object.devVersions.forEach(function (version) {
                this[objectSymbol].devVersions.push(new PackVersion(this, version));
            }.bind(this));

            object.versions.forEach(function (version) {
                this[objectSymbol].versions.push(new PackVersion(this, version));
            }.bind(this));
        }

        /**
         * If creating servers for this pack is enabled.
         *
         * @returns {Boolean}
         */
        get createServer() {
            return this[objectSymbol].createServer;
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
         * Gets all the development versions (if any) for this pack.
         *
         * @returns {PackVersion[]}
         */
        get devVersions() {
            return this[objectSymbol].versions;
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
         * If leaderboards for this pack are enabled.
         *
         * @returns {Boolean}
         */
        get leaderboards() {
            return this[objectSymbol].leaderboards;
        }

        /**
         * If logging for this pack are enabled.
         *
         * @returns {Boolean}
         */
        get logging() {
            return this[objectSymbol].logging;
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
         * Gets the position of this pack.
         *
         * @returns {Number}
         */
        get position() {
            return this[objectSymbol].position;
        }

        /**
         * Gets the safe name of this pack (for use in commands and url's).
         *
         * @returns {String}
         */
        get safeName() {
            return this[objectSymbol].name.replace(/[^0-9A-Za-z]/g, '');
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
         *
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