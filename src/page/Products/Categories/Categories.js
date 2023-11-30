import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ setSelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Error fetching categories:', error));
    }, [categories]);

    const handleCategorySelect = (category) => {
        console.log(category)
        setSelect(category);
    };

    return (
        <div className="m-5">
            <ul className="menu menu-lg bg-base-200 w-full rounded-box">
                <h1 className="text-center font-bold text-2xl my-3">Categories</h1>

                {categories.map((category) => (
                    <Link to={`/products/category/${category}`}>
                        <button key={category.id} onClick={() => handleCategorySelect(category.category)} className="text-xl">
                            {category.category}
                        </button>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
