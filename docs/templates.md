---
title: Templates
---

# Plugins Templates
Kepler implements a convenient mechanism to give plugins the ability to extend the platform's basic UI structure. 
Using the dynamic template [pluginsTemplate](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-ui/client/views/pluginsTemplate.js) and register the plugin's templates inside the [plugin.js](architecture.html#Plugin-js) in the section templates.

Here an example of templates for the plugin [keplerjs:share](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-share/plugin.js)
```
K.Plugin({
    name: 'share',
    templates: {
        panelPlace: ['panelPlace_share'],
        popupCursor: 'popupCursor_share'
    }
});
```
Any plugin can be define one or many templates to include in default templates *panelPlace*, *popupCursor*.

The templates positioned inside the template [panelPlace](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-ui/client/views/panels/place.html#L45) and [popupCursor](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-ui/client/views/popups.html)
```
<template name="panelPlace">
...
    {{> pluginsTemplate name='panelPlace'}}
...
</template>
```

A complete list of default extensible templates is defined in [K.templates](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/modules/templates.js)
