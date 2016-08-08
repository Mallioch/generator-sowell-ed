var chalk = require('chalk');
var fmt = require('./formatters.js');
var isArray = require('./core.js').isArray;
var compareObjects = require('./objects.js').compareObjects;



function compareArrays(parms) {

  //console.log('testing fmt', fmt.undef());

  var actual = parms.actual,
    shouldBe = parms.shouldBe,
    msg = parms.msg

  var fail = function(formatArgFunc) {

    /*
    if (!formatArgFunc) {
      formatArgFunc = function(obj) {
        return obj;
      }
    }

    var formatShouldBeFunc;
    if (parms.shouldBe.length === 0) {
      formatShouldBeFunc = function() { return '[]'; };
    }
    else {
      formatShouldBeFunc = function() { return parms.shouldBe; };
    }
    */




    //console.log(chalk.red(msg));
    //console.log(chalk.red(' - was       --> '), chalk.grey(fmt.get(actual)));
    //console.log(chalk.red(' - should be --> '), chalk.grey(fmt.get(shouldBe)));
  }
  //console.log(parms);

  if (!isArray(actual)) {fail(); return false;}
  if (actual === undefined) { fail(); return false; }
  if (actual.length !== shouldBe.length) { fail(); return false; }

  if (typeof actual[0] === 'object') { //arrays contain objects, so compare those.
    for (var i = 0; i < actual.length; i++) {
      if (compareObjects(actual[i], shouldBe[i]) === false) {
        fail(function(obj) { return JSON.stringify(obj); });
        return false;
      }
    }
  }
  else {
    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== shouldBe[i]) {
        fail();
        return false;
      }
    }
  }

  return true;
}

module.exports = {
  compareArrays: compareArrays
}
