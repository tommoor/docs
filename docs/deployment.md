---
title: Deployment
---

Install the latest version of [MongoDB](https://www.mongodb.com/).

The directory [/private](https://github.com/Keplerjs/Kepler/tree/master/private) contains usefull scripts and configurations for production environment:

* [nginx.conf](https://github.com/Keplerjs/Kepler/tree/master/private/nginx.conf)
* [settings.sample.json](https://github.com/Keplerjs/Kepler/tree/master/private/settings.sample.json)
* [start.sh](https://github.com/Keplerjs/Kepler/tree/master/private/start.sh)


To preparing for production environment following the guidelines of meteor applications, the complete documentation is available here
[Meteor building for production](https://guide.meteor.com/mobile.html#building-for-production)

Run this command to create a Meteor bundle
```
meteor build <build-output-directory> --server=<host>:<port>
```

*host* and *port* should be the public address of the server you want your app to connect to. This will generate a directory at *build-output-directory*, which includes a server bundle tarball and the project source for each targeted mobile platform in the /ios and /android directories.
