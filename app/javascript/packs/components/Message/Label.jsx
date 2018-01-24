import React from 'react'

export default class LabelComponent extends React.Component {
	render(){
		return(
			<div style={{border: 'solid 1px'}}>
				<h1> {this.props['labelCaption']} </h1>
				<span>{this.props['inputValue']}</span>
			</div>
		)
	}
}
