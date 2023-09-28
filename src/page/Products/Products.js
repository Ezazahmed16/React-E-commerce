import React from 'react'
import Categories from './Categories/Categories'
import Product from './Product/Product'

const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">


        <div className="">
          <Categories />
        </div>


        <div className="col-span-3">
          
          <Product />

        </div>

      </div>
    </div>
  )
}

export default Products