
var bpath = "../kepler/packages/";

module.exports = {
    "encoding": "utf8",
    "recurse": true,
    "recurseDepth": 10,
    //TODO excludeTags
	"source": {
        "include": [
            bpath+"lib/lib/Class.js",
            bpath+"core/Kepler.js",
            bpath+"core/client/Map.js",
            //bpath+"core/client/Map_controls.js",
            //bpath+"core/client/Map_layers.js",
            bpath+"core/client/Profile.js",
            bpath+"core/client/Place.js",
            bpath+"core/client/User.js",
        	bpath+"core/modules/",
        ],
        "includePattern": ".+\\.js$"
    }
}
