import React from 'react'
import Cita from './cita.jsx'

function listado({ citas, useCitas }) {
    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(item=>(
                <Cita item={item} useCitas={useCitas} citas={citas}></Cita>
            ))}
        </div>
    );
}

export default listado