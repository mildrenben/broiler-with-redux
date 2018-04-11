import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import ContactScreen from './components/ContactScreen'
import ArticleScreen from './components/ArticleScreen'
import NotFoundScreen from './components/NotFoundScreen'
import Nav from './components/Nav'
import { Provider } from 'react-redux'
import store from './store'

// Example of global css
import './styles/global'

const Routes = () => (
	<Provider store={store}>
		<div>
			{ /*  Nav component is outside of a specific route and thus appears everywhere  */}
			<Nav />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/contact' component={ContactScreen} />
				{ /* This article route has a parameter that is passed on to the component */ }
				<Route path='/article/:title' component={ArticleScreen} />
				{ /* 404 - Page not found */ }
				<Route component={NotFoundScreen} />
			</Switch>
		</div>
	</Provider>
)

const Router = () => (
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
)

export default Router
