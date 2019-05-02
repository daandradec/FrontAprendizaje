import React, { Component } from 'react';
import Header from './Header'
import Modal from './Modal'
import Crud from './Crud'   
import $ from 'jquery';

// Componente principal, extiende de la clase componente de react
class App extends Component{
    // metodo render que va mostrar todos los demas componentes
    // la sintaxis dentro del render es JSX

    constructor(props){
        super(props);
        this.state = { respuesta: [] }
        console.log('El componente aun no se ha montado');
      }

      componentDidMount = () => {

        $.ajax({
                
            type: 'GET', 
            url: 'https://nameless-dawn-79175.herokuapp.com/cars/', 
            dataType: 'json',
            success: (request) => { 
                //console.log(request)
                this.setState({respuesta: request.data})
                console.log("este es mi state")
                //console.log(setState);
                console.log(this.state)

             }
            })
    
            
        }
    
    

    render(){
        return (
            <React.Fragment>
                <Header/>
                <Crud respuestajson={this.state.respuesta}/>
                <Modal/>
            </React.Fragment>
        );
    }
}

export default App