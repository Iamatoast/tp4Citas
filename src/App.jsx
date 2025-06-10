import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Form from './pages/form.jsx';
import Listado from './pages/listado.jsx';
import Navbar from './Navbar.jsx';
import { useState } from 'react';

function App() {
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

  return (
	  <>
	  	<Navbar />
	  	<Routes>
	  		<Route path="/tp4Citas/" element={<Home />} />
			<Route path="/tp4Citas/listado" element={<Listado addCitas={addCitas} citas={citas} />} />
			<Route path="/tp4Citas/form" element={<Form addCitas={addCitas} citas={citas} />} />
	  	</Routes>
	  </>
  );
}

export default App
