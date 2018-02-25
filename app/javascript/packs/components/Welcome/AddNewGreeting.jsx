import React from 'react'
import PropTypes from 'prop-types'

const BtnWithField = (props) => {
	return(
		<div className='row'>
			<div className="input-group mb-3 col-sm-6">
			  <div className="input-group-prepend">
			    <button className="btn btn-outline-secondary" type="button" onClick={props.onBtnPressed}>{props.btnText}</button>
			  </div>
			  <input 
			  	type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"
			  	value={props.value}
			  	onChange={props.onValueChanged}
			  	ref={props.inputRef}
			  />
			</div>
		</div>
	)

}

BtnWithField.propTypes = {
	onBtnPressed: PropTypes.func,
	btnText: PropTypes.string,
  value: PropTypes.oneOfType([
  	PropTypes.string,
  	PropTypes.number
  ]),
	onChange: PropTypes.func,
	ref: PropTypes.func
}


export class AddNewGreeting extends React.Component{
	constructor(props){
		super(props);
		this.state = {value: ''};
	}	

	textSubmitted = () =>{
		if (this.state.value == '') {
			this.inputRef.focus();
		} else {
			this.props.onTextSubmitted(this.state.value);
			this.setState({value: ''})
		}
		
	}

	valueChanged = (e) =>{
		this.setState({value: e.target.value })
	}

	render(){
		return(
			<BtnWithField 
				btnText='Add New Greeting:' 
				value={this.state.value}
				onBtnPressed={this.textSubmitted.bind(this)} 
				onValueChanged={this.valueChanged.bind(this)}
				inputRef={(el_i) => this.inputRef = el_i }
			/>

		)
	}
}