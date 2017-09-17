---
title: keplerjs:core
---

Contains the heart of Kepler, and itself depends on a set of core packages: *keplerjs:lib*, *keplerjs:i18n*

```
├── client
│   ├── Accounts.js
│   ├── Map.js
│   ├── Map_layers.js
│   ├── Map_controls.js
│   ├── Place.js
│   ├── Profile.js
│   ├── User.js
│   └── router.js
│
├── collections
│   ├── queries
│   │   ├── places.js
│   │   └── users.js
│   │
│   ├── places.js
│   └── users.js
│
├── modules
│   ├── Cache.js
│   ├── Plugin.js
│   ├── Status.js
│   ├── Util.js
│   ├── Util_geo.js
│   ├── Util_humanize.js
│   ├── Util_valid.js
│   │
│   ├── filters.js
│   ├── schemas.js
│   ├── settings.js
│   └── templates.js
│
├── server
│   ├── pubs
│   │   ├── places.js
│   │   ├── profile.js
│   │   └── users.js
│   │
│   ├── Accounts.js
│   ├── places.js
│   └── profile.js
│
└── Kepler.js
```