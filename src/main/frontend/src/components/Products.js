import { Component, useState, useEffect } from 'react'
import axios from 'axios'

const productsApi = axios.create({
    baseURL: `http://localhost:3307/products/`
})

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        productsApi.get('/').then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
        
    }, [])

    return (
        <div className="products-list">
            <h1>Products</h1>
            {products.map(product =>
                <div key={product.id} className="product card">
                    <h4><a href={'http://localhost:3307/products/' + product.id}>{product.name}</a></h4>

                    {/* <Link to = {`/products/${product.id}} */}
                    <span>${product.price}</span><br/>
                    <span>Quantity: {product.quantity}</span><br/>
                    <span>{product.description}</span><br/>
                </div>
            )}
        </div>
    )
}

// class Products extends Component {

//     state = {
//         products: []
//     }

//     constructor() {
//         super()
//         productsApi.get('/').then(res => {
//             console.log(res.data)
//             this.setState({products: res.data})
//         })
//     }
    
//     render() {
//         return (
//             <div className="products-list">
//                 <h1>Products</h1>
//                 {this.state.products.map(product =>
//                     <div key={product.id} className="product card">
//                         <h4><a href={'http://localhost:3307/products/' + product.id}>{product.name}</a></h4>

//                         {/* <Link to = {`/products/${product.id}} */}
//                         <span>${product.price}</span><br/>
//                         <span>Quantity: {product.quantity}</span><br/>
//                         <span>{product.description}</span><br/>
//                     </div>
//                 )}
//             </div>
//         )
//     }
// }

export default Products