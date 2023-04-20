import React from 'react';
import { Link } from 'react-router-dom';
import Searchform from './SearchForm';

const Navbar = ({ postersearch }) => {
    
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/">COOPER HEWITT <br/>posters collection</Link></li>
                <li>
                {/* <Searchform postersearch={postersearch}/> */}
                </li>
            </ul>
        </div>
        
    );
}

export default Navbar;

