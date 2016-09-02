import React from 'react';
import {render} from 'react-dom';
import routes from './config/routes';
import Raven from 'raven-js';

const sentryKey = 'fca245742c2548fc900c19625c9c8f6c';
const sentryApp = '95812';
const sentryUrl = 'https://' + sentryKey + '@app.sentry.io/' + sentryApp;

Raven.config(sentryUrl).install();

render(routes, document.getElementById('app'))
