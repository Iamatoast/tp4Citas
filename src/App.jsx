import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Form from './pages/form.jsx';
import Listado from './pages/listado.jsx';
import Navbar from './Navbar.jsx';

function App() {

  return (
	  	<Routes>
	  		<Route path="/" element={<Home />} />
			<Route path="/listado/:addCitas/:citas" element={<Listado />} />
			<Route path="/form/:citas/:addCitas" element={<Form />} />
	  	</Routes>
  );
}

export default App