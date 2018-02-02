import React from 'react'
import { Link } from 'react-router-dom';


export default class MainMenu extends React.Component {
	render(){
		return(	
			<div className="container-fluid">
				<nav className="navbar  navbar-expand-sm navbar-dark bg-primary">
				  <Link className="navbar-brand" to="#">Navbar</Link>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav">
				      <li className="nav-item active">
				        <Link className="nav-link" to="/" activeClassName='i-active'>Empty home <span className="sr-only">(current)</span></Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/messages">Messages</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/part2">other Part2</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/message/MMMMEEEEEE">Message</Link>
			      </li>
				    </ul>
				  </div>
				</nav>
			</div>
		)
	}
}