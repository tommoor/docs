---
title: Themes
---

A theme is the easiest way to adapt Kepler to your use case, it can be defined as a [Kepler plugin](plugin-js.html) and can be contain static resources and new pages embedded in the application's routing.

To create new themes a good idea is to extend what is already present in the plugin Kepler [theme](https://github.com/Keplerjs/Kepler/tree/master/packages/theme).
The plugin *theme* is a simple Kepler plugin, it simply adds image files(assets) and css code to the basic *Kepler User Interface* defined in the meteor package that contains the [core-ui](https://github.com/Keplerjs/Kepler/tree/master/packages/core-ui) basic html structure.

To observe the changes made from the *theme plugin* to the Kepler interface you can try with the command:
```meteor remove Keplerjs:theme```
everything will continue to work but you will have a Kepler instance ugly and skeletal with the basic css of the libraries.

A Kepler plugin that implements a theme is the fastest way with which you can have your own customized Kepler instance without breaking your head on the business logic.
only a copy of Kepler will be needed with its basic plugins and then with the "meteor add mytheme-Kepler" command to add and keep.