---
title: Plugins
---

The *main plugins* developed within the KeplerJs open source project are maintened within the same code repository in the path [kepler/packages](https://github.com/Keplerjs/Kepler/tree/master/packages) and distributed via [Atmospherejs](https://atmospherejs.com/keplerjs) within the namespace ```keplerjs```.
*3rd party* and *experimental* plugins could be maintened in separate repositories on [Github](https://github.com/Keplerjs) and 
Add a plugin to your Kepler project, for example: ```meteor add keplerjs:edit```.

## Main Plugins
these are extremely useful for the basic operation and maintenance of the platform

* [**edit**](https://github.com/Keplerjs/Kepler/tree/master/packages/edit) add, edit and remove place's data by users
* [**admin**](https://github.com/Keplerjs/Kepler/tree/master/packages/admin) administration of platform
* [**theme**](https://github.com/Keplerjs/Kepler/tree/master/packages/theme) base theme for user interface

## Optionals
these implement non-essential functions or are necessary for the operation of other plugins

* [**stats**](https://github.com/Keplerjs/Kepler/tree/master/packages/stats) statistical data analysis
* [**upload**](https://github.com/Keplerjs/Kepler/tree/master/packages/upload) general file upload and storage
* [**geoinfo**](https://github.com/Keplerjs/Kepler/tree/master/packages/geoinfo) retrieve geographic informations from various datasources
* [**osm**](https://github.com/Keplerjs/Kepler/tree/master/packages/osm) support Openstreetmap and Overpass API
* [**import**](https://github.com/Keplerjs/Kepler/tree/master/packages/import) import bulk data from external file in new places

## Additionals
these implement additional features that can be activated or deactivated

* [keplerjs:api](https://github.com/Keplerjs/Kepler/tree/master/packages/api) implement a restful API for basic operations
* [**convers**](https://github.com/Keplerjs/Kepler/tree/master/packages/convers) public conversations and messages
* [**favorites**](https://github.com/Keplerjs/Kepler/tree/master/packages/favorites) user favorites and place voting
* [**notifs**](https://github.com/Keplerjs/Kepler/tree/master/packages/notifs) notifications manager
* [**pois**](https://github.com/Keplerjs/Kepler/tree/master/packages/pois) search Points Of Interest around a place
* [**share**](https://github.com/Keplerjs/Kepler/tree/master/packages/share) sharing a place in social media channels
* [**tracks**](https://github.com/Keplerjs/Kepler/tree/master/packages/tracks) manage gps tracks and paths around a place
* [**categories**](https://github.com/Keplerjs/Kepler/tree/master/packages/categories) places and users categorization
* [**photos**](https://github.com/Keplerjs/Kepler/tree/master/packages/photos) manage place photos and user avatars

##  3rd party Plugins
We expect them to be developed by the great community of NodeJs/Meteor developers.

* [**googlemaps**](https://github.com/Keplerjs/keplerjs-googlemaps) load [Street View](https://developers.google.com/maps/documentation/streetview/) near a place by [Google Maps](https://developers.google.com/maps/) API
* [**wunderground**](https://github.com/Keplerjs/keplerjs-wunderground) weather forecast in a place using [Weather Underground](https://www.wunderground.com/) API
* [**mapillary**](https://github.com/Keplerjs/keplerjs-mapillary) connect to [Mapillary](https://www.mapillary.com/) API
* [**foursquare**](https://github.com/Keplerjs/keplerjs-foursquare) connect to [Foursquare](https://foursquare.com/) API 
* [**openrouteservice**](https://github.com/Keplerjs/keplerjs-openrouteservice) connect to [OpenRouteService](https://openrouteservice.org/) API 

## Experimental Plugins
Unstable plugins not to be used in production environment but useful for KeplerJs developers and mad scientists.

* [robots](https://github.com/Keplerjs/keplerjs-robots) create robots users to test multi user interactions on the platform
