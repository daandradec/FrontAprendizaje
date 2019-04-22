import React, { Component } from 'react';
import Navtab from './Navtab'
import Tabcontent from './Tabcontent'

class Crud extends Component {
    render() {
        const sectionStyles = {
            width:'60%',
            minHeight:'600px'
        }
        return (
            <section className="mx-auto bg-white border mt-2" style={sectionStyles}>
                <Navtab />
                <Tabcontent modalButton={this.props.modalButton}/>
            </section>
        );
    }
}

export default Crud;