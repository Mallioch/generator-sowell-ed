var React = require('react');
var render = require('react-dom').render;

var Header = require('./js/header.jsx').Header;

require("./scss/style.scss");

class App extends React.Component {

  render () {
    return <div>
        <Header />

        <p>This is a React app!</p>
      </div>;
  }
}

render(<App/>, document.getElementById('app'));
