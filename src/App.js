import React from 'react'
import MainLayout from './layouts/main'
import {BrowserRouter} from 'react-router-dom'
import Router from './router/Router'

const App = () => {
	return (
        <BrowserRouter>
            <MainLayout>
                <Router/>
            </MainLayout>
        </BrowserRouter>
	);
};

export default App;
