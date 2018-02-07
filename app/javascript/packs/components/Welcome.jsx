import React from 'react';
import {ShowGreetings} from	 './Welcome/ShowGreetings'
import {AddNewGreeting} from	 './Welcome/AddNewGreeting'


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

	newGreetingSubmitted = (text) => {
		const token = $('meta[name="csrf-token"]').attr('content');
		const myHeaders = new Headers({
			'X-CSRF-Token': token,
			'Content-Type': 'application/json'
		});

		const payload = {
			greeting:{ 
				'text': text
			}
		}


		fetch(
			'greetings.json',
			{
				method: 'POST',
				headers: myHeaders,
				body: JSON.stringify(payload),
				credentials: "same-origin"
			}
		).then( res => res.json())
			.then( resj => console.log(resj) )




	}

	render(){
		return(
			<div className='container-fluid'>
				<ShowGreetings greetings={this.state.greetings}/>
				<AddNewGreeting onTextSubmitted={this.newGreetingSubmitted.bind(this)}/>
			</div>
		)
	}
}
