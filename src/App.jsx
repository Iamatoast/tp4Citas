import './App.css'
import Form from './form.jsx'
import Listado from './listado.jsx'
import { useState } from 'react';

function App() {
  const [citas, useCitas] = useState([
    {
      id: 0,
      nombre: "Nina",
      duenio: "Martin",
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: "Le duele la pierna",
    },
    {
      id: 1,
      nombre: "Sifon",
      duenio: "Flecha",
      fecha: '2023-08-05',
      hora: '09:24',
      sintomas: "Duerme mucho",
    },
    {
      id: 2,
      nombre: "Floki",
      duenio: "Ari",
      fecha: '2023-08-05',
      hora: '16:15',
      sintomas: "No está comiendo",
    },
  ]);

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Form useCitas={useCitas}></Form>
          <Listado citas={citas} useCitas={useCitas}></Listado>
        </div>
      </div>
    </>
  )
}

export default App
