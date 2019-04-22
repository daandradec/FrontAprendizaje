import React from 'react';
import Tabadd from './Tabadd'
import Tabshow from './Tabshow'
import Tabdelete from './Tabdelete'
import Tabupdate from './Tabupdate'

// Componente tabcontent, muestra el cuerpo de las pestañas del nav-tab de bootstrap
const Tabcontent = (props) => {
    return (
        <div className="tab-content" id="myTabContent">
            <Tabadd />
            <Tabshow />
            <Tabdelete />
            <Tabupdate/>
        </div>
    );
};

export default Tabcontent;