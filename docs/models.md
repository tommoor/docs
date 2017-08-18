---
title: Models
---

*(client)*

Define the "Classes" for create new istances of Kepler objects.
For now these are based on the popular John Resig [Class.js](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-lib/lib/Class.js).
Usually in some kepler plugins these can be extended adding behaviors/methods using files having the same name combined with the name of plugin extends it. (example [Place_pois.js](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-pois/client/Place_pois.js))
* [K.Place](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/client/Place.js)
   define logic and manage data of the *places* shown on the map and UI
* [K.User](https://github.com/Keplerjs/Kepler/tree/master/packages/keplerjs-core/client/User.js)
  define logic and manage data of the *users* shown on the map and UI
  