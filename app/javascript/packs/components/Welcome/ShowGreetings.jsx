import React from 'react'

const Greeting = (props) => {
	return(
		<li > {props['m']} </li>
	)
}

export class ShowGreetings extends React.Component{
	constructor(props){
		super(props);
	}	
	render(){
		let grs = this.props['greetings'].map( g => <Greeting key={g.id} m={g.message}/> )
		return(
			
			<ul>
				{grs}
			</ul>
			)
	}

}