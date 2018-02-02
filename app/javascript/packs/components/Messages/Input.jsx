import React from 'react'

export default class InputComponent extends React.Component {
	handleChange(e){
		const newValue=e.target.value;
		this.props.inputChanged(newValue)
	}

	render(){
		return(
			<div>
				Input here:
				<input value={this.props.startValue} onChange={this.handleChange.bind(this)}/>
			</div>
		)
	}
}
