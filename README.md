# ATLauncher CLI
[![Build Status](https://img.shields.io/travis/ATLauncher/ATLauncher-CLI.svg?style=flat-square)](https://travis-ci.org/ATLauncher/ATLauncher-CLI) [![NPM Downloads](https://img.shields.io/npm/dt/atlauncher-cli.svg?style=flat-square)](https://www.npmjs.com/package/atlauncher-cli) [![NPM Version](https://img.shields.io/npm/v/atlauncher-cli.svg?style=flat-square)](https://www.npmjs.com/package/atlauncher-cli) [![Issues](https://img.shields.io/github/issues/ATLauncher/ATLauncher-CLI.svg?style=flat-square)](https://github.com/ATLauncher/ATLauncher-CLI/issues) [![License](https://img.shields.io/badge/license-GPLv3-blue.svg?style=flat-square)](https://raw.githubusercontent.com/ATLauncher/ATLauncher-CLI/master/LICENSE)

This is a CLI application for ATLauncher written in NodeJS.

## Features
ATLauncher CLI has the following features:
- TBD

## Requirements
ATLauncher CLI was created using [NodeJS](https://nodejs.org/) version 4.2 and as such we don't support any versions of NodeJS below version 4.2.

## How to install
Run the below command to install the global application:

```
npm install -g atlauncher-cli
```

Once done you'll have access to the `atlauncher` command.

```
atlauncher --help
```

## Command line options
You can pass in various options to the command line to modify the actions taken by the program. More details about them and what each of them do is below.

### -d, --directory
This changes the working directory of the application and stores any files it reads/writes to the provided folder.

It defaults to current directory.

## Testing
We use Gulp to test and lint this module. Make sure you have gulp installed globally:

```
npm install -g gulp
```

Then you can run the tests with the following command:

```
gulp test
```

You can also run the linting process to test all the files for valid syntax and best practices:

```
gulp style
```

If you wish to always have the process running in the background so you can spot any issues as you write/modify the code, you can use the watch gulp command:

```
gulp watch
```

## Help/Support
If you have any issues/questions/suggestions, please make an issue [here](https://github.com/ATLauncher/ATLauncher-CLI/issues)

## License
This work is licensed under the GNU General Public License v3.0. To view a copy of this license, visit [http://www.gnu.org/licenses/gpl-3.0.txt](http://www.gnu.org/licenses/gpl-3.0.txt).