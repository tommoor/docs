---
title: Schemas
---

*(client/server)*

Define the base structure their properties, field's type and default values, for define documents in the database and new [Models](models.html) instances of Kepler objects.
All core schemas is defined in a simple JSON file [schemas.js](https://github.com/Keplerjs/Kepler/tree/master/packages/core/modules/schemas.js), in the future it would be used [JSON Schema](https://json-schema.org/) as a standard definition of these structures and validation.
Usually in some Kepler plugins these can be extended adding fields, through the *schemas* option inside the [plugin.js](plugin-js.html). 

The basic place structure is compatible with geojson standard with more other properties added by core module or by plugins.

* **K.schemas.place:**
	```
	place: {
		type: 'Feature',   //only for GeoJSON standard compatibility
		properties: {},	   //only for GeoJSON standard compatibility
		geometry: {	   	   //GeoJSON geometry for the place(default is Point)
			type: 'Point',   //Point is default(support all geojson types)
			coordinates: []  //default is loc.reverse()
		},
		loc: [],		   //base location coordinates lat,lng		
		name: '',	       //place title
		createdAt: '',	   //new Date() of place insert
		userId: '',	   	   //user to created it
		active:0,	       //visible in map
		indoor:0,		   //is an indoor place
		checkins: [],	   //users inside place	
		hist: [],		   //recents checkins
		desc: '',		   //description
		warn: '',          //warnings and dangers
		url: '',	   	   //websites url of place
		source: {	   	   //describe source of data
			type: ''		   //describe type of source data(osm,kepler,import)
		}
	},	
	```

* **K.schemas.user:**
	```
	user: {
		name: '',		   //display name	
		username: '',	   //username used in urls
		createdAt: '',	   //new Date() of user insert
		emails: [], 
		mood: '',		    //status mood message, shown in profile
		url: '',			//user web sites and social
		profile: {},		//user data
		avatar: '',		    //user photo
		loginAt: '',	    //last date of login
		loginIp: '',		//last ip from login
		status: '',        
		statusDefault: '', 
		statusConnection:'',
		gender: '',
		city: '',
		lang: 'it',
		loc: null,		   //current gps position
		loclast: null,	   //lat gps position
		checkin: null,	   //id Place where I am
		mob: false,			   //if my device is mobile
		friends: [],	   //ids users friends
		usersPending: [],  //ids users that I send request
		usersReceive: [],  //ids users that I receive request
		usersBlocked: [],  //ids users that I blocked
		hist: [],		   //last places visited
		source: {		   //source of registration by single signon	
			service: '',
			url: '',
			options: {}	
		},	
		settings: {
			map: {
				query: null,
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