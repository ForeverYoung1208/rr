import React from 'react'

export default class LabelComponent extends React.Component {
	render(){
		return(
			<div style={{border: 'solid 1px'}}>
				<p> {this.props['labelCaption']} </p>
				<span>{this.props['inputValue']}</span>
			</div>
		)
	}
}
