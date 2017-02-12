import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
// importing routes
import routes from './routes';




ReactDOM.render(
	<Router history={browserHistory} routes={routes} />
	,
	document.querySelector('.maincontainer')
);