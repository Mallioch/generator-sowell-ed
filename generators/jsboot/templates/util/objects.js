

function fieldCount(obj) {
  var count = 0;
  for (var f in obj) {
    count++;
  }
  return count;
}

function shallowCompareObjects(obj0, obj1) {
  var obj0FieldCount = fieldCount(obj0);
  var obj1FieldCount = fieldCount(obj1);

  if (fieldCount(obj0) !== fieldCount(obj1)) {
    //console.log('different field count', obj0, obj1);
    return false;
  }

  for (var field in obj0) {
    if (obj0[field] !== obj1[field]) return false;
  }

  return true;
}

function compareObjects(parms) {
  //console.log('parms', parms);

  var actual = parms.actual,
    shouldBe = parms.shouldBe,
    msg = parms.msg

  if (actual === undefined && shouldBe != undefined) return false;

  //console.log('shallowCompare');

  return shallowCompareObjects(actual, shouldBe);
}


module.exports = {
  compareObjects: compareObjects
}
