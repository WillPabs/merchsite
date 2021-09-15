import axios from "axios"
import { useState } from "react"

const AddUser = () => {
    const[user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(e)
    }

    // const url = 'http://localhost:3307/users/'

    // axios.post(url)

    return(
        <div className="add-user-form">
            <form>
                <h2>Create New User</h2>
                <div className="form-control">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div className="form-control">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div className="form-control">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div className="form-control">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <input type="submit" value="Create User"/>
            </form>
        </div>
    )
}

export default AddUser