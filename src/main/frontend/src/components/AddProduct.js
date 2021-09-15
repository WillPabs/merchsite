import axios from "axios"
import { useState } from "react"

const AddProduct = () => {
    const url = "http://localhost:3307/products"
    const [data, setData] = useState({
        name: "",
        price: "",
        description: "",
        quantity: ""
    })
    
    const submitHandler = (e) => {
        e.preventDefault()
        alert('A form was submitted')

        axios.post(url, {
            name: data.name,
            price: data.price,
            description: data.description,
            quantity: data.quantity
        }).then(res => {
            console.log(res.data)
        })
    }

    const handle = (e) => {
        const newData = {...data}
        newData[e.target.name] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <form onSubmit={(e) => submitHandler(e)} className='add-form'> 
            <h2>Create New Product</h2>
            <div className='form-control'>
                <label>Product Name</label>
                <input 
                    type='text' 
                    name='name'
                    value={data.name}
                    onChange={(e) => handle(e)}
                    placeholder='Add Product'
                />
            </div>
            <div className='form-control'>
                <label>Price</label>
                <input 
                    type='text' 
                    name='price'
                    value={data.price}
                    onChange={(e) => handle(e)}
                    placeholder='Add Price'
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input 
                    type='text' 
                    name='description'
                    value={data.description}
                    onChange={(e) => handle(e)}
                    placeholder='Add Description'
                />
            </div>
            <div className='form-control'>
                <label>Quantity</label>
                <input 
                    type='text'
                    name='quantity'
                    value={data.quantity}
                    onChange={(e) => handle(e)}
                    placeholder='Add Quantity'
                />
            </div>
            <input type='submit' value='Save Product'/>
        </form>
    )
}

export default AddProduct