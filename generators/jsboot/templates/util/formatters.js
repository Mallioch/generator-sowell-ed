var isArray = require('./core.js').isArray;
var isObject = require('./core.js').isObject;

function undef() { return 'undefined'; }

function array(arr) {
  if (arr.length === 0) {
    return '[]';
  }
  else {
    return JSON.stringify(arr);
  }
}


function getFormatter(obj) {
  if (obj === undefined) return undef();
  if (typeof obj === 'string') return obj;
  if (isArray(obj)) return array(obj);
  if (isObject(obj)) return JSON.stringify(obj);
}


module.exports = {
  get: getFormatter
}
