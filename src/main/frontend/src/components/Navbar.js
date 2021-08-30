import { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar