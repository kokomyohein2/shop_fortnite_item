import React from 'react';
import './App.css';


function ItemDetail({match}) {

    return (
        <div>
            <h1>{match.params.id}</h1>
        </div>
    );
}

export default ItemDetail;