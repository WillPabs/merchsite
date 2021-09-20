import { useState, useEffect } from 'react'
import axios from 'axios'
import AddProduct from './AddProduct'
import Button from './Button'
import { Link } from 'react-router-dom'

const productsApi = axios.create({
    baseURL: `http://localhost:3307/products/`
})

const Products = () => {
    const [products, setProducts] = useState([])
    const [showAddProduct, setShowAddProduct] = useState(false)

    useEffect(() => {
        productsApi.get('/').then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
        
    }, [])

    return (
        <>
            <div className="products-list">
                <h1>Products</h1>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id}>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </div>
                    ))
                ) : (
                    <h4>No Products</h4>
                )}
                <Button text="Add Product" onClick={() => setShowAddProduct(!showAddProduct)}/>
                {showAddProduct && <AddProduct/>}
            </div> 
        </>
    )
}

export default Products