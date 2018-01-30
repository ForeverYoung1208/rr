import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


import MainMenu from './components/MainMenu'
import Pages from './components/Pages'


document.addEventListener('DOMContentLoaded', () => {
	const app = document.getElementById('my-app')
	
	ReactDOM.render(
		<BrowserRouter>
			<div>
				<MainMenu/>
				<Pages/>
			</div>
		</BrowserRouter>
		, app);

})
