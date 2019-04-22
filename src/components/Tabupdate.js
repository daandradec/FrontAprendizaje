import React from 'react';
import Tablelayout from './Tablelayout'

const Tabupdate = (props) => {
    return (
        <div className="tab-pane fade" id="update" role="tabpanel" aria-labelledby="update-tab">											
            <Tablelayout rclass="table-edited" buttonFlag={true} button={<button className="btn btn-sm btn-light">Editar</button>}/>            
        </div>
    );
};

export default Tabupdate;