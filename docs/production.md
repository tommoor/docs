---
title: Production
---

## Building

To preparing for production environment following the guidelines of meteor applications, the complete documentation is available here
[Meteor deployment docs](https://guide.meteor.com/deployment.html)

For custom environment, run this command to create a generic NodeJS bundle
```
meteor build --directory <build-output-directory> --server=<host>:<port>
```

*host* and *port* should be the public address of the server you want your app to connect to. This will generate a directory at *build-output-directory*, which includes a server bundle directory and the project source for each targeted mobile platform in the /ios and /android directories.

To run main.js file using nodejs command:
```
nodejs <build-output-directory>/main.js
```

## Environment variables

Alternatively use the [build.sh](https://github.com/Keplerjs/Kepler/tree/master/private/build.sh) script.
The following environment variables are required: 
```
MONGO_URL="mongodb://localhost:27017/<DBNAME>"
MAIL_URL="smtp://localhost:25"
METEOR_SETTINGS=$(cat settings.json)
ROOT_URL="http://<APPDOMAIN>"
BIND_IP=<IPADDRESS>
PORT=<PORT>
```
