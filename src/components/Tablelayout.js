import React from 'react';

const Tablelayout = (props) => {
    const button_table_field = (props.buttonFlag) ? <th>Accion</th> : undefined;
    const button_table_html = (props.buttonFlag) ? <td>{props.button}</td> : undefined;
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
                    <tr>    
                        {button_table_html}                   
                        <td>1</td>
                        <td>Pedro Augustin Perez</td>
                        <td>111233672</td>
                        <td>BCP-456</td>
                    </tr>
                    <tr>
                        {button_table_html}
                        <td>2</td>
                        <td>Pedro Augustin Perez</td>
                        <td>1234043672</td>
                        <td>BCP-456</td>
                    </tr>
                    <tr>     
                        {button_table_html}                    
                        <td>3</td>
                        <td>Pedro Augustin Perez</td>
                        <td>34543672</td>
                        <td>BCP-456</td>
                    </tr>
                    <tr>
                        {button_table_html}
                        <td>4</td>
                        <td>Pedro Augustin Perez</td>
                        <td>112043654</td>
                        <td>BCP-456</td>
                    </tr>
                    <tr> 
                        {button_table_html}
                        <td>5</td>
                        <td>Pedro Augustin Perez</td>
                        <td>1120345672</td>
                        <td>BCP-456</td>
                    </tr>
                    <tr>
                        {button_table_html}
                        <td>6</td>
                        <td>Pedro Augustin Perez</td>
                        <td>117453672</td>
                        <td>BCP-456</td>
                    </tr>
                    <tr>
                        {button_table_html}
                        <td>7</td>
                        <td>Pedro Augustin Perez</td>
                        <td>112724672</td>
                        <td>BCP-456</td>
                    </tr>
                    <tr>
                        {button_table_html}
                        <td>8</td>
                        <td>Pedro Augustin Perez</td>
                        <td>11374672</td>
                        <td>BCP-456</td>
                    </tr>
                    <tr> 
                        {button_table_html}
                        <td>9</td>
                        <td>Pedro Augustin Perez</td>
                        <td>11234672</td>
                        <td>BCP-456</td>
                    </tr>	
                    <tr>
                        {button_table_html}
                        <td>10</td>
                        <td>Pedro Augustin Perez</td>
                        <td>111143672</td>
                        <td>BCP-456</td>
                    </tr>
                    <tr>
                        {button_table_html}
                        <td>11</td>
                        <td>Pedro Augustin Perez</td>
                        <td>0322043672</td>
                        <td>BCP-456</td>
                    </tr>
                    <tr>
                        {button_table_html}
                        <td>12</td>
                        <td>Pedro Augustin Perez</td>
                        <td>112043672</td>
                        <td>BCP-456</td>
                    </tr>
                    <tr> 
                        {button_table_html}
                        <td>13</td>
                        <td>Pedro Augustin Perez</td>
                        <td>134043672</td>
                        <td>BCP-456</td>
                    </tr>																																																																					
                </tbody>
            </table>
		</div>
    );
};

export default Tablelayout;