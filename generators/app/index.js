var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  whatUp: function() {
    this.log('Hello dear user! You will want to use one of these submodules:');
    this.log('');
    this.log('yo sowell-ed:vanillajs - creates files for a vanilla web page');
    this.log('yo sowell-ed:jquery - creates files for a simple jQuery web project');
    //this.log('yo sowell-ed:jsboot - creates files for a JS exercise for my TIY FEE course');
    this.log('yo sowell-ed:backbone - creates files for a Backbone project');
    this.log('yo sowell-ed:qunit - creates files for a Qunit standalone project');
    this.log('yo sowell-ed:react-gulp - creates files for a React and Gulp project');
    this.log('yo sowell-ed:react-webpack - creates files for a React and Webpack project');
    this.log('');
  },

});
