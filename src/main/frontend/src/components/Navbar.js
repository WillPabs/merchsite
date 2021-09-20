import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const logo = "https://www.logolynx.com/images/logolynx/b2/b23666d57f4e17102209423105dfc442.png"

const Navbar = () => {
    return (
            <nav className="navbar">
                <Link to="/"><img src={logo} alt="logo"/></Link>
                <ul className="navbar-left">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className="navbar-right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Sign Up</Link></li>
                </ul>
                <SearchBar/>
            </nav>
    )
}

export default Navbar;