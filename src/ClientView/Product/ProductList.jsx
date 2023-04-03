import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';


export default function Product() {

    const [productListData, setProductList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:3009/product/products`);
            console.log(result)
            setProductList(result.data)

        };
        fetchData();
    }, []);

    const handleProductListClick = (productId) => {
        navigate(`/singleproduct/${productId}`);
    };
    return (
        <div className="product_body">
            <ClientNavBar />
            {/* <div className="text-white mt-3"><h3>Products</h3></div> */}
            <button className="btn btn-dark border mb-3 mt-3 ml-5"><Link to='/' style={{textDecoration:'none',color:'white'}}>Back</Link></button>
            <div className='ml-3 mr-3' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
                {productListData.map((product) => (
                     <Link to={`/singleproduct/${product._id}`} style={{textDecoration:'none'}}>
                           <div className="card ml-4" style={{height:'100%',border:'none'}}>
                        <div className="card-head" style={{ backgroundColor:'#1e1e1e'}}>
                        <img className="mt-5 ml-5 " src={product.image} alt={product.Name} onClick={() => handleProductListClick(product._id)} style={{ width: '60%', height: '70%' }} />
                        </div>
                        <div className="card-body" style={{backgroundColor:'#1e1e1e',textDecoration:'none'}}>
                            <div className="product-card" key={product._id}>

                                    <h3 className='mt-3 mb-2 text-light text-center' style={{ fontSize: '15px' }}><b>{product.Name}</b></h3>
                                    <p className='mt-3 mb-2 text-light text-center'  >{product.Description.substring(0, 100)}...</p>
                         <p className='mt-3 mb-2 text-light text-center'  style={{fontWeight:'bold'}}>Price: {product.Price}</p>

                            </div>
                        </div>
                        <div className="card-footer" style={{backgroundColor:'#1e1e1e'}}> 
                            <button className="btn btn-primary ml-5">View More</button>
                        </div>
                    </div>
                    </Link>
             ))}

        </div>
        </div >
    )
}