
## Install

Install the latest version of [Node](https://nodejs.org).
Clone or download the [Kepler repo](https://github.com/Keplerjs/Kepler) locally, then:
```sh
npm install
npm start
```
And open *http://localhost:3000/* in your browser.

### Settings
A example of custom settings is [settings.sample.json](private/settings.sample.json) other special settings of individual plugins can be overridden always using this same file.
To see *packages/\<plugin-name\>/plugin.js* file in the *settings* section.

```sh
meteor --settings private/settings.sample.json 
```
