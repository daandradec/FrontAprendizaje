import React, { Component } from 'react';
import Header from './Header'
import Modal from './Modal'
import Crud from './Crud'

class App extends Component{

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