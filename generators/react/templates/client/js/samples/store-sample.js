var dispatcher = require('./../dispatcher');
var $ = require('jquery');

/* ========================================= */
/* Store Setup */
/* ========================================= */

//customize to whatever makes sense for your state
var state = {
  count: 0
}

var store = {
//  changeEventName: 'customize-name', //customize name, like "todo-store-change"
  callbacks: [],
  actions: {}
}

store.onChange = function(callback) {
  store.callbacks.push(callback);
}

store.change = function() {
  console.log('store change', state);
  var st = store.getState()
  store.callbacks.forEach(function(cb) {
    cb(st);
  });
}

store.getState = function() {
  //customize to store state
  return {
    count: state.count
  };
}

/* ========================================= */
/* Actions */
/* ========================================= */


store.actions.doThing = function() {
  state.count = state.count + 1;
  store.change();
}

module.exports = store;
