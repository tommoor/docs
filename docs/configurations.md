---
title: Configurations
---

*(client, server)*

Any basic configuration can be extended by plugins with their *plugin.js* file
* [K.schemas](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/modules/schemas.js)
  defines structures for documents in the collections, can be extended by *Kepler plugins* to host the plugin fields
* [K.filters](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/modules/filters.js)
  defines the fields exposed in the queries for pubblications and methods, the structure of this file is deliberately aligned to enhance the different levels of data privacy
* [K.placeholders](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/modules/placeholders.js)
  defines the *placeholders* in the UI where the plugins can extend the content with others *temaplates/views*
* [K.settings](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/settings.js)
  contains the main default settings extended by *Kepler plugins* and from *Meteor.settings*