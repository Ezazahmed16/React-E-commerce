import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'

const Product = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='my-5'>

            <div className="grid grid-cols-3 gap-5">
                {
                    products.map(product => <ProductCart key={product.id} product={product} />)
                }
            </div>

        </div>
    )
}

export default Product