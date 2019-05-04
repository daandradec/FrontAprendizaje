import React, { Component } from 'react';
import Header from './Header'
import Modal from './Modal'
import Crud from './Crud'   
import $ from 'jquery';
import axios from 'axios';


// Componente principal, extiende de la clase componente de react
class App extends Component{
    // metodo render que va mostrar todos los demas componentes
    // la sintaxis dentro del render es JSX

    constructor(props){
        super(props);
        this.state = { respuesta: [] }
      }

    componentDidMount = () => {

        $.ajax({                
            type: 'GET', 
            url: 'https://nameless-dawn-79175.herokuapp.com/cars/', 
            dataType: 'json',
            success: (request) => { 
                this.setState({respuesta: request.data})
             }
        })                
    }
    
    crearRegistro = async registro => {
        const url = `https://nameless-dawn-79175.herokuapp.com/cars`;

        await axios.post(url,registro)
        .then(respuesta => {
            this.setState({respuesta: [...this.state.respuesta,respuesta.data.data]})
        }, () => alert("Registro añadido con exito"))
        .catch(e => {alert("error");console.log(e)})
    }

    eliminarRegistro = async e => {
        // eliminar el registro del state
        const indice = e.target.parentElement.parentElement.getAttribute("index");
        const id_item = this.state.respuesta[indice].id;
        const nueva_lista_carros = this.state.respuesta.filter(item => item.id !== id_item)
        this.setState({respuesta:nueva_lista_carros});

        const url = `https://nameless-dawn-79175.herokuapp.com/cars/${id_item}`;

        await axios.delete(url);
    }

    actualizarRegistro = async (id, registro_actualizado) => {
        const registros = [...this.state.respuesta];
        registros[parseInt(id)].attributes = registro_actualizado;        
        this.setState({respuesta:registros});

        const id_item = this.state.respuesta[parseInt(id)].id;
        const url = `https://nameless-dawn-79175.herokuapp.com/cars/${id_item}`;
        await axios.put(url,registro_actualizado).catch(e => {alert("error");console.log(e)});
    }    

    mostrarModal = e => {
        const modal = document.getElementById("exampleModalCenter");
        const button = e.target;

        const field_form = modal.children[0].children[0].children[1].children[0];
        const fields_modal = modal.children[0].children[0].children[1].children[0].children;
        const field_trow = button.parentElement.parentElement;
        const fields_tdchildren = field_trow.children;
        
        fields_modal[0].children[1].children[0].value = fields_tdchildren[2].innerText;
        fields_modal[1].children[1].children[0].value = fields_tdchildren[3].innerText;
        fields_modal[2].children[1].children[0].value = fields_tdchildren[4].innerText;
        
        field_form.setAttribute("index",field_trow.getAttribute("index"))
    }

    render(){
        return (
            <React.Fragment>
                <Header/>
                <Crud respuestajson={this.state.respuesta} 
                    callbackcreate={this.crearRegistro} 
                    callbackdelete={this.eliminarRegistro} 
                    modalbutton={this.mostrarModal}/>
                <Modal callbackupdate={this.actualizarRegistro}/>
            </React.Fragment>
        );
    }
}

export default App