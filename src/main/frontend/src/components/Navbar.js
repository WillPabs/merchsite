const logo = "https://www.logolynx.com/images/logolynx/b2/b23666d57f4e17102209423105dfc442.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#logo"><img src={logo} alt="logo"/></a>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#users">Users</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;