import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Router, Route, IndexRoute, HashHistory } from 'react-router';

import Message from './components/Message'



document.addEventListener('DOMContentLoaded', () => {
	const app = document.getElementById('message')
	// ReactDOM.render(<Message/>, app)
	ReactDOM.render(
		<Router history={HashHistory}>
			<Route path="/" component={Message}>
			<Route />
		</Router>, app);
})
