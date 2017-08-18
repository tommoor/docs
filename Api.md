
## API
Most of the logic and configuration modules are contained in [keplerjs:core](packages/keplerjs-core/README.md) under the [Kepler namespace](packages/keplerjs-core/Kepler.js) **Kepler.** or **K.** is the same thing. Inside this namespace the general rule is that *Modules* or *Models* are capitalized instead the configuration objects are lowercase.
The views that define the base **User Interface** structure of Kepler are contained in [keplerjs:ui](packages/keplerjs-ui/README.md). This also contains the [helpers templates](packages/keplerjs-ui/client/helpers.js) used by all views and the minimum CSS essential for the behavior of the UI.

##### Models (client)
Define the "Classes" for create new istances of Kepler objects.
For now these are based on the popular John Resig [Class.js](packages/keplerjs-lib/lib/Class.js).
Usually in some kepler plugins these can be extended adding behaviors/methods using files having the same name combined with the name of plugin extends it. (example [Place_pois.js](packages/keplerjs-pois/client/Place_pois.js))
* [K.Place](packages/keplerjs-core/client/Place.js)
   define logic and manage data of the *places* shown on the map and UI
* [K.User](packages/keplerjs-core/client/User.js)
  define logic and manage data of the *users* shown on the map and UI
  
##### Modules (client,server):
Contains *methods*, *subscriptions* and *business logic* that can be used in other parts of the code, often in views, models or other modules.
* [K.Cache](packages/keplerjs-core/modules/Cache.js)
  implement simple and smart general-purpose caching system based on *key-value*
* [K.Plugin](packages/keplerjs-core/modules/Plugin.js)
  define and manage registered *Kepler plugins* in application
* [K.Util](packages/keplerjs-core/modules/Util.js)
  large collection of generic functions, they are organized for categories:
  - [K.Util.humanize](packages/keplerjs-core/modules/Util_humanize.js)
  - [K.Util.sanitize](packages/keplerjs-core/modules/Util_sanitize.js)
  - [K.Util.valid](packages/keplerjs-core/modules/Util_valid.js)
  - [K.Util.geo](packages/keplerjs-core/modules/Util_geo.js) 

##### Modules (client):
* [K.Profile](packages/keplerjs-core/client/Profile.js)
  define methods logic and manage data of the current *logged user*
* [K.Map](packages/keplerjs-core/client/Map.js)
  manages and builds the primary [Leaflet](http://leafletjs.com/) map
  - [K.Map.controls](packages/keplerjs-core/client/Map_controls.js)
  - [K.Map.layers](packages/keplerjs-core/client/Map_layers.js)
  
##### Configurations (client,server):
Any basic configuration can be extended by plugins with their *plugin.js* file
* [K.schemas](packages/keplerjs-core/modules/schemas.js)
  defines structures for documents in the collections, can be extended by *Kepler plugins* to host the plugin fields
* [K.filters](packages/keplerjs-core/modules/filters.js)
  defines the fields exposed in the queries for pubblications and methods, the structure of this file is deliberately aligned to enhance the different levels of data privacy
* [K.placeholders](packages/keplerjs-core/modules/placeholders.js)
  defines the *placeholders* in the UI where the plugins can extend the content with others *temaplates/views*
* [K.settings](packages/keplerjs-core/settings.js)
  contains the main default settings extended by *Kepler plugins* and from *Meteor.settings*

### UI Placeholders
Kepler implements a convenient mechanism to give plugins the ability to extend the platform's basic structure. 
Using the dynamic template [pluginPlaceholder](packages/keplerjs-ui/client/views/pluginPlaceholder.js) and register the plugin's templates inside the *plugin.js* in the section placeholders.

Here an example of placeholders for the plugin [keplerjs:share](packages/keplerjs-share/plugin.js)
```
K.Plugin({
    name: 'share',
    placeholders: {
        panelPlace: ['panelPlace_share'],
        popupCursor: 'popupCursor_share'
    }
});
```
Any plugin can be define one or many templates for each placeholder.

The placeholders positioned inside the template [panelPlace](packages/keplerjs-ui/client/views/panels/place.html#L45) and
[popupCursor](packages/keplerjs-ui/client/views/popups.html)
```
<template name="panelPlace">
...
    {{> pluginPlaceholder name='panelPlace'}}
...
</template>
```