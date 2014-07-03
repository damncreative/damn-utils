exports = module.exports;

// clear console before
exports.clear = function() {
  var i, lines, _i;

  lines = process.stdout.getWindowSize()[1];

  for (i = _i = 0; 0 <= lines ? _i < lines : _i > lines; i = 0 <= lines ? ++_i : --_i) {
    console.log('\r\n');
  }
};