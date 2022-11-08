import React from 'react';
import '../styles/Cards.css'
import {useCart} from 'react-use-cart'
const Cards = (props) => {
    const {addItem} = useCart()
    return (
        <div className="card 1">
            <div className="card_image">
                <img src={props.url} />
            </div>
            <div className="card_title title-white">
                <p>{props.name}</p>
            </div>
            <div className="card_content">
                <p>{props.price}€</p>
                <button onClick={() => addItem(props.item)}>Ajouter</button>
            </div>
        </div>

    );
};

export default Cards;