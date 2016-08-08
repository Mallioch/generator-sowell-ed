var test = require('./util/test.js');

// =============================================================
// Instructions
// =============================================================

// 1. run `npm install chalk`
// 2. replace the test below with the ones supplied by the instructor, or you own


// -------------------------------------------------------------
//Create a function that returns an empty array.
function testFunction() {
  return 'this is a test'
}

test.equal({ shouldBe: 'not the same', actual: testFunction(), msg: 'testFunction' });
// -------------------------------------------------------------









test.summary();
