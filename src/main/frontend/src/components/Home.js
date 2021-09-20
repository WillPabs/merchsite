import { Link } from "react-router-dom"
import Button from "./Button"

const Home = () => {
    return (
        <div className="homepage">
            <div>
                <Button text="Login"><Link to="/login">Login</Link></Button>
            </div>
            <div>
                <Button text="Register"><Link to="/register"></Link></Button>
            </div>
        </div>
    )
}

export default Home