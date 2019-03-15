---
title: Schemas
---

*(client/server)*

Define the base structure their properties, field's type and default values, for define documents in the database and new [Models](models.html) instances of Kepler objects.
All core schemas is defined in a simple JSON file [schemas.js](https://github.com/Keplerjs/Kepler/tree/master/packages/core/modules/schemas.js), in the future it would be used [JSON Schema](https://json-schema.org/) as a standard definition of these structures and validation.
Usually in some Kepler plugins these can be extended adding fields, through the *schemas* option inside the [plugin.js](plugin-js.html). 

* **K.schemas.place:**
	```
	place: {
		name: '',	       //place title
		createdAt: '',	   //new Date() of place insert
		userId: '',	   	   //user to created it
		active:0,	       //visible in map
		indoor:0,		   //is an indoor place
		loc: [],		   //coordinates lat,lng
		checkins: [],	   //users inside place	
		hist: [],		   //recents checkins
		desc: '',		   //long description
		warn: '',          //description of alerts and dangers
		urls: [],	   	   //websites url of place
		emails: [],		   //contanct emails for place
		source: {},		   //describe source of data
	}
	```

* **K.schemas.user:**
	```
	user: {
		name: '',		   //display name	
		username: '',	   //username used in urls
		createdAt: '',	   //new Date() of user insert
		emails: [], 		//alla emails of user
		profile: {},		//user data
		avatar: '',		    //user photo
		mood: '',		    //status mood message, shown in profile
		loginAt: '',	    //last date of login
		status: '',         //visibility online of user(online,offline,await)
		statusDefault: '',  
		statusConnection:'',
		gender: '',        //gender of user male,female,others
		city: '',          //city to live
		lang: 'it',        //language
		loc: null,		   //current gps position
		loclast: null,	   //lat gps position
		checkin: null,	   //id Place where I am
		mob:0,			   //if my device is mobile
		friends: [],	   //ids users friends
		usersPending: [],  //ids users that I send request
		usersReceive: [],  //ids users that I receive request
		usersBlocked: [],  //ids users that I blocked
		hist: [],		   //last places visited
		source: {},		   //source of registration by single signon		
		settings: {        //user settings for platform
			map: {
				layer: null,
				center: null  //last center of map
			}
		}
	}
	```

### Examples in plugins
* custom schemas defined by [plugin convers](https://github.com/Keplerjs/Kepler/blob/master/packages/convers/plugin.js):
	```
	schemas: {
		place: {
			convers: []        //id conversations in a place
		},
		user: {
			convers: []        //id conversations to user publics and direct private messages
		},
		conver: {              //definion of customo schema for a conversation 
			createdAt: null,   //date of creation
			title: '',         //Topic for the place wall or subject for the private convers
			targetId: '',      //if null is a private users convers		
			targetType: '',    //type of related Kepler object: user, place, event, pois		
			userId: '',        //author/sender of conversation		
			usersIds: [],      //users participants
			lastMsg: null      //replicate content of last message in the conversation
		},
		converMsg: {           //define single message into a conversation
			updatedAt: '',     //last modified date
			convId: '',        //parent conversation id
			userId: '',        //author user id 
			body: ''           //text content
		}
	}
	```

* custom schemas defined by [plugin geoinfo](https://github.com/Keplerjs/Kepler/blob/master/packages/geoinfo/plugin.js):
	```
	schemas: {
		place: {
			geoinfo: {
				loc: [],	//location reference
				ele: 0,	    //elevation from the sea level
				esp: 0,     //aspect of the terrain model
				prov: '',	//province
				near: '',	//locality
				com: '',	//municipality
				reg: '',	//district
				naz: '',	//country
			}
		}
	}
	```

* custom schemas defined by [plugin edit](https://github.com/Keplerjs/Kepler/blob/master/packages/edit/plugin.js):
	```
	schemas: {
		place: {
			userId: null   //user creator of place
		},
		user: {
			places: []	   //places created by user
		}
	}
	```