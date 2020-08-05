import React from 'react';
import {link, Link} from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import Button from '../Button'

// import ButtonLink from './components/ButtonLink'

function Menu() {
    return (
        <nav className="Menu">
            <Link to='/'>
                <img className="Logo" img src={Logo} alt="Dfix logo" />
            </Link>

            <Button as={Link}className="ButtonLink" to='/cadastro/video'>
               Videos Novos
            </Button>
        </nav>
    );
}

export default Menu;