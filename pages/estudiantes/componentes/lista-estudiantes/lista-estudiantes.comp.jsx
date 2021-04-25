import React from 'react';
import EstudentCategoryRow from '../estudent-category-row/estudent-category-row.comp';
import EstudentTable from '../estudent-table/estudent-table.comp';
import SearchBar from '../search-bar/search-bar.comp';

import './lista-estudiantes.style.css';

const ListaEstudiantes = () => {
    return (
        
        <div className="lista-estudiantes-container">
            <SearchBar/>
            <EstudentTable/>
            
            
        </div>

    ); 
}

export default ListaEstudiantes;