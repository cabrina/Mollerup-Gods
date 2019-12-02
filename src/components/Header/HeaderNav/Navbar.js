import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Velkommen</Link>
                </li>
                <li>
                    <Link to="/VerdensBalletten">Verdensballetten</Link>
                </li>
                <li>
                    <Link to="/Nyhederne">Nyheder</Link>
                </li>
                <li>
                    <Link to="/Events">Events og mødefaciliteter</Link>
                </li>
                <li>
                    <Link to="/Gæsterne">Hvad siger vores gæster</Link> 
                </li>
                <li>
                    <Link to="/MøllerupGods">om Møllerup Gods</Link> 
                </li>
                <li>
                    <Link to="/Kontakt">Kontakt os</Link> 
                </li>
                <li>
                    <Link to="/Webshop">Webshop</Link> 
                </li>
            </ul>
        </nav>
    )
}
