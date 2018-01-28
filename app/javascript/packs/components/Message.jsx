import React from 'react';


import LabelComponent from './Message/Label';
import InputComponent from './Message/Input';


export default class Message extends React.Component {
	constructor(){
		super();
		this.state = { messageText3: 'input something'}
	
		// bad practice
		this.messageText2 = 'hello again!'
	}

	inputChange(messageText3){
		//this.setState( {messageText3: messageText3} )
		//the same:
		this.setState( {messageText3} )
	}

	//bad practice
	getMessageText(){
		return 'Hello World!'
	}

	render(){
		return(
			<div>
				<LabelComponent 
					labelCaption='Just look at these wonderful messages!'
					inputValue={this.state.messageText3}
				/>
				<LabelComponent 
					labelCaption='Another label here'
					inputValue={this.state.messageText3}
				/>

				<h2> test Message: {this.getMessageText()}, {this.messageText2} </h2>
				<h2> Inputted message: {this.state.messageText3}</h2>
				<InputComponent startValue={this.state.messageText3} inputChanged={this.inputChange.bind(this)}/>
			</div>
		)
	}
}
