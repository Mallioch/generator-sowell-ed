var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  whatUp: function() {
    this.log('Hello dear user! You will want to use one of these submodules:');
    this.log('');
    this.log('yo sowell-ed:html-css-jquery - creates files for a simple jQuery web project');
    this.log('yo sowell-ed:jsboot - creates files for a JS exercise for my TIY FEE course');
    this.log('');
  },

});
