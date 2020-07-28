import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button'; //usando styled component

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Shiroflix logo"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/" >
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;