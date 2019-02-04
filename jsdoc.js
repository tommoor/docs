
var bpath = "../kepler/packages/";

module.exports = {
    "encoding": "utf8",
    "destination": "./public/jsdoc",
    "recurse": true,
    "recurseDepth": 10,
    //TODO excludeTags
	"source": {
        "include": [
        	bpath+"core/modules/",
            //bpath+"core/modules/Util_geo.js",
        ],
        "includePattern": ".+\\.js$"
    }
}
