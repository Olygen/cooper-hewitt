import { Link } from 'react-router-dom';
// import SearchForm from './SearchForm';

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/">COOPER HEWITT <br/>posters collection</Link></li>
                <li>Search</li>
                {/* <li><SearchForm postersearch={postersearch}/></li> */}
            </ul>
        </div>
        
    )
}

export default Navbar;