import React from 'react';
import MainLayout from './layouts/main';
import HomeView from './views/home/HomeView';
import ProjectsView from './views/projects/ProjectsView';
import ServicesView from './views/services/ServicesView';
import AboutView from './views/about/AboutView';
import ProductsView from './views/products/ProductsView';
import {Router, Route} from 'react-router';
import {createMemoryHistory} from 'history';

export default function App() {
	const history = createMemoryHistory();
	return (
		<Router history={history}>
			<MainLayout>
				<Route path='/' component={HomeView} exact />
				<Route path='/projects' component={ProjectsView} exact />
				<Route path='/products' component={ProductsView} exact />
				<Route path='/services' component={ServicesView} exact />
				<Route path='/about' component={AboutView} exact />
			</MainLayout>
		</Router>
	);
}
