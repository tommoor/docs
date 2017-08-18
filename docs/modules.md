---
title: Modules
---

*(client, server)*

Contains *methods*, *subscriptions* and *business logic* that can be used in other parts of the code, often in views, models or other modules.
* [K.Cache](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/modules/Cache.js)
  implement simple and smart general-purpose caching system based on *key-value*
* [K.Plugin](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/modules/Plugin.js)
  define and manage registered *Kepler plugins* in application
* [K.Util](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/modules/Util.js)
  large collection of generic functions, they are organized for categories:
  - [K.Util.humanize](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/modules/Util_humanize.js)
  - [K.Util.sanitize](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/modules/Util_sanitize.js)
  - [K.Util.valid](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/modules/Util_valid.js)
  - [K.Util.geo](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/modules/Util_geo.js) 

*(client)*

* [K.Profile](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/client/Profile.js)
  define methods logic and manage data of the current *logged user*
* [K.Map](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/client/Map.js)
  manages and builds the primary [Leaflet](http://leafletjs.com/) map
  - [K.Map.controls](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/client/Map_controls.js)
  - [K.Map.layers](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/client/Map_layers.js)