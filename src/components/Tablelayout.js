import React from 'react';
import $ from 'jquery';


// Componente que sera el esquema de la tabla por defecto para ser reutilizada por mostrar, borrar y actualizar
const Tablelayout = (props) => {
    const button_table_field = (props.buttonFlag) ? <th>Accion</th> : undefined;
    const button_table_html = (props.buttonFlag) ? <td>{props.button}</td> : undefined;
   
    
    var lista = [];
    if(props.respuestajson != undefined){
        
        for(var i =0; i < props.respuestajson.length; i++){
            lista.push(
                <tr key={i}>    
                    {button_table_html}   
                    <td>{i}</td>                
                    <td>{props.respuestajson[i].attributes.name}</td>
                    <td>{props.respuestajson[i].attributes.document}</td>
                    <td>{props.respuestajson[i].attributes.plate}</td>
                 </tr>
            )
        } 
        //console.log(props.respuestajson)
    }
    

   
    return (

      

        <div className="table-responsive">
            <table className={`table table-hover ${props.rclass}`}>
                <thead className="thead-dark">
                    <tr>   
                        {button_table_field}                     
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Documento</th>
                        <th>Placa</th>								
                    </tr>
                </thead>
                <tbody>
                    
                    {lista}

                
              																																																																				
                </tbody>
            </table>
		</div>
    );
};

export default Tablelayout;