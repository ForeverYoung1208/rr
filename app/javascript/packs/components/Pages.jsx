import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Message from './Message'
import Part2 from './Part2'



export default class Pages extends React.Component {
	render(){
		return(
			<main>	
				<Switch>
					<Route path="/messages" component={Message}/>
					<Route path="/message/:text" component={Message}/>
					<Route path="/part2" component={Part2}/>
				</Switch>
			</main>

		)
	}
}

