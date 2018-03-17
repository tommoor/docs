---
title: Plugin.js
---

A **Kepler plugin package** is a standard Meteor package that contains a **plugin.js** file that defines the UI structure, the templates and their placement rendered inside the User Interface, custom settings and others configurations in the Kepler environment, similar in concept to [package.js](http://docs.meteor.com/api/packagejs.html). The following is an example of a plugin definition:

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