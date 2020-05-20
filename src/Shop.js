import React, {useEffect, useState} from 'react';
import './App.css';
import {Link} from "react-router-dom";


function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    let [items, setItems] = useState([]);

    let fetchItems = async () => {
        let data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        let dataJson = await data.json();
        console.log(dataJson.data);
        setItems(dataJson.data);
    }

    return (
        <div>
            {items.map(data => (
                <div>
                    <Link to={`/shop/${data.itemId}`}>
                        <h1 key={data.itemId}>
                            {data.item.name}
                        </h1>
                        <img src={data.item.images.information} alt=""/>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Shop;