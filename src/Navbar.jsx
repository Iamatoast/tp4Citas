import React from 'react';
import { Link } from 'react-router';
import { useState } from 'react';

export default function Navbar(){
  const template = [
    {
      id: 0,
      nombre: "Nina",
      propietario: "Martin",
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: "Le duele la pierna",
    },
    {
      id: 1,
      nombre: "Sifon",
      propietario: "Flecha",
      fecha: '2023-08-05',
      hora: '09:24',
      sintomas: "Duerme mucho",
    },
    {
      id: 2,
      nombre: "Floki",
      propietario: "Ari",
      fecha: '2023-08-05',
      hora: '16:15',
      sintomas: "No está comiendo",
    }
  ];
  if(!localStorage.getItem("citas")) localStorage.setItem("citas", JSON.stringify(template));
  const [citas, addCitas] = useState(JSON.parse(localStorage.getItem("citas")));
	return(
		<>
			<Link to="/">Ir a Home</Link>
			<Link to="/listado/:addCitas/:citas">Ir a Citas</Link>
			<Link to="/form/:addCitas/:citas">Ingresar nueva cita</Link>
		</>
	);
}
