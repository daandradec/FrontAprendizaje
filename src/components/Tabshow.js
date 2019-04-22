import React from 'react';
import Tablelayout from './Tablelayout'

const Tabshow = () => {
    return (
        <div className="tab-pane fade" id="show" role="tabpanel" aria-labelledby="show-tab">											
            <Tablelayout rclass="" buttonFlag={false}/>            
        </div>
    );
};

export default Tabshow;