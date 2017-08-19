---
title: Architecture
---

Kepler uses a [package-based](http://experimentsinmeteor.com/package-based-architecture/) architecture, meaning that the entirety of its codebase resides in [/packages](https://github.com/Keplerjs/Kepler/tree/master/packages).

## Base packages

These packages are indispensable for basic platform operation. And observing dependency relationships should be loaded into this exact order:

* [keplerjs:lib](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-lib)
* [keplerjs:i18n](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-i18n)
* [keplerjs:core](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core)
* [keplerjs:ui](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-ui)

## Plugins packages
The Kepler plugin packages provide useful features for your Kepler application. A *plugin package* only need to make your own package depend on *keplerjs:core* or others plugins if needed.

## Plugin.js

A **Kepler plugin** is a standard Meteor package that contains a **plugin.js** file that defines the behaviors and configuration in the kepler environment, similar in concept to [Package.js](http://docs.meteor.com/api/packagejs.html).
