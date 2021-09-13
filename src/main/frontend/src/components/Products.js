import { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'

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
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id}>
                        <h4><a href={'http://localhost:3307/products/' + product.id}>{product.name}</a></h4>      
                    </div>
                ))
            ) : (
                <h4>No Products</h4>
            )}
            
        </div>
    )
}

export default Products