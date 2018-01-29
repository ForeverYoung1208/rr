import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// import { Router, Route, IndexRoute } from 'react-router';
import { HashRouter, Route} from 'react-router-dom';


import Message from './components/Message'



document.addEventListener('DOMContentLoaded', () => {
	const app = document.getElementById('message')
	// ReactDOM.render(<Message/>, app)
	ReactDOM.render(
		<HashRouter>
			<Route path="/" component={Message}>
			</Route>
		</HashRouter>, app);
})
