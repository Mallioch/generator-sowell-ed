var React = require('react');
var store = require('./store-sample.js');

class FluxComponent extends React.Component {

  constructor() {
    super();

    store.actions.doThing();

    this.state = store.getState();
  }

  componentDidMount() {
    var self = this;
    store.onChange(function(state) {
      self.setState(state);
    });
  }

  _onClick() {
    store.actions.doThing()
  }

  render() {
    var self = this;

    return (
      <div>
        <div onClick={function() { self._onClick(); }}>Click me: {this.state.count}</div>
      </div>
    )
  }
}

module.exports = FluxComponent;
