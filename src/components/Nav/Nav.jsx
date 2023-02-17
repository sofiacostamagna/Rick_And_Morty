import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => { // Nav recibe una prop que es onSearch que se la pasamos al div
    return(
        <nav>
            <Link to='/' >LOGOUT</Link>
            <hr />
            <Link to='/home' >Home</Link>
            <hr />
            <Link to='/about'>About</Link>
            <hr />
            <Link to='/favorites'>Favorites</Link>
            <hr />
            <SearchBar onSearch={onSearch}/>
        </nav>
    ) //RECORDA DARLE ESTILO AL NAV!!!!!!!!
}

export default Nav;