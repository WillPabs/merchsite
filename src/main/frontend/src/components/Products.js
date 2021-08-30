import { Component } from 'react'
import axios from 'axios'

const productsApi = axios.create({
    baseURL: `http://localhost:3307/products/`
})

class Products extends Component {

    state = {
        products: []
    }

    constructor() {
        super()
        productsApi.get('/').then(res => {
            console.log(res.data)
            this.setState({products: res.data})
        })
    }
    
    render() {
        return (
            <div className="products-list">
                <h1>Products</h1>
                {this.state.products.map(product =>
                    <div key={product.id}>
                        <h4><a href={'http://localhost:3307/products/' + product.id}>{product.name}</a></h4>
                        <span>${product.price}</span><br/>
                        <span>Quantity: {product.quantity}</span><br/>
                        <span>{product.description}</span><br/>
                    </div>
                )}
            </div>
        )
    }
}

export default Products