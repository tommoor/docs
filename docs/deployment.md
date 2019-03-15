---
title: Deployment
---

## Requirements

#### Resources
* CPU ÷3GHz, >2 cores, >5K bogomips
* RAM >2GB(required ÷800MB of free RAM for build process).
* Disk Usage kepler installed + libraries min ÷400MB, empty database with minimal collections min ÷500MB

#### System software

* base system software
from root:
```
apt install curl git build-essential htop screen imagemagick
```

* database MongoDB(versions 3.x)
from root:
```
apt install mongodb mongo-tools
```

* NodeJs (versions 6.x/8.x/10.x)
from root:
```
curl -sL https://deb.nodesource.com/setup_10.x -o ./nodesource_setup.sh
apt update
apt install nodejs
```

* MeteorJs(latest version)
from root:
```
curl https://install.meteor.com/ | sh
```

#### Environment variables

Alternatively use the [build.sh](https://github.com/Keplerjs/Kepler/tree/master/private/build.sh) script.
The following environment variables are required: 
```
MONGO_URL="mongodb://localhost:27017/<DBNAME>"
MAIL_URL="smtp://localhost:25"
METEOR_SETTINGS=$(cat settings.json)
ROOT_URL="http://<APPDOMAIN>"
BIND_IP=<IPADDRESS>
PORT=<PORT>
```

## Scripts and Configurations

The directory [/private](https://github.com/Keplerjs/Kepler/tree/master/private) 						contains usefull scripts and configurations for development/production environments:

#### Development environment
* [start.sh](https://github.com/Keplerjs/Kepler/tree/master/private/start.sh)							start kepler in localhost for development
* [settings.light-ui.json](https://github.com/Keplerjs/Kepler/tree/master/private/settings.light-ui)	sample settings.json for minimal loading of kepler plugins templates
* [settings.sample.json](https://github.com/Keplerjs/Kepler/tree/master/private/settings.sample.json)	sample settings.json for standard kepler app

#### Development of plugins
* [packages.publish.sh](https://github.com/Keplerjs/Kepler/tree/master/private/packages.publish.sh)		publish in atmospherejs.com all kepler plugins in github organization
* [packages.pull.sh](https://github.com/Keplerjs/Kepler/tree/master/private/packages.pull.sh)			pull all kepler plugins
* [packages.push.sh](https://github.com/Keplerjs/Kepler/tree/master/private/packages.push.sh)			push all kepler plugins
* [packages.status.sh](https://github.com/Keplerjs/Kepler/tree/master/private/packages.status.sh)		git staus in all kepler plugins
* [packages.unpublish.sh](https://github.com/Keplerjs/Kepler/tree/master/private/packages.unpublish.sh)	unpublish all kepler plugins in atmospherejs.com
* [placeholders.list.sh](https://github.com/Keplerjs/Kepler/tree/master/private/placeholders.list.sh)	find all placeholders defined in all templates

#### Production environment
* [build.sh](https://github.com/Keplerjs/Kepler/tree/master/private/build.sh)							create meteor bundle, a standard NodeJs application of a kepler instance
* [kepler.daemon.sh](https://github.com/Keplerjs/Kepler/tree/master/private/kepler.daemon.sh)			run production kepler instance at startup in linux systems
* [nginx.sample.conf](https://github.com/Keplerjs/Kepler/tree/master/private/nginx.sample.conf)			sample configuration for use nginx as web server proxy

#### Cloud deployments
* [deploy.heroku.sh](https://github.com/Keplerjs/Kepler/tree/master/private/deploy.heroku.sh)			deploy kepler instance in herokuapp.com


## Building

To preparing for production environment following the guidelines of meteor applications, the complete documentation is available here
[Meteor deployment docs](https://guide.meteor.com/deployment.html)

For custom environment, run this command to create a generic NodeJS bundle
```
meteor build --directory <build-output-directory> --server=<host>:<port>
```

*host* and *port* should be the public address of the server you want your app to connect to. This will generate a directory at *build-output-directory*, which includes a server bundle directory and the project source for each targeted mobile platform in the /ios and /android directories.

To run main.js file using nodejs command:
```
nodejs <build-output-directory>/main.js
```