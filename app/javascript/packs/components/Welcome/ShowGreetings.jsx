import React from 'react'

const Greeting = (props) => {
	return(
		<div className='row i-row-margin'>
			<li className='col-sm-2 i-greetings-line'> {props.message} </li>
			<button name={props.inputKey} className="btn btn-danger" onClick={props.onBtnDeleteOneClick}><span className="fas fa-trash-alt"></span></button>
			<input name={props.inputKey} type="checkbox" className="i-checbox-margin" onChange={props.onCheckboxChange} checked={props.checked} />
		</div>
	)
}

export class ShowGreetings extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selected: new Set
		}
	}	

	checkboxChanged = (e) => {
		const greetingId = e.target.name
		const selectedCheckboxes = new Set (this.state.selected)
		selectedCheckboxes.has(greetingId) ? selectedCheckboxes.delete(greetingId) : selectedCheckboxes.add(greetingId)
		this.setState({selected: selectedCheckboxes })
	}

	massDeleteClick = () =>{
		const s = new Set (this.state.selected)
		this.props.onBtnDeleteClick(s)
		this.setState({selected: new Set })
	}

	oneDeleteClick = (e) =>{
		const id = e.target.name
		const selectedCheckboxes = new Set (this.state.selected)
		const s = new Set
		s.add(id)		

		selectedCheckboxes.delete(id)

		this.setState({selected: selectedCheckboxes })
		this.props.onBtnDeleteClick(s)

	}



	render(){
		let grs = this.props.greetings.map( 
			g => <Greeting 
							key={g.id} 
							inputKey={g.id} 
							message={g.message} 
							onCheckboxChange={this.checkboxChanged}
							checked={this.state.selected.has(g.id.toString())}
							onBtnDeleteOneClick={this.oneDeleteClick}
						/> 
		)
		return(			
			<div>
				<ul>
					{grs}
				</ul>
				<button className='btn btn-danger' onClick={this.massDeleteClick}>Delete all selected</button>
			</div>

			)
	}
}