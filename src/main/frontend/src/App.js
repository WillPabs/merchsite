import { Component, useState } from 'react';
import Navbar from './components/Navbar'
import Products from './components/Products'
import Users from './components/Users'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Users />
          <Products />
        </div>
      </div>
    );  
  }
}

export default App;
