import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch, Redirect} from 'react-router-dom';

import Home from './views/Home';
import Multimedia from './views/Multimedia';
import Contact from './views/Contact';
import Services from './views/Services';
import Products from './views/Products';
import Research from './views/Research';
import NotFound from './components/NotFound';
import Header from './components/Header';

const hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Header />
			<Route path='/' component={Home} exact />
			<Route path='/contact' component={Contact} exact />
			<Route path='/services' component={Services} exact />
			<Route path='/products' component={Products} exact />
			<Route path='/research' component={Research} exact />
			<Route path='/multimedia' component={Multimedia} exact />
			<Route path='/not-found' component={NotFound} exact />
			<Redirect to='/not-found' />
		</Switch>
	</Router>,
	document.getElementById('root')
);
