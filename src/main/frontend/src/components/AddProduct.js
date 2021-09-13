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
            <div className='form-control'>
                <label>Product Name</label>
                <input 
                    value={data.name}
                    name='name'
                    onChange={(e) => handle(e)}
                    type='text' 
                    placeholder='Add Product'
                />
            </div>
            <div className='form-control'>
                <label>Price</label>
                <input 
                    value={data.price}
                    name='price'
                    onChange={(e) => handle(e)}
                    type='text' 
                    placeholder='Add Price'
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input 
                    value={data.description}
                    name='description'
                    onChange={(e) => handle(e)}
                    type='text' 
                    placeholder='Add Description'
                />
            </div>
            <div className='form-control'>
                <label>Quantity</label>
                <input 
                    value={data.quantity}
                    name='quantity'
                    onChange={(e) => handle(e)}
                    type='text'
                    placeholder='Add Quantity'
                />
            </div>
            <input type='submit' value='Save Product'/>
        </form>
    )
}

export default AddProduct