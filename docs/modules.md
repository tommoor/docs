---
title: Modules
---

*(client, server)*

Contains *methods*, *subscriptions* and *business logic* that can be used in other parts of the code, often in views, models or other modules.
* [K.Cache](https://github.com/Keplerjs/Kepler/tree/master/packages/core/modules/Cache.js)
  implement simple and smart general-purpose caching system based on *key-value*
* [K.Plugin](https://github.com/Keplerjs/Kepler/tree/master/packages/core/modules/Plugin.js)
  define and manage registered *Kepler plugins* in application
* [K.Util](https://github.com/Keplerjs/Kepler/tree/master/packages/core/modules/Util.js)
  large collection of generic functions, they are organized for categories:
  - [K.Util.humanize](https://github.com/Keplerjs/Kepler/tree/master/packages/core/modules/Util_humanize.js)
  - [K.Util.sanitize](https://github.com/Keplerjs/Kepler/tree/master/packages/core/modules/Util_sanitize.js)
  - [K.Util.valid](https://github.com/Keplerjs/Kepler/tree/master/packages/core/modules/Util_valid.js)
  - [K.Util.geo](https://github.com/Keplerjs/Kepler/tree/master/packages/core/modules/Util_geo.js) 

*(client)*

* [K.Profile](https://github.com/Keplerjs/Kepler/tree/master/packages/core/client/Profile.js)
  define methods logic and manage data of the current *logged user*
* [K.Map](https://github.com/Keplerjs/Kepler/tree/master/packages/core/client/Map.js)
  manages and builds the primary [Leaflet](http://leafletjs.com/) map
  - [K.Map.controls](https://github.com/Keplerjs/Kepler/tree/master/packages/core/client/Map_controls.js)
  - [K.Map.layers](https://github.com/Keplerjs/Kepler/tree/master/packages/core/client/Map_layers.js)
    - [K.Map.layers.baselayer](https://github.com/Keplerjs/Kepler/tree/master/packages/core/client/Map_layers.js) current base tile layer
    - [K.Map.layers.users](https://github.com/Keplerjs/Kepler/tree/master/packages/core/client/Map_layers.js) marker users layer group
    - [K.Map.layers.places](https://github.com/Keplerjs/Kepler/tree/master/packages/core/client/Map_layers.js) marker places layer group
    - [K.Map.layers.geojson](https://github.com/Keplerjs/Kepler/tree/master/packages/core/client/Map_layers.js) layer geojson to load pois,tracks, and much more
    
