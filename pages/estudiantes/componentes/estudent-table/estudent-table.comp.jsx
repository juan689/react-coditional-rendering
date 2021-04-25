import React from 'react';
import EstudentCategoryRow from '../estudent-category-row/estudent-category-row.comp';
import EstudentRow from '../estudent-row/estudent-row.comp';

import './estudent-table.style.css';


const EstudentTable = () => {
    return (
        
        <div className="estudent-table-container">
          NOMBRE NOTAS GENERO
         
          <EstudentCategoryRow categoryName="Programación"/>
          <EstudentRow  estudiante={{

            
            name:"Juan David",
            nota:4.0,
            genero:"masculino",
          }} />
            
            <EstudentRow  estudiante={{
            name:"Luisa",
            nota:2.2,
            genero:"femenino",
          }} />

            <EstudentRow  estudiante={{
            name:"Roger",
            nota:3.5,
            genero:"masculino",
          }} />

           <br></br>
          
          <EstudentCategoryRow categoryName="Matemáticas"/>
          <EstudentRow  estudiante={{
           name:"Juan David",
           nota:3.8,
           genero:"masculino",
         }} />
           
           <EstudentRow  estudiante={{
           name:"Oscar",
           nota:3.0,
           genero:"masculino",
         }} />

           <EstudentRow  estudiante={{
           name:"Roger",
           nota:5,
           genero:"masculino",
         }} />

          <br></br>   

          <EstudentCategoryRow categoryName="Inglés"/>
          <EstudentRow  estudiante={{
           name:"Adriana", 
           nota: 3.6,
           genero:"femenino",
           
         }} />
           
           <EstudentRow  estudiante={{
           name:"Luisa",
           nota:4.5,
           genero:"femenino",
         }} />

           <EstudentRow  estudiante={{
           name:"Angelica",
           nota:2.9,
           genero:"femenino",
         }} />

        </div>

    ); 
}

export default EstudentTable;