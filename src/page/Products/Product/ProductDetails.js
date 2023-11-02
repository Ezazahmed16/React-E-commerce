import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const ProductDetails = () => {

    const productDetails = useLoaderData()

    return (
        <div className='p-10 my-5'>

            <div className="card card-compact w-full bg-base-100 shadow-xl grid grid-cols-2 gap-5">
                <div className="p-5">
                    <figure><img className='h-48' src={productDetails.image} alt="Shoes" /></figure>

                    <div className="">
                        <h2 className="card-title text-3xl font-bold text-center">{productDetails.title}</h2>
                    </div>

                </div>

                <div className="card-body">
                    <p> <span className='font-bold'>Description:</span> {productDetails.description}</p>


                    <div className="flex justify-between items-center">

                        <div className="">
                            <h1 className='text-3xl font-extrabold'>Price: {productDetails.price} $</h1>
                        </div>

                        <div className="card-actions justify-end">
                            <Link to='/order'>
                                <button className="btn btn-primary">Buy Now</button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductDetails