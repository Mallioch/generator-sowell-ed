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
      this.log('folder name', answers.name);
      this.answers = answers;
    }.bind(this));
  },

  writing: function () {

    //this.log('writing', 'appname', this.appname, 'answers', this.answers);

    var vars = {
      title: this.answers.name
    }




    // In your generator
    mkdirp.sync(this.destinationPath() + '/' + this.answers.name);
    mkdirp.sync(this.destinationPath() + '/' + this.answers.name + '/public');
    mkdirp.sync(this.destinationPath() + '/' + this.answers.name + '/client');
    mkdirp.sync(this.destinationPath() + '/' + this.answers.name + '/client/js');
    mkdirp.sync(this.destinationPath() + '/' + this.answers.name + '/client/js/samples');
    mkdirp.sync(this.destinationPath() + '/' + this.answers.name + '/client/scss');
    mkdirp.sync(this.destinationPath() + '/' + this.answers.name + '/server');

    console.log('the vars', vars);

    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath(this.answers.name + '/.babelrc'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(this.answers.name + '/package.json'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath(this.answers.name + '/README.md'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath(this.answers.name + '/webpack.config.js'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('server/server.js'),
      this.destinationPath(this.answers.name + '/server/server.js'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('client/index.jsx'),
      this.destinationPath(this.answers.name + '/client/index.jsx'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('client/js/header.jsx'),
      this.destinationPath(this.answers.name + '/client/js/header.jsx'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('client/js/dispatcher.js'),
      this.destinationPath(this.answers.name + '/client/js/dispatcher.js'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('client/js/samples/store-sample.js'),
      this.destinationPath(this.answers.name + '/client/js/samples/store-sample.js'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('client/js/samples/flux-component.jsx'),
      this.destinationPath(this.answers.name + '/client/js/samples/flux-component.jsx'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('client/scss/style.scss'),
      this.destinationPath(this.answers.name + '/client/scss/style.scss'),
      vars
    );

    this.fs.copyTpl(
      this.templatePath('client/scss/_reset.scss'),
      this.destinationPath(this.answers.name + '/client/scss/_reset.scss'),
      vars
    );


    this.fs.copyTpl(
      this.templatePath('public/index.html'),
      this.destinationPath(this.answers.name + '/public/index.html'),
      vars
    );
  }
});
