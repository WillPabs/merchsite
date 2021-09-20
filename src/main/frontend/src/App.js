import { Component } from 'react';
import Navbar from './components/Navbar'
import Products from './components/Products'
import Users from './components/Users'
import AddUser from './components/AddUser'
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/Product';



class App extends Component {
  
  render() {
    return (
      <Router>
        <main>
          <div className="App">
            <Navbar />
            <div className="main">
            </div>
          </div>
        </main>
        <div className="routes">
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={Users}/>
                <Route exact path="/products" component={Products}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={AddUser}/>
                <Route path="/products/:id" component={Product} />
                <Route exact path="/products/add" component={AddProduct}/>
            </div>
      </Router>
    );  
  }
}

export default App;
