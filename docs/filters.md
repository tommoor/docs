---
title: Filters
---

*(client/server)*

Allow to define the fields returned in queries for Meteor pubblications and methods.
If in a plugin you need to use a new non-standard kepler field, you must first define it in *K.schemas* and then add it into *K.filters* to make it come back into the queries results.
All core filters is defined in simple JSON inside a js file [filters.js](https://github.com/Keplerjs/Kepler/tree/master/packages/core/modules/filters.js).
Usually in some Kepler plugins these can be extended adding fields, through the *filters* option inside the [plugin.js](plugin-js.html).

* **K.filters:**
	current logged user
	```
	currentUser: {
		fields: {
			name:1, username:1, avatar:1, usersBlocked:1, status:1, statusDefault:1, statusConnection:1, checkin:1, loc:1, mob:1, loginAt:1, createdAt:1, friends:1, gender:1, city:1, lang:1, url:1, loclast:1, hist:1, 			
			usersPending:1, usersReceive:1, emails:1, settings:1, source:1, profile:1
		}
	}
	```

	data show in panel user, is my friend
	```
	friendPanel: {
		fields: {
			name:1, username:1, avatar:1, usersBlocked:1, status:1, statusDefault:1, statusConnection:1, checkin:1, loc:1, mob:1, loginAt:1, createdAt:1, friends:1, gender:1, city:1, lang:1, url:1, loclast:1, hist:1
		}
	}
	```
	data show in item user, is my friend
	```
	friendItem: {
		fields: {
			name:1, username:1, avatar:1, usersBlocked:1, status:1, statusDefault:1, statusConnection:1, checkin:1, loc:1, mob:1, loginAt:1, createdAt:1
		}
	}
	```

	data show in panel user
	```
	userPanel: {
		fields: {
			name:1, username:1, avatar:1, usersBlocked:1, createdAt:1, friends:1, gender:1, city:1, lang:1, url:1
		}
	}
	```

	data show in item user
	```
	userItem: { 
		fields: {
			name:1, username:1, avatar:1, usersBlocked:1,
		}
	}
	```


* custom schemas defined by [plugin convers](https://github.com/Keplerjs/Kepler/blob/master/packages/convers/plugin.js):
	```
	filters: {
		currentUser: {
			fields: {
				convers: 1
				//TODO create field coverCount that contains only count of convers no ids list
			}
		},
		placePanel: {
			fields: {
				convers: 1
			}
		},
		placeItem: {
			fields: {
				convers: 1
			}
		},
		userItem: {
			fields: {
				convers: 1
			}
		},
		converPanel: {
			fields: {
				title:1, targetId:1, targetType:1, userId:1, usersIds:1, lastMsg:1, createdAt:1
			}
		},
		converItem: {
			fields: {
				title:1, targetId:1, targetType:1, userId:1, usersIds:1, lastMsg:1, createdAt:1
			}
		}
	}
	```
### Examples in plugins

* custom schemas defined by [plugin geoinfo](https://github.com/Keplerjs/Kepler/blob/master/packages/geoinfo/plugin.js):
	```
	filters: {
		placePanel: {
			fields: {
				geoinfo: 1
			}
		}
	}
	```

* custom schemas defined by [plugin edit](https://github.com/Keplerjs/Kepler/blob/master/packages/edit/plugin.js):
	```
	filters: {
		currentUser: {
			fields: {
				places:1
			}
		},
		placePanel: {
			fields: {
				userId:1
			}
		},
		friendPanel: {
			fields: {
				places:1
			}
		},		
		userPanel: {
			fields: {
				places:1
			}
		}	
	}
	```