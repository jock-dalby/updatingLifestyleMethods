var React = require('react');
var ReactDOM = require('react-dom');
var yellow = 'rgb(255, 215, 18)';

var TopNumber = React.createClass({
  propTypes: {
    number: React.PropTypes.number,
    game: React.PropTypes.bool
  },

  getInitialState: function () {
    return { 'highest': 0 };
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.number > this.state.highest) {
      this.setState({ highest: nextProps.number})
    }
  },

  render: function () {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
});

module.exports = TopNumber;

// Good! Now whenever TopNumber gets a new this.props.number, componentWillReceiveProps will use it to keep track of the highest number so far.

// This is a common use of componentWillReceiveProps: comparing incoming props to current props or state, and deciding what to render based on that comparison.

// If you are already comfortable with React, then you may have caught a detail about this example that is considered bad form. this.state.highest is derived from props. That means that we use information from props to set the value of information stored in state.
