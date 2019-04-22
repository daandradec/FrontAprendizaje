import React from 'react';
import Tablelayout from './Tablelayout'

// componente que muestra el cuerpo del crud de borrar
const Tabdelete = (props) => {
    return (
        <div className="tab-pane fade" id="delete" role="tabpanel" aria-labelledby="delete-tab">											
            <Tablelayout rclass="" buttonFlag={true} button={<button className="btn btn-danger font-close-button">&times;</button>} />            
        </div>
    );
};

export default Tabdelete;