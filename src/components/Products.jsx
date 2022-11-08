import React from 'react';
import '../styles/Products.css'
import Cards from './Cards';
import myproducts from '../data.js';
import '../styles/Cards.css'
import Basket from './Basket';
const Products = () => {
    return (
        <div className="products">
            {/* <p> Mon composent Produit</p> */}
            <div className='cards'>
            {myproducts.productdata.map((item , index)=>{  
                return (
                        <Cards
                            name={item.name}
                            url={item.url}
                            price={item.price}
                            item={item}
                            key={index}
                        />
                )
            })}
            </div>
            <Basket/>
        </div>
    );
};

export default Products;