import React from "react";

export default function AnimalAdopcion(props) {
    
    return (
        <div className="card">
            <img className="product-image" src={props.url}/>
            <h2>{props.name}</h2>
            <p className="price">{props.price}</p>
            <p>{props.description}</p>
            <p>
                <button>Add to Cart</button>
            </p>
        </div>
    );
}