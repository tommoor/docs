---
title: Plugins
---

The *main plugins* developed within the KeplerJs open source project are maintened within the same code repository in the path [kepler/packages](https://github.com/Keplerjs/Kepler/tree/master/packages) and distributed via [Atmospherejs](https://atmospherejs.com/keplerjs) within the namespace ```keplerjs```.
*3rd party* and *experimental* plugins could be maintened in separate repositories on [Github](https://github.com/Keplerjs) and 
Add a plugin to your Kepler project, for example: ```meteor add keplerjs:edit```.

## Main Plugins
these are extremely useful for the basic operation and maintenance of the platform

* [**edit**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-edit) add, edit and remove place's data by users
* [**admin**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-admin) administration of platform
* [**theme**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-theme) base theme for user interface

## Optionals
these implement non-essential functions or are necessary for the operation of other plugins

* [**stats**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-stats) statistical data analysis
* [**upload**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-upload) general file upload and storage
* [**geoinfo**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-geoinfo) retrieve geographic informations from various datasources
* [**osm**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-osm) support Openstreetmap and Overpass API

## Additionals
these implement additional features that can be activated or deactivated

* [**convers**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-convers) public conversations and messages
* [**favorites**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-favorites) user favorites and place voting
* [**notif**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-notif) notifications manager
* [**pois**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-pois) search Points Of Interest around a place
* [**share**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-share) sharing a place in social media channels
* [**tracks**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-tracks) manage gps tracks and paths around a place
* [**categories**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-categories) places and users categorization
* [**events**](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-events) public events in place

##  3rd party Plugins
We expect them to be developed by the great community of NodeJs/Meteor developers.

* [**googlemaps**](https://github.com/Keplerjs/keplerjs-googlemaps) load [Street View](https://developers.google.com/maps/documentation/streetview/) near a place by [Google Maps](https://developers.google.com/maps/) API
* [**wunderground**](https://github.com/Keplerjs/keplerjs-wunderground) weather forecast in a place using [Weather Underground](https://www.wunderground.com/) API
* [**mapillary**](https://github.com/Keplerjs/keplerjs-mapillary) connect to [Mapillary](https://www.mapillary.com/) API
* [**foursquare**](https://github.com/Keplerjs/keplerjs-foursquare) connect to [Foursquare](https://foursquare.com/) API 

## Experimental Plugins
Unstable plugins not to be used in production environment but useful for KeplerJs developers and mad scientists.

* [robots](https://github.com/Keplerjs/keplerjs-robots) create robots users to test multi user interactions on the platform
