import React, { Component } from 'react';

// Componente de la ventana emergente
class Modal extends Component {

    nombreRef = React.createRef();
    documentoRef = React.createRef();
    placaRef = React.createRef();

    constructor(props){
        super(props);
        this.accionActualizar = this.accionActualizar.bind(this); // bind para que no sea necesario usar un arrow function detectando this dentro de la funcion
    }

    accionActualizar(e) {
        e.preventDefault();

        const registro = { 
            name: this.nombreRef.current.value,
            document: this.documentoRef.current.value,
            plate: this.placaRef.current.value
        }

        this.props.callbackupdate(e.target.getAttribute("index"), registro);
    }   

    validarNumerico = e => {
        e.target.value= e.target.value.replace(/[^\d]/,'');
    }

    render() {
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h5 className="modal-title text-muted" id="exampleModalCenterTitle">Actualizando Usuario</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>


                        <div className="modal-body">                            
                            <form onSubmit={this.accionActualizar}>

                                <div className="form-group row">
                                    <label htmlFor="nombre" className="col-4 font-weight-bold text-info">Nombre:</label>
                                    <div className="col-8">
                                        <input className="form-control" id="nombreModal" name="nombreModal" type="text" ref={this.nombreRef}
                                        maxLength="15" required placeholder="nombre"/>
                                    </div>
                                    
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="documento" className="col-4 font-weight-bold text-info">Documento:</label>
                                    <div className="col-8">
                                        <input className="form-control" id="documentoModal" name="documentoModal" type="text" ref={this.documentoRef}
                                        pattern="[0-9.]+" maxLength="15" required placeholder="numerico" onKeyUp={this.validarNumerico}/>
                                    </div>						
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="placa" className="col-4 font-weight-bold text-info">Placa:</label>
                                    <div className="col-8">
                                        <input className="form-control" id="placaModal" name="placaModal" type="text" ref={this.placaRef} 
                                        pattern="[a-zA-Z]{3}-?[0-9]{3}" maxLength="7" required placeholder="XXX-000"/>
                                    </div>					
                                </div>

                                <div className="form-group text-center py-3">
                                    <input type="submit" id="modalFormButton" className="btn btn-info btn-block font-weight-bold" value="Actualizar" />
                                </div>

                            </form>
                        </div>


                    </div>
                </div>
            </div>
            
        );
    }
}

export default Modal;