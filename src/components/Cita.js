import React from 'react';

const Cita = ({cita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.mascota}</h3>
            <p className="card-text"><span>Nombre Dueño: </span> {cita.propietario}</p>
            <p className="card-text"><span>Fecha: </span> {cita.date}</p>
            <p className="card-text"><span>Hora: </span> {cita.time}</p>
            <p className="card-text"><span>Síntomas: </span></p>
            <p className="card-text">{cita.sintomas}</p>
        </div>
    </div>
);

export default Cita;