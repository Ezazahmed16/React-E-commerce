import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='m-5'>
            <ul className="menu menu-lg bg-base-200 w-full rounded-box">
                <h1 className='text-center font-bold text-2xl my-3'>Categories</h1>

                {
                    categories.map(category =>  <li><Link> {category} </Link></li>)
                }
            </ul>
        </div>
    )
}

export default Categories