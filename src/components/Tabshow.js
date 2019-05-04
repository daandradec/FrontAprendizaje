import React from 'react';
import Tablelayout from './Tablelayout'

// componente que muestra el cuerpo del crud de mostrar
const Tabshow = (props) => {
    return (
        <div className="tab-pane fade" id="show" role="tabpanel" aria-labelledby="show-tab">											
            <Tablelayout rclass="" buttonFlag={false} respuestajson={props.respuestajson}/>    
        </div>


    );
};

export default Tabshow;