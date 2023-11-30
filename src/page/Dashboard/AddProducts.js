// frontend/src/App.js
import React, { useState } from 'react';

function AddProducts() {
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
    });

    const handleInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(product)

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {

                const result = await response.json();
                alert('Successfully added product');
                console.log(result);
            } else {
                console.error('Failed to add product');
            }
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label className='label'>Title:</label>
                <input className='input input-info' type="text" name="title" onChange={handleInputChange} />

                <label className='label'>Price:</label>
                <input className='input input-info' type="number" name="price" onChange={handleInputChange} />

                <label className='label'>Description:</label>
                <textarea name="description" onChange={handleInputChange}></textarea>

                <label className='label'>Category:</label>
                <input className='input input-info' type="text" name="category" onChange={handleInputChange} />

                <label className='label'>Image URL:</label>
                <input className='input input-info' type="text" name="image" onChange={handleInputChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddProducts;
