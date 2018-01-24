import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


class Message extends React.Component {
	render(){
		alert('aaaa');
		return(
			<h1> test Message </h1>
		)
	}
}


document.addEventListener('DOMContentLoaded', () => {
	const app = document.getElementById('message')
	ReactDOM.render(<Message/>, app)
})
