import React from 'react';
 
 // componente que muestra el cuerpo del crud de añadir
 class Tabadd extends React.Component {

    nombreRef = React.createRef();
    documentoRef = React.createRef();
    placaRef = React.createRef();

    crearRegistro = e => {
        e.preventDefault();

        const registro = {
            name: this.nombreRef.current.value,
            document: this.documentoRef.current.value,
            plate: this.placaRef.current.value
        }

        this.props.callbackcreate(registro);

        e.target.reset();
    }
    validarNumerico = e => {
        e.target.value= e.target.value.replace(/[^\d]/,'');
    }

    render(){
        return (          
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    
    
                <form onSubmit={this.crearRegistro}>
                    <div className="form-group row">
                        <label htmlFor="nombre" className="col-3 font-weight-bold text-info">Nombre:</label>
                        <div className="col-8">
                            <input className="form-control" id="nombre" name="nombre" type="text" ref={this.nombreRef} 
                               maxLength="15" required placeholder="nombre"/>
                        </div>                    
                    </div>
    
                    <div className="form-group row">
                        <label htmlFor="documento" className="col-3 font-weight-bold text-info">Documento:</label>
                        <div className="col-8">
                            <input className="form-control" id="documento" name="documento" type="text" ref={this.documentoRef}
                             pattern="[0-9.]+" maxLength="15" required placeholder="numerico" onKeyUp={this.validarNumerico}/>
                        </div>						
                    </div>
    
                    <div className="form-group row">
                        <label htmlFor="placa" className="col-3 font-weight-bold text-info">Placa:</label>
                        <div className="col-8">
                            <input className="form-control" id="placa" name="placa" type="text" ref={this.placaRef}
                            pattern="[a-zA-Z]{3}-?[0-9]{3}" maxLength="7" required placeholder="XXX-000"/>
                        </div>                    
                    </div>
    
                    <br />
                    <hr />
                    
                    <div className="form-group">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-sm-12 text-center"> <img src="/images/f.png"  className="img-fluid hov-scale" alt="error showing images" /> </div>
                            <div className="col-xl-3 col-lg-6 col-sm-12 text-center"> <img src="/images/li.png" className="img-fluid hov-scale"  alt="error showing images" /> </div>
                            <div className="col-xl-3 col-lg-6 col-sm-12 text-center"> <img src="/images/b.png"  className="img-fluid hov-scale" alt="error showing images" /> </div>
                            <div className="col-xl-3 col-lg-6 col-sm-12 text-center"> <img src="/images/ld.png" className="img-fluid hov-scale" alt="error showing images"  /> </div>
                        </div>
                    </div>
    
                    <div className="form-group text-center">
                        <input id="submit" name="submit" type="submit" className="btn btn-info btn-lg font-weight-bold" value="Crear" />
                    </div>					
                </form>
    
                <br />
            </div>
        );
    }
};

export default Tabadd;