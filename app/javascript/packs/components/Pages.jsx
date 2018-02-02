import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Message from './Message'
import Part2 from './Part2'
//import Welcome from './Welcome'

const Welcome = (props) => {
	return(
		<h1>
			Welcome!!!
		</h1>
	)
}

export default class Pages extends React.Component {
	render(){
		return(
			<main>	
				<Switch>
				  <Route exact={true} path='/' component={Welcome} />
					<Route path='/messages' component={Message} />
					<Route path='/message/:text?' component={Message}/>
					// "?" means optional here
					<Route path='/part2' component={Part2}/>
				</Switch>
			</main>

		)
	}
}

