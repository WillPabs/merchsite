import axios from 'axios'
import { Component, useEffect, useState } from 'react'

const usersApi = axios.create({
    baseURL: `http://localhost:3307/users/`
})

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersApi.get('/').then(res => {
            setUsers(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <div className="users-list">
            <h1>Users</h1>
            {users.map(user => 
                <div key={user.id}>
                    <h4>{user.firstName} {user.lastName}</h4>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address}</p>
                </div>    
            )}
        </div>
    )
}

// class Users extends Component {

//     state = {
//         users: []
//     }

//     constructor(props) {
//         super()
//         usersApi.get('/').then(res => {
//             console.log(res.data)
//             this.setState({users: res.data})
//         })
//     }

//     render() {
//         return (
//             <div className="users-list">
//                 <h1>Users</h1>
//                 {this.state.users.map(user => 
//                     <div key={user.id}>
//                         <h4>{user.firstName} {user.lastName}</h4>
//                         <p>Email: {user.email}</p>
//                         <p>Address: {user.address}</p>
//                     </div>    
//                 )}
//             </div>
//         )
//     }
// }

export default Users