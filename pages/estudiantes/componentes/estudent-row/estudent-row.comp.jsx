import React from 'react';

import './estudent-row.style.css';

const EstudentRow = (props) => {
    return (
        
        <div className="estudent-row-container">
         {

           

           props.estudiante.nota <3
           ? //if-true
           <span className="estudiante-without-stock">{props.estudiante.name}</span>
           ://else
           <span>{props.estudiante.name}</span>
         }
         
         {' '}{props.estudiante.nota}

         {' '}{props.estudiante.genero}
       
        </div>

    ); 
}

export default EstudentRow;