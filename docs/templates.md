---
title: Templates
---

# Plugins Templates
Kepler implements a convenient mechanism to give plugins the ability to extend the platform's basic UI structure. 
Using the dynamic template [pluginsTemplate](https://github.com/Keplerjs/Kepler/tree/master/packages/ui/client/views/pluginsTemplate.js) and register the plugin's templates inside the [plugin.js](architecture.html#Plugin-js) in the section templates.

Here an example of templates for the plugin [keplerjs:share](https://github.com/Keplerjs/Kepler/tree/master/packages/share/plugin.js)
```
K.Plugin({
    name: 'share',
    templates: {
        panelPlace: {
        	'panelPlace_share': {order:-5}
        },
        popupCursor: 'popupCursor_share'
    }
});
```
Any plugin can be define one or many templates to include in default template placeholders *panelPlace*, *popupCursor*,*popupUser*.
At the property *panelPlace* is also specified the priority(*order*) of inserting the template respect to the other plugins, this value can be between *-10* and *+10* 


The templates positioned inside the template [panelPlace](https://github.com/Keplerjs/Kepler/tree/master/packages/ui/client/views/panels/place.html#L45) and [popupCursor](https://github.com/Keplerjs/Kepler/tree/master/packages/ui/client/views/popups.html)
```
<template name="panelPlace">
...
    {{> pluginsTemplate name='panelPlace'}}
...
</template>
```

Using *sep* parameter for define an html fragments between the blocks of rendered plugins [panelSettings](https://github.com/Keplerjs/Kepler/tree/master/packages/ui/client/views/panels/settings.html)
```
<template name="panelSettings">
...
    {{> pluginsTemplate name='panelPlace' sep='<hr />'}}
...
</template>
```

A complete list of default extensible templates is defined in [K.templates](https://github.com/Keplerjs/Kepler/tree/master/packages/core/modules/templates.js)
