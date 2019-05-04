import React, { Component } from 'react';
import Navtab from './Navtab'
import Tabcontent from './Tabcontent'

// Componente que muestra el contenido del crud, barra de navegacion y cuerpo del crud
class Crud extends Component {
    render() {
        const sectionStyles = {
            width:'60%',
            minHeight:'600px'
        }
        return (
            <section className="mx-auto bg-white border mt-2" style={sectionStyles}>
                <Navtab />
                <Tabcontent respuestajson={this.props.respuestajson} callbackcreate={this.props.callbackcreate} callbackdelete={this.props.callbackdelete} modalbutton={this.props.modalbutton}/>
            </section>
        );
    }
} // en este codigo al componente Tabcontent le pasamos como props

export default Crud;