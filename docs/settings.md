---
title: Settings
---

A example of custom settings is [settings.sample.json](https://github.com/Keplerjs/Kepler/blob/master/private/settings.sample.json) other special settings of individual plugins can be overridden always using this same file.
To see *packages/plugin-name/plugin.js* file in the *settings* section.

```sh
meteor --settings private/settings.sample.json 
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