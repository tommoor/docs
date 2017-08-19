---
title: Placeholders
---

# UI Placeholders
Kepler implements a convenient mechanism to give plugins the ability to extend the platform's basic structure. 
Using the dynamic template [pluginPlaceholder](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-ui/client/views/pluginPlaceholder.js) and register the plugin's templates inside the [plugin.js](architecture.html#Plugin-js) in the section placeholders.

Here an example of placeholders for the plugin [keplerjs:share](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-share/plugin.js)
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

The placeholders positioned inside the template [panelPlace](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-ui/client/views/panels/place.html#L45) and [popupCursor](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-ui/client/views/popups.html)
```
<template name="panelPlace">
...
    {{> pluginPlaceholder name='panelPlace'}}
...
</template>
```