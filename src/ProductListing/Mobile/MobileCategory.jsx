//  Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getProduct } from './MobileCategoryService';

import 'bootstrap/dist/css/bootstrap.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function MobileCategory(){
    const[category,setCategory]=useState([]);
    console.log("category useState : "+category);
    useEffect(()=>{
        const fetchCategory = async()=>{
            const allCategory = await getProduct();
            console.log("All category : "+allCategory);
            setCategory(allCategory);
        };
        fetchCategory();
    },[]);

    return(
        <div className="category-display" style={{color:"white"}}>
            hello
        </div>
    );
}