import React from 'react';
import Logo from '../../assets/moellerupGodsLogo.png';
import Navbar from '../Header/HeaderNav/Navbar'

export default function Header() {
    return (
       <header>
           <img src={Logo} alt="Moellerup Gods"/>
            <Navbar />
       </header>
    )
}
