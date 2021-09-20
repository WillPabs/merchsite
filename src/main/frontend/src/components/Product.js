import axios  from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const Product = () => {
    const { id } = useParams()
    const [newProduct, setNewProduct] = useState({})
    const productApi = axios.create({
        baseURL: `http://localhost:3307/products/${id}`
    })

    useEffect(() => {
        productApi.get('/').then(res => {
            setNewProduct(res.data)
            console.log(res.data)
        })
    })

    return (
        <div className="product">
            <h1>{newProduct.name}</h1><br/>
            <span>${newProduct.price}</span><br/>
            <span>Quantity: {newProduct.quantity}</span><br/>
            <span>{newProduct.description}</span><br/>
        </div>
    )
}

export default Product 