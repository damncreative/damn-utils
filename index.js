var fs = require('fs');

exports = module.exports;

function walk(path) {
  fs.readdirSync(path).forEach(function(file){
    var sub = path + '/' + file;
    var stat = fs.statSync(sub);
    if(stat.isFile()) {
      var name = file.split(".")[0];
      exports[name] = require(sub);
    }
  });
};

walk(__dirname + '/lib');