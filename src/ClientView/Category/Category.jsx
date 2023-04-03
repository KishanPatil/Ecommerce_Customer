import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import {getAllCategory} from '../../services/Product/ProductCategoryService'
import axios from 'axios';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';
import './Category.css'

const Category = () => {
    const [categoryData, setCategoryData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:3009/category/categories`);
            setCategoryData(result.data);
        };
        fetchData();
    }, []);

    const handleCategoryClick = (categoryId) => {
        navigate(`/categoryproductlist/${categoryId}`);
    };

    return (
        <div>
            <ClientNavBar />
            {/* <div className='text-white mt-3'><h3>Category</h3> </div> */}
            <div className='text-white mt-3 text-center'><h3>Categories</h3> </div>
            <hr style={{color:'white'}}/>
            {categoryData.length === 0 ? (
                <div className='text-light text-center'>No data available</div>
            ) : (
                <div className='ml-3 mr-3' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
                    {categoryData.map((category) => (
                        <div className='category-card' key={category._id}>
                            <img className='mt-3 category-img' src={category.image} alt={category.CategoryName} onClick={() => handleCategoryClick(category._id)} style={{ width: '90%', height: '90%' }} />
                            <h3 className='mt-2 mb-2 text-center text-light  text'>{category.CategoryName}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Category;
