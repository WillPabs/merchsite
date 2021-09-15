import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="homepage">
            <div>
                <button><Link to="/login">Login</Link></button>
            </div>
            <div>
                <button><Link to="/register">Sign Up</Link></button>
            </div>
        </div>
    )
}

export default Home