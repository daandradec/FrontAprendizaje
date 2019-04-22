import React, { Component } from 'react';
import Header from './Header'
import Modal from './Modal'
import Crud from './Crud'

// Componente principal, extiende de la clase componente de react
class App extends Component{
    // metodo render que va mostrar todos los demas componentes
    // la sintaxis dentro del render es JSX
    render(){
        return (
            <React.Fragment>
                <Header/>
                <Crud/>
                <Modal/>
            </React.Fragment>
        );
    }
}

export default App