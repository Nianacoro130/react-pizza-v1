import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import '../styles/Navigation.css'

const Navigation = () => {
    return (
        <div className="navigation">
            <img src="./images/pizza.png" alt="logo" />

            <NavLink className={(navData) => navData.isActive ? "nav-active" : ""} to="/" >
                Acceuil
            </NavLink>
            <NavLink className={(navData) => navData.isActive ? "nav-active" : ""} to="/a-propos" >
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;