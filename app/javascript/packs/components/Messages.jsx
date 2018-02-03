import React from 'react';


import LabelComponent from './Messages/Label';
import InputComponent from './Messages/Input';


class Message extends React.Component {
	constructor(props){
		super(props);
		this.state = { messageText: props['text'] }
	
	}

	inputChanged(messageText){
		//this.setState( {messageText: messageText} )
		//the same:
		this.setState( {messageText} )
	}

	render(){
		// console.log( this.props )
		// const urlParams = this.props.match.params
		// console.log( this.props.match )
		// const {params} = this.props.match

		return(
			<div>
				<h2>{this.props.caption}</h2>
				<LabelComponent 
					labelCaption='Just look at these wonderful message!'
					inputValue={this.state.messageText}
				/>
				<LabelComponent 
					labelCaption='Just look at these wonderful message again!'
					inputValue={this.state.messageText}
				/>

				
				<InputComponent startValue={this.state.messageText} inputChanged={this.inputChanged.bind(this)}/>
				Link from message <a href={this.state.messageText}>{this.state.messageText}</a>
			</div>
		)
	}
}

export class Messages extends React.Component {
	render() {
		return(
			<div>
				<h2> CAPTION: {this.props['caption']} </h2>

				{['m1', 'm2', 'm3'].map( (val,index)=>(
						<Message key={index} caption={val} text={"https://reactjs.org/docs/handling-events.html"}/>		
					))}
				
			</div>

			)
	}

}
