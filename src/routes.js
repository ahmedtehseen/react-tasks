import React from 'react';
import { Route, IndexRoute } from 'react-router';

// importing components
import App from './components/app';
import TableView from './components/table';
import Content from './components/contentTooltip';
import TimerContainer from './components/timerContainer';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={TableView} />
		<Route path="/tooltip" component={Content}/>
		<Route path="/timer" component={TimerContainer}/>
	</Route>
);