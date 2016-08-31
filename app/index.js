var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = 'fca245742c2548fc900c19625c9c8f6c';
var sentryApp = '95812';
var sentryUrl = 'https://' + sentryKey + '@app.sentry.io/' + sentryApp;

Raven.config(sentryUrl).install();

ReactDOM.render(routes, document.getElementById('app'))
