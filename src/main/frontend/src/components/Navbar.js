import SearchBar from "./SearchBar";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Users from "./Users";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact"
import Login from "./Login";
import AddUser from "./AddUser";
import Home from "./Home";

const logo = "https://www.logolynx.com/images/logolynx/b2/b23666d57f4e17102209423105dfc442.png"

const Navbar = () => {
    return (
        <Router>
            <nav className="navbar">
                <a href="#logo"><img src={logo} alt="logo"/></a>
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
            <div className="routes">
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={Users}/>
                <Route path="/products" component={Products}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={AddUser}/>
            </div>
        </Router>
    )
}

export default Navbar;