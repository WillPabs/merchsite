import axios from 'axios'
import { Component, useState } from 'react';

const usersApi = axios.create({
  baseURL: `http://localhost:3307/users/`
})

const productsApi = axios.create({
  baseURL: `http://localhost:3307/products/`
})

class App extends Component {

  state = {
    users: [],
    products: []
  }

  constructor() {
    super();
    usersApi.get('/').then(res => {
      console.log(res.data)
      this.setState({ users: res.data })
    });
    productsApi.get('/').then(res => {
      console.log(res.data)
      this.setState({ products: res.data})
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1> Users </h1>
        {this.state.users.map(user => 
          <div key={user.id}>
            <h4>{user.firstName} {user.lastName}</h4>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
          </div>
        )}
        <h1> Products </h1>
        {this.state.products.map(product => 
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>${product.price}</p>  
            <p>Quantity: {product.quantity}</p>
            <p>{product.description}</p>
          </div>
        )}
      </div>
    );  
  }
}

export default App;
