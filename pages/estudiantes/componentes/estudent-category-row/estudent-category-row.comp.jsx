import React from 'react';

import './estudent-category-row.style.css';

const EstudentCategoryRow = (props) => {
    return (
        
        <div className="estudent-category-row-container">
             {props.categoryName} 
        </div>

    ); 
}

export default EstudentCategoryRow;