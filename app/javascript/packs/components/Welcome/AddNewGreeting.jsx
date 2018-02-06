import React from 'react'


export class AddNewGreeting extends React.Component{
	constructor(props){
		super(props);
	}	
	render(){
		return(
			<div className='row'>
				<div className="input-group mb-3 col-sm-6">
				  <div className="input-group-prepend">
				    <button className="btn btn-outline-secondary" type="button">Add New Greeting:</button>
				  </div>
				  <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
				</div>
			</div>
		)
	}
}