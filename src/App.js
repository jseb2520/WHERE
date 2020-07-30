import React from 'react';
import MainLayout from './layouts/main';
import HomeView from './views/home/Home';
import ProjectsView from './views/projects/ProjectsView';
import ServicesView from './views/services/ServicesView';
import AboutView from './views/about/AboutView';
import ProductsView from './views/products/ProductsView';
import {Switch, Route} from 'react-router-dom';

import {ParallaxProvider} from 'react-scroll-parallax';

export default function App() {
	return (
		<Switch>
			<ParallaxProvider>
				<MainLayout>
					<Route path='/' component={HomeView} exact />
					<Route path='/projects' component={ProjectsView} exact />
					<Route path='/products' component={ProductsView} exact />
					<Route path='/services' component={ServicesView} exact />
					<Route path='/about' component={AboutView} exact />
				</MainLayout>
			</ParallaxProvider>
		</Switch>
	);
}
