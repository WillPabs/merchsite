import { Link } from "react-router-dom"
import Button from "./Button"

const Home = () => {
    return (
        <div className="homepage">
            <div>
                <Link to="/login"><Button text="Login"></Button></Link>
            </div>
            <div>
                
                <Link to="/register"><Button text="Register"></Button></Link>
            </div>
        </div>
    )
}

export default Home