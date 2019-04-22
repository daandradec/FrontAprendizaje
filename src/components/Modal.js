import React, { Component } from 'react';

class Modal extends Component {
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
                            <form>

                                <div className="form-group row">
                                    <label htmlFor="nombre" className="col-4 font-weight-bold text-info">Nombre:</label>
                                    <div className="col-8">
                                        <input className="form-control" id="nombreModal" name="nombreModal" type="text" />
                                    </div>
                                    
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="documento" className="col-4 font-weight-bold text-info">Documento:</label>
                                    <div className="col-8">
                                        <input className="form-control" id="documentoModal" name="documentoModal" type="text" />
                                    </div>						
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="placa" className="col-4 font-weight-bold text-info">Placa:</label>
                                    <div className="col-8">
                                        <input className="form-control" id="placaModal" name="placaModal" type="text" />
                                    </div>					
                                </div>

                                <div className="form-group text-center py-3">
                                    <input type="button" id="modalFormButton" className="btn btn-info btn-block font-weight-bold" value="Actualizar" />
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