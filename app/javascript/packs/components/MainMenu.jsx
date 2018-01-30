import React from 'react'
import { Link } from 'react-router-dom';


export default class MainMenu extends React.Component {
	render(){
		return(	
			<div className="container-fluid">
				<nav className="navbar  navbar-expand-sm navbar-dark bg-primary">
				  <a className="navbar-brand" href="#">Navbar</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Empty home <span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#messages">Messages</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#part2">other Part2</a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link disabled" href="#">Nothing2</a>
				      </li>
				    </ul>
				  </div>
				</nav>
			</div>
		)
	}
}