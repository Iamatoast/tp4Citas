import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './pages/Layout.jsx'
import Listado from './pages/listado.jsx'
import Cita from './pages/cita.jsx'
import Form from './pages/form.jsx'
import NoPage from './pages/NoPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="listado" element={<Listado />}>
		<Route path={"cita"} element={<Cita />}/>
          </Route>
          <Route path="form" element={<Form />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
