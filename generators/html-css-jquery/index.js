var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({

  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name (file path friendly)',
      default : this.appname // Default to current folder name
    },
    {
      type    : 'input',
      name    : 'jsAppName',
      message : 'Name of your JS app',
      default : 'SampleApp' // Default to current folder name
    }]).then(function (answers) {
      this.log('app name', answers.name);
      this.log('js app name', answers.jsAppName);
      this.answers = answers;
    }.bind(this));
  },

  wat: function() {
    this.log('destination root ->', this.destinationRoot());
    this.log('destination path ->', this.destinationPath());
    this.log('template root ->', this.sourceRoot());
  },

  writing: function () {

    this.log('writing', 'appname', this.appname, 'answers', this.answers);

    var vars = {
      title: this.answers.name,
      jsAppName: this.answers.jsAppName
    }




    // In your generator
    mkdirp.sync(this.destinationPath() + '/' + this.answers.name);

    console.log('the vars', vars);

    this.fs.copyTpl(
      this.templatePath('page.html'),
      this.destinationPath(this.answers.name + '/index.html'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('script.js'),
      this.destinationPath(this.answers.name + '/script.js'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('style.css'),
      this.destinationPath(this.answers.name + '/style.css'),
      vars
    );
  }
});
