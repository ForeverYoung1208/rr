import React from 'react';
import LabelComponent from './Messages/Label';
import {Clock} from './Clock'

export default class Part2 extends React.Component {
	constructor(){
		super();
	}

	
	render(){
		return(
			<div>
				<LabelComponent 
					labelCaption='Just look at these wonderful messages of Part2!!!!!'
					inputValue='No inputs here'
				/>
				<Clock interval='500'/>
				<Clock interval='1000'/>
				<Clock interval='2000'/>
			</div>
		)
	}
}
