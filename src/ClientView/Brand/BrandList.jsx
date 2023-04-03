import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import {getAllCategory} from '../../services/Product/ProductCategoryService'
import axios from 'axios';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';
import './Brand.css'

const Category = () => {
    const [brandData, setBrandData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:3009/brand/brands`);
            setBrandData(result.data);
        };
        fetchData();
    }, []);

    const handleBrandClick = (brandID) => {
        // const selectedCategory = categoryData.find((category) => category.id === categoryId);
        navigate(`/brandproductlist/${brandID}`);
        // console.log(selectedCategory);
    };

    return (
        // <div>
        //     <ClientNavBar  />
        //     <div className='text-white mt-3'><h3>Category</h3> </div>
        //     <div className='ml-3 mr-3' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
        //         {brandData.map((brand) => (
        //             <div key={brand._id}>
        //                 <img className='mt-3' src={brand.image} alt={brand.BrandName} onClick={() => handleBrandClick(brand._id)} style={{ width: '100%', height: '100%' }} />
        //                 <h3 className='mt-1 mb-2 text-primary'  >{brand.BrandName}</h3>
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <div>
            <ClientNavBar  />
            {/* <div className='text-white mt-3'><h3>Brand</h3> </div> */}
            <div className='text-white mt-3 text-center'><h3>Brands</h3> </div>
            <hr style={{color:'white'}}/>
            <div className='ml-3 mr-3' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
                {brandData.map((brand) => (
                    <div className='brand-card' key={brand._id}>
                        <img className='mt-3 brand-img' src={brand.image} alt={brand.BrandName} onClick={() => handleBrandClick(brand._id)} style={{ width: '80%', height: '80%' }} />
                        <h3 className='mt-2 mb-2  text-center text-light text'  >{brand.BrandName}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
