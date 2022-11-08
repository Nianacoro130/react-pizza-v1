import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/About.css'

const About = () => {
    return (
        <>
            <Navigation />
            <div className='about'>
                <p>Plateforme web pizza-react avec la possibilité d'ajouter un produit dans le panier.</p><p>@Nianacoro130</p>
                <span className='span-about'><a className="a-about" href="https://github.com/Nianacoro130">Lien du projet</a></span>
            </div>
        </>
    );
};

export default About;