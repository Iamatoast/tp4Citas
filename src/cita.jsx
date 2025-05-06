import React from 'react'
import './cita.css'

function cita({item, useCitas, citas}) {
  const remove = (key) =>{
    let temp = [...citas];
    temp.splice(key, 1);
    useCitas(temp);
  }

  return (
    <div className="cita">
        <p>Mascota: <span>{item.nombre}</span></p>
        <p>Dueño: <span>{item.duenio}</span></p>
        <p>Fecha: <span>{item.fecha}</span></p>
        <p>Hora: <span>{item.hora}</span></p>
        <p>Sintomas: <span>{item.sintomas}</span></p>
        <button className="button elimnar u-full-width" onClick={() => remove(item.id)}>Eliminar ×</button>
    </div>
  )
}
export default cita