import { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Products from './components/Products'
import Users from './components/Users'
import AddUser from './components/AddUser'
import AddProduct from './components/AddProduct';
import Login from './components/Login';



class App extends Component {
  
  render() {
    return (
      <main>
        <div className="App">
          <Navbar />
          <div className="main">
            {/* <AddUser/>
            <Users/>
            <AddProduct/>
            <Products/>
            <Login/> */}
          </div>
        </div>
      </main>
    );  
  }
}

export default App;
