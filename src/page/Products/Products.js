import React, { useState } from 'react';
import Categories from '../Products/Categories/Categories';
import Product from '../Products/Product/Product';

const Products = () => {
    const [select, setSelect] = useState('')

    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                <div className="">
                    {/* child  */}
                    <Categories setSelect={setSelect} />

                    
                </div>
                <div className="col-span-3">
                    {/* child  */}
                    <Product setSelect={select} />
                </div>
            </div>
        </div>
    );
};

export default Products;
