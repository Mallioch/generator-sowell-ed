var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({

  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'folder name',
      default : this.appname // Default to current folder name
    }]).then(function (answers) {
      this.log('app name', answers.name);
      this.answers = answers;
    }.bind(this));
  },

  wat: function() {
    console.log('wat');
    this.log('destination root ->', this.destinationRoot());
    this.log('destination path ->', this.destinationPath());
    this.log('template root ->', this.sourceRoot());
  },

  writing: function () {

    this.log('writing', 'appname', this.appname, 'answers', this.answers);

    var vars = {
      title: this.answers.name
    }




    // In your generator
    mkdirp.sync(this.destinationPath() + '/' + this.answers.name);

    console.log('the vars', vars);

    this.fs.copyTpl(
      this.templatePath('qunit.html'),
      this.destinationPath(this.answers.name + '/qunit.html'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('script.js'),
      this.destinationPath(this.answers.name + '/script.js'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('tests.js'),
      this.destinationPath(this.answers.name + '/tests.js'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('qunit-1.23.1.css'),
      this.destinationPath(this.answers.name + '/qunit-1.23.1.css'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('qunit-1.23.1.js'),
      this.destinationPath(this.answers.name + '/qunit-1.23.1.js'),
      vars
    );
  }
});
