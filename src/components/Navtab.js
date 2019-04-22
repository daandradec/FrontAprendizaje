import React from 'react';

const Navtab = () => {
    return (
      <ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item border-bottom border-right">
					<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Añadir</a>
				</li>
				<li className="nav-item border-bottom border-right">
					<a className="nav-link" id="show-tab" data-toggle="tab" href="#show" role="tab" aria-controls="show" aria-selected="false">Ver</a>
				</li>
				<li className="nav-item border-bottom border-right">
					<a className="nav-link" id="delete-tab" data-toggle="tab" href="#delete" role="tab" aria-controls="delete" aria-selected="false">Eliminar</a>
				</li>
				<li className="nav-item border-bottom">
					<a className="nav-link" id="update-tab" data-toggle="tab" href="#update" role="tab" aria-controls="update" aria-selected="false">Actualizar</a>
				</li>            
      </ul>
    );
};

export default Navtab;