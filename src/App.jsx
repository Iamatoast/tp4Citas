import './App.css'
import Form from './from.jsx'
import Listado from './listado.jsx'

function App() {

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <Form></Form>
          <Listado></Listado>
        </div>
      </div>
    </>
  )
}

export default App
