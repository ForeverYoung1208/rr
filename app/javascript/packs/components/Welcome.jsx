import React from 'react';
import {ShowGreetings} from	 './Welcome/ShowGreetings'
// import {AddNewGreeting} from	 './Welcome/AddNewGreeting'


export default class Welcome extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			greetings: []
		};
	};

	componentDidMount(){
		fetch('greetings/index.json')
			.then( res => res.json())
				.then( resj => this.setState({greetings: resj}) )
	
	}

	render(){
		return(
			<div>
				<ShowGreetings greetings={this.state.greetings}/>
				{/*<AddNewGreeting />*/}
			</div>
		)
	}
}
