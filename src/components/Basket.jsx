import React, { useState } from 'react';
import '../styles/Basket.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'react-use-cart';

const Basket = () => {
    const [display, setDisplay] = useState("none")

    const style = {
        display: display
    };


    const { items, isEmpty, cartTotal, removeItem, emptyCart } = useCart()


    return (
        <div className="basket">
            <div className="total">
                <p>TOTAL</p>
                <span>{cartTotal.toFixed(2)}€</span>
            </div>
            <div className="my-basket" >
                {isEmpty ? <div className='empty'>Votre commande est vide</div> : ""}
                {items.map((item, index) => {
                    return (
                        <div className="products-content " onMouseEnter={() => setDisplay("block")} onMouseLeave={() => setDisplay("none")} key={index}>
                            <div className="image-product">
                                <img src={item.url} />
                            </div>
                            <div className="product title price">
                                <p>{item.name}</p>
                                <p>{item.price}€</p>
                            </div>
                            <span className='quantity'>x{item.quantity}</span>
                            <button className='delete-btn' style={item.id ? style : ''} onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrashCan} className="trashcan-icon"></FontAwesomeIcon></button>

                        </div>
                    );
                })}
            </div>

            <p className='basket-footer'>@Nianacoro130 ❤️</p>
        </div>
    );
};

export default Basket;