import React from 'react';
import MainLayout from './layouts/main';
import HomeView from './views/home/HomeView';
import ProjectsView from './views/projects/ProjectsView';

const App = () => {
	return (
		<MainLayout>
            <HomeView />
            <ProjectsView />
        </MainLayout>
	);
};

export default App;
