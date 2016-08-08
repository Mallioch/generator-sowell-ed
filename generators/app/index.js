var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }]).then(function (answers) {
      this.log('app name', answers.name);
      this.answers = answers;
    }.bind(this));
  },

  coolMethod: function() {
    this.log('executing this cool method yo');
  },

  wat: function() {
    this.log('destination root ->', this.destinationRoot());
    this.log('destination path ->', this.destinationPath());
    this.log('template root ->', this.sourceRoot());
  },

  writing: function () {

    this.log('writing', 'appname', this.appname, 'answers', this.answers);

    this.fs.copyTpl(
      this.templatePath('page.html'),
      this.destinationPath('public/dirka.html'),
      { title: this.answers.name }
    );
  }
});
