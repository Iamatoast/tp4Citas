import React from 'react'
import './form.css'

export default function form({addCitas, citas}) {
  const addCita = (formData) => {
    let temp = [...citas];
    let newCita = {
      id: citas.length,
      nombre: formData.get("nombre"),
      propietario: formData.get("propietario"),
      fecha: formData.get("fecha"),
      hora: formData.get("hora"),
      sintomas: formData.get("sintomas")
    }
    if (!newCita.nombre || !newCita.propietario || !newCita.fecha || !newCita.hora || !newCita.sintomas){
      alert("Completa todo los campos");
    }
    else{
      temp.push(newCita);
      addCitas(temp);
      localStorage.setItem("citas", JSON.stringify(temp));
    }
  }

  return (
    <div className="one-half column">
        <h2>Crear mi Cita</h2>
        <form action={addCita}>
            <label>Nombre Mascota</label>
            <input type="text" name="nombre" className="u-full-width" placeholder="Nombre Mascota" required/>
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" required/>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" required/>
            <label>hora</label>
            <input type="time" name="hora" className="u-full-width" required/>
            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width" required></textarea>
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
    </div>
  );
}