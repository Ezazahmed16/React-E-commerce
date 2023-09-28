import React from 'react'
import { EyeIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'


const ProductCart = ({ product }) => {

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">

                <figure className="px-10 pt-10">
                    <img src={product.image} alt="Shoes" className="rounded-xl max-h-36" />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">
                        {product.title}
                    </h2>

                    <div className=" flex justify-between items-center w-full ">

                        <div className="">
                            <h1>Price: {product.price}$</h1>
                        </div>

                        <div className="card-actions">
                            <Link to={`/products/product-details/${product.id}`}>
                                <button className="btn btn-primary">
                                    <EyeIcon className='h-6 w-6' />
                                    View
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCart