import React from 'react'
import {
  BrowserRouter, 
  Switch,
  withRouter,
  Route} from 'react-router-dom'

//Views
import HomeView from '../views/home/HomeView'
import ProjectsView from '../views/projects/ProjectsView'
import ProductsView from '../views/products/ProductsView'
import ServicesView from '../views/services/ServicesView'
import AboutView from '../views/about/AboutView'

export default function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/" component= {withRouter(HomeView)}/>
        <Route path="/projects" component= {withRouter(ProjectsView)}/>
        <Route path="/services" component= {withRouter(ServicesView)}/>
        <Route path="/products" component= {withRouter(ProductsView)}/>
        <Route path="/about" component= {withRouter(AboutView)}/>
      </Switch>
    </>
  )
}
