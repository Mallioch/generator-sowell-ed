var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({

  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Folder name',
      default : this.appname // Default to current folder name
    }]).then(function (answers) {
      this.log('app name', answers.name);
      this.answers = answers;
    }.bind(this));
  },

  writing: function () {

    this.log('writing', 'appname', this.appname, 'answers', this.answers);

    mkdirp.sync(this.destinationPath() + '/' + this.answers.name);
    mkdirp.sync(this.destinationPath() + '/' + this.answers.name + '/util');

    this.fs.copyTpl(
      this.templatePath('util/arrays.js'),
      this.destinationPath(this.answers.name + '/util/arrays.js'),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath('util/core.js'),
      this.destinationPath(this.answers.name + '/util/core.js'),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath('util/formatters.js'),
      this.destinationPath(this.answers.name + '/util/formatters.js'),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath('util/objects.js'),
      this.destinationPath(this.answers.name + '/util/objects.js'),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath('util/test.js'),
      this.destinationPath(this.answers.name + '/util/test.js'),
      this.answers
    );

    this.fs.copyTpl(
      this.templatePath('exercise.js'),
      this.destinationPath(this.answers.name + '/exercise.js'),
      this.answers
    );

  }
});
