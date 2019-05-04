import React from 'react';
import Tablelayout from './Tablelayout'

// componente que muestra el cuerpo del crud de borrar
const Tabdelete = (props) => {
    return (
        <div className="tab-pane fade" id="delete" role="tabpanel" aria-labelledby="delete-tab">											
            <Tablelayout rclass="" buttonFlag={true} 
                button={
                    <button className="btn btn-danger font-close-button" onClick={props.callbackdelete}>&times;</button>
                } 
                respuestajson={props.respuestajson} 
            />            
        </div>
    );
};

export default Tabdelete;