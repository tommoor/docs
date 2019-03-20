---
title: Deployment
---

## Requirements

Being KeplerJs a framework built above MeteorJs the system requirements are the same, so please refer to the documentation relating to meteorjs, in addition the steps to follow for a correct empty installation are the following

#### Hardware

* CPU ÷3GHz, >2 cores, >5K bogomips
* RAM >2GB(required ÷800MB of free RAM for build process).
* Disk Usage kepler installed + libraries min ÷400MB, empty database with minimal collections min ÷500MB

#### Software

* database MongoDB(versions 3.x)
* NodeJs (versions 6.x/8.x/10.x)
* MeteorJs(latest version)

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

