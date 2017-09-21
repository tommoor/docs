---
title: Architecture
---

Kepler uses a [package-based](http://experimentsinmeteor.com/package-based-architecture/) architecture, meaning that the entirety of its codebase resides in [/packages](https://github.com/Keplerjs/Kepler/tree/master/packages) path. In addition to this standard design adopted by many large-scale Meteor applications KeplerJs implements a [plugins mechanism](architecture.html#Plugin-js) that allows you to split different functionality into different packages, this option facilitates the work of developers that will be able to connect their services or their customizations without modifying the API core.

## Base packages

These packages are indispensable for a basic presentation of data platform:

* [keplerjs:lib](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-lib) includes 3rd party libraries and external meteor packages
* [keplerjs:i18n](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-i18n) contains all languages for base packages
* [keplerjs:core](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core) implement the base business logic
* [keplerjs:ui](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-ui) define the base User Interface

In addition, these packages show content with a better look and allow the data entry by users:

* [keplerjs:theme](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-theme) include custom CSS styles icons and images
* [keplerjs:edit](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-edit) KeplerJs plugin to edit/remove places's data

All this set of *base packages* can be included in a single hit by installing the meta-package [keplerjs:base](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-base).
Probably your starting case study will need only this package.

## Plugins packages
The Kepler [plugin packages](plugins.html) provide useful features for your Kepler application. A *plugin package* only need to make your own package depend on *keplerjs:core* or others plugins if needed.

## Plugin.js

A **Kepler plugin** is a standard Meteor package that contains a **plugin.js** file that defines the UI structure and configuration in the kepler environment, similar in concept to [Package.js](http://docs.meteor.com/api/packagejs.html).
The following is an example of the plugin.js implements by *keplerjs:conver*

```javascript

K.Plugin({
  name: 'pluginName',
  templates: {
    navSidebar: 'navSidebar_pluginName',
    panelProfile: 'panelProfile_pluginName',
    panelUser: 'panelUser_pluginName',
    popupPlace: 'popupPlace_pluginName'
  },
  schemas: {
    place: {
      fieldName: [],   /* extend base model with additional fields */
    },
    pluginModel: {
      updatedAt: '',  
      fieldId: '',
       /* define new model of data, */  
    }    
  },
  filters: {
    placePanel: { /* extend a default filter */
      fields: {
        fieldName: 1
      }
    },
    pluginFilter: { /* define new filter */
      fields: {
        fieldName: 1
      }
    }
  },
  settings: {
    "public": {
      "pluginName": {
        /* settings */
      }
    }
  }	
});
```

For a better understanding, you can consult the plugins config, such as [keplerjs:conver](https://github.com/Keplerjs/Kepler/blob/master/packages/keplerjs-conver/plugin.js) contains a complex plugin definition example.
