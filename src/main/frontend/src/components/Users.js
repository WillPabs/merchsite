import axios from 'axios'
import { Component } from 'react'

const usersApi = axios.create({
    baseURL: `http://localhost:3307/users/`
})

class Users extends Component {

    state = {
        users: []
    }

    constructor(props) {
        super()
        usersApi.get('/').then(res => {
            console.log(res.data)
            this.setState({users: res.data})
        })
    }

    render() {
        return (
            <div className="users-list">
                <h1>Users</h1>
                {this.state.users.map(user => 
                    <div key={user.id}>
                        <h4>{user.firstName} {user.lastName}</h4>
                        <p>Email: {user.email}</p>
                        <p>Address: {user.address}</p>
                    </div>    
                )}
            </div>
        )
    }
}

export default Users