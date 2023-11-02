import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ setSelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Error fetching categories:', error));
    }, [categories]);

    const handleCategorySelect = (category) => {
        setSelect(category);
    };

    return (
        <div className="m-5">
            <ul className="menu menu-lg bg-base-200 w-full rounded-box">
                <h1 className="text-center font-bold text-2xl my-3">Categories</h1>

                {categories.map((category) => (
                    <Link to={`/products/category/${category}`}>
                        <button key={category} onClick={() => handleCategorySelect(category)} className="text-xl">
                            {category}
                        </button>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
