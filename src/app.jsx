import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './screens/home'
import About from './screens/about'
import Counter from './screens/counter'

class App extends React.Component {
	render() {
		return (
			<div className="content-wrapper">
				<Router>
					<nav className="main-nav">
						<Link to="/">Home</Link>
						&nbsp; &middot; &nbsp;
						<Link to="/about/">About</Link>
						&nbsp; &middot; &nbsp;
						<Link to="/counter/">Counter</Link>
					</nav>
					<div>
						<Route path="/" exact component={Home} />
						<Route path="/about/" component={About} />
						<Route path="/counter/" component={Counter} />
					</div>
				</Router>
			</div>
		)
	}
}

export default hot(App)
