import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Message from './components/Message'



document.addEventListener('DOMContentLoaded', () => {
	const app = document.getElementById('message')
	ReactDOM.render(<Message/>, app)
})
