import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import { Router } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';


import MainMenu from './components/MainMenu'
import Pages from './components/Pages'

class App extends React.Component{
	render(){
		return(
			<div>
				<MainMenu/>
				<Pages/>
			</div>
		)
	}
}


document.addEventListener('DOMContentLoaded', () => {
	const app = document.getElementById('my-app')
	
	ReactDOM.render(
		<HashRouter>
			<App/>
		</HashRouter>
		, app);

})
