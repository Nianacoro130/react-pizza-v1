import React from 'react';
import Navigation from '../components/Navigation';
import Products from '../components/Products';
import '../styles/Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <Navigation/>
            <Products/>  
        </div>
    );
};

export default Home;