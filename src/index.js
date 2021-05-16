import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sacola from './pages/Sacola';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path="/sacola" component={Sacola} />
				<Route path="/" component={Home} />
			</Switch>
		</BrowserRouter>
		{/* <App /> */}
	</React.StrictMode>,
	document.getElementById('root')
);
