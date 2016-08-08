


function isArray(obj) {
  if (obj === undefined) return false;
  return obj.constructor === Array;
}

function isObject(val) {
  if (val === undefined) return false;
  return typeof val === 'object';
}



module.exports = {
  isArray: isArray,
  isObject: isObject
}
