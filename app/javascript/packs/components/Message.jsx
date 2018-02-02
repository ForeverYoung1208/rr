import React from 'react';


import LabelComponent from './Message/Label';
import InputComponent from './Message/Input';


export default class Message extends React.Component {
	constructor(){
		super();
		this.state = { messageText: 'text' }
	
	}

	inputChange(messageText){
		//this.setState( {messageText: messageText} )
		//the same:
		this.setState( {messageText} )
	}

	render(){
		// console.log( this.props )
		// const urlParams = this.props.match.params
		// console.log( this.props.match )

		const {params} = this.props.match
		console.log( this.props )

		return(
			<div>
				<LabelComponent 
					labelCaption='Just look at these wonderful messages!'
					inputValue={this.state.messageText}
				/>
				<LabelComponent 
					labelCaption='Another label here'
					inputValue={this.state.messageText}
				/>

				<h2> test Message: {params.text} </h2>
				
				<InputComponent startValue={this.state.messageText} inputChanged={this.inputChange.bind(this)}/>
				<h2> Inputted message: {this.state.messageText}</h2>
			</div>
		)
	}
}
