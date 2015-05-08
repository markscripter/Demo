var appRoot = require('app-root-path');

module.exports = {
  paths : {
    layout : appRoot + "/bin/layouts/",
    pages : appRoot + "/bin/pages/",
    less : appRoot + "/bin/less/",
    svg : appRoot + "/bin/svg/",
    routes : appRoot + "/bin/routes/",
    data : appRoot + "/bin/data/",
    pub : appRoot + "/public/",
    js : appRoot + "/bin/javascript/",
    bower : appRoot + "/bower_components/",
    bowerFiles : [
      appRoot + "/bower_components/angular/angular.min.js",
      // appRoot + "/bower_components/lodash/lodash.min.js",
      appRoot + "/bower_components/stampit/dist/stampit.min.js",
    ],
    nodeModules : appRoot + "/node_modules/",
    mockData : appRoot + "/bin/mockdata.json"
  }
};