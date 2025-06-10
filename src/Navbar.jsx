import React from 'react';
import { Link } from 'react-router';
import './Navbar.css'

export default function Navbar(){
	return(
		<div className="navbar">
			<Link className="link" to="/tp4Citas/">Ir a Home</Link>
			<Link className="link" to="/tp4Citas/listado">Ir a Citas</Link>
			<Link className="link" to="/tp4Citas/form">Ingresar nueva cita</Link>
		</div>
	);
}
