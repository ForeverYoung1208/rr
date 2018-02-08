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
			.then( resj => this.setState({greetings: resj}) )
	}

	massDeleteClicked = (selected) => {
		const token = $('meta[name="csrf-token"]').attr('content');
		const myHeaders = new Headers({
			'X-CSRF-Token': token,
			'Content-Type': 'application/json'
		});

		const payload = {
			greetings:{ 
				'ids': Array.from(selected)
			}
		}
		
		console.log('send to delete ids:'+JSON.stringify(payload))
		
		fetch(
			'greetings.json',
			{
				method: 'DELETE',
				headers: myHeaders,
				body: JSON.stringify(payload),
				credentials: "same-origin"
			}
		).then( res => res.json())
			.then( resj => this.setState({greetings: resj}) )		

	}



	render(){
		return(
			<div className='container-fluid'>
				<ShowGreetings greetings={this.state.greetings} onBtnDeleteClick={this.massDeleteClicked.bind(this)}/>
				<AddNewGreeting onTextSubmitted={this.newGreetingSubmitted.bind(this)}/>
			</div>
		)
	}
}
