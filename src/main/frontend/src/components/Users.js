import axios from 'axios'
import { useEffect, useState } from 'react'

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
            {users.length > 0 ? (
                users.map(user => 
                    <div key={user.id}>
                        <h4><a href={"http://localhost:3307/users/" + user.id}>{user.firstName} {user.lastName}</a></h4>
                        <p>Email: {user.email}</p>
                        <p>Address: {user.address}</p>
                    </div>    
                )
            ) : (
                <h4>No users</h4>
            )}
        </div>
    )
}

export default Users