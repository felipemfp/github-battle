var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = require('../styles');


var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>GitHub Battle</h1>
        <p className="lead">Some fancy motto</p>
        <Link to="/playerOne">
          <button className="btn btn-lg btn-success" type="button">Get Started</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
