import React from 'react';


import LabelComponent from './Messages/Label';
import InputComponent from './Messages/Input';


class Message extends React.Component {
	constructor(){
		super();
		this.state = { messageText: 'text' }
	
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
					labelCaption='Just look at these wonderful messages!'
					inputValue={this.state.messageText}
				/>
				<LabelComponent 
					labelCaption='Another label here'
					inputValue={this.state.messageText}
				/>

				
				<InputComponent startValue={this.state.messageText} inputChanged={this.inputChanged.bind(this)}/>
				<h2> Inputted message: {this.state.messageText}</h2>
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
						<Message key={index} caption={val}/>		
					))}
				
			</div>

			)
	}

}

export class Messages2 extends Messages{}
