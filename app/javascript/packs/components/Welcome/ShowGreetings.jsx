import React from 'react'

const Greeting = (props) => {
	return(
		<div className='row'>
			<li className='col-sm-2'> {props['m']} </li>
		</div>
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