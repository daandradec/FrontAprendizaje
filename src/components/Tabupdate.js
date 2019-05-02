import React from 'react';
import Tablelayout from './Tablelayout'

// componente que muestra el cuerpo del crud de actualizar
const Tabupdate = (props) => {
    return (
        <div className="tab-pane fade" id="update" role="tabpanel" aria-labelledby="update-tab">											
            <Tablelayout rclass="table-edited" buttonFlag={true} button={<button className="btn btn-sm btn-light">Editar</button>} respuestajson={props.respuestajson}/>            
        </div>
    );
};

export default Tabupdate;