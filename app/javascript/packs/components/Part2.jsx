import React from 'react';
import LabelComponent from './Messages/Label';

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
			</div>
		)
	}
}
