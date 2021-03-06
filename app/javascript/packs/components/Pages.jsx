import React from 'react'
import { Switch, Route } from 'react-router-dom';

import { Messages } from './Messages'
import Part2 from './Part2'
import Welcome from './Welcome'

// const Welcome = (props) => {
// 	return(
// 		<h1>
// 			Welcome!!!
// 		</h1>
// 	)
// }

export default class Pages extends React.Component {
	render(){
		return(
			<main>	
				<Switch>
				  <Route exact={true} path='/' component={Welcome} />
					<Route path='/part2' component={Part2}/>
					<Route path='/messages' render={ () =><Messages key='1' caption="Block1"/> } />
					<Route path='/messages2' render={ () =><Messages key='2' caption="Block2"/> }/>
				</Switch>
			</main>

		)
	}
}

