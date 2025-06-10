import React from 'react';
import Cita from './cita.jsx';
import { useParams } from 'react-router';

function listado() {
	const { citas, addCitas } = useParams();

    return (
        <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(item=>(
                <Cita key={item.id} item={item} addCitas={addCitas} citas={citas}></Cita>
            ))}
        </div>
    );
}

export default listado
