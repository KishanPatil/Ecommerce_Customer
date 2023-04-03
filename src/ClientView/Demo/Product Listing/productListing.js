import React from 'react';
import './product.css'
import product_card from './data/product_data';
//import Navbar from '../Home Page Commponenet/Navbar/Navbar';

const ProductListing = ()=>{
    //fetching data from product_data.js file
    console.log(product_card);
    const listItems = product_card.map((item)=>
        <div className='card' key={item.id}>
            <div className='card_img'>
                <img src={item.thumbnail}/>
            </div>
            <div className='crad_header'>
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">
                    {item.price}
                    <span>
                    {item.currency}
                    </span>
                </p>
                <div className='btn'> Add to Cart &nbsp; <i className="fa-solid fa-cart-shopping"></i></div>
            </div>
        </div>
    ); 
    return(
     <div className='main_content'>
        {/* <Navbar/> */}
        <h5>Mobile Phone</h5>
        {/* displaying on page all details  */}
        {listItems}
    </div>
    );
}
export default  ProductListing;