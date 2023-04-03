// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';
// import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';

// const SearchProduct = () => {
//     const { name } = useParams();
//     const [productData, setProductData] = useState([]);
//     const [filteredProductData, setFilteredProductData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios.get(`http://localhost:3009/product/getAllProducts`);
//             console.log(result.data)
//             setProductData(result.data);

//         };
//         fetchData();
//     }, []);

//     useEffect(() => {
//         console.log(name)
//         if (!name) {
//             console.log(name)
//             setFilteredProductData(productData);
//             return;
//         }

//         const filteredProducts = productData.filter((product) => {
//             return product.Name.toLowerCase().includes(name.toLowerCase());
//         });
//         setFilteredProductData(filteredProducts);
//     }, [name, productData]);

//     return (
//         <>
//             {/* <div className='text-white'>
//                 <ClientNavBar />
//                 <h2 className='text-white'>Products</h2>
//                 <div className='product-grid'>
//                     {filteredProductData.length === 0 ? (
//                         <p>No products found</p>
//                     ) : (

//                         filteredProductData.map((product) => (
//                             <div key={product._id} className='product-item'>
//                                 <div className='product-image'>
//                                     <img src={product.image} alt={product.Name} style={{ maxWidth: '40%', maxHeight: '40%' }} />
//                                 </div>
//                                 <div className='product-details'>
//                                     <h3>{product.Name}</h3>
//                                     <p>{product.Description}</p>
//                                     <p>Price: {product.Price}</p>
//                                     <div>
//                                         <button className='bg-yello'>
//                                             <Link to='addcart'>Add Cart</Link>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div> */}

//             <div className="product_body">
//                 <ClientNavBar />
//                 <div className="text-white mt-3"><h3>Products</h3></div>
//                 <div className='ml-3 mr-3' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
//                     {filteredProductData.map((product) => (
//                         <Link to={`/singleproduct/${product._id}`} style={{ textDecoration: 'none' }}>
//                             <div className="card ml-4" style={{ height: '100%', border: 'none' }}>
//                                 <div className="card-head" style={{ backgroundColor: '#1e1e1e' }}>
//                                     <img className="mt-5 ml-5 " src={product.image} alt={product.Name} style={{ maxWidth: '60%', maxHeight: '70%' }} />
//                                 </div>
//                                 <div className="card-body" style={{ backgroundColor: '#1e1e1e' }}>
//                                     <div className="product-card" key={product._id}>

//                                         <h3 className='mt-3 mb-2 text-light text-center' style={{ fontSize: '15px' }}>{product.Name}</h3>
//                                         <p className='mt-3 mb-2 text-light text-center ' style={{ textDecoration: 'none' }}>{product.Description.substring(0, 100)}...</p>
//                                         <p className='mt-3 mb-2 text-light text-center' style={{ fontWeight: 'bold' }}>Price: {product.Price}</p>

//                                     </div>
//                                 </div>
//                                 <div className="card-footer" style={{ backgroundColor: '#1e1e1e' }}>
//                                     <button className="btn btn-primary ml-5">View More</button>
//                                 </div>
//                             </div>
//                         </Link>
//                     ))}

//                 </div>
//             </div >
//         </>
//     );
// };

// export default SearchProduct;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';

const SearchProduct = () => {
    const { name } = useParams();
    const [productData, setProductData] = useState([]);
    const [filteredProductData, setFilteredProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:3009/product/products`);
            console.log(result.data)
            setProductData(result.data);

        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(name)
        if (!name) {
            console.log(name)
            setFilteredProductData(productData);
            return;
        }

        const filteredProducts = productData.filter((product) => {
            return product.Name.toLowerCase().includes(name.toLowerCase());
        });
        setFilteredProductData(filteredProducts);
    }, [name, productData]);

    return (
        <>
            {/* <div className='text-white'>
                <ClientNavBar />
                <h2 className='text-white'>Products</h2>
                <div className='product-grid'>
                    {filteredProductData.length === 0 ? (
                        <p>No products found</p>
                    ) : (

                        filteredProductData.map((product) => (
                            <div key={product._id} className='product-item'>
                                <div className='product-image'>
                                    <img src={product.image} alt={product.Name} style={{ maxWidth: '40%', maxHeight: '40%' }} />
                                </div>
                                <div className='product-details'>
                                    <h3>{product.Name}</h3>
                                    <p>{product.Description}</p>
                                    <p>Price: {product.Price}</p>
                                    <div>
                                        <button className='bg-yello'>
                                            <Link to='addcart'>Add Cart</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div> */}

            <div className="product_body">
                <ClientNavBar />
                <div className="text-white mt-3"><h3>Products</h3></div>
                <div className='ml-3 mr-3' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
                    {filteredProductData.map((product) => (
                        <Link to={`/singleproduct/${product._id}`} style={{ textDecoration: 'none' }}>
                            <div className="card ml-4" style={{ height: '100%', border: 'none' }}>
                                <div className="card-head" style={{ backgroundColor: '#1e1e1e' }}>
                                    <img className="mt-5 ml-5 " src={product.image} alt={product.Name} style={{ maxWidth: '60%', maxHeight: '70%' }} />
                                </div>
                                <div className="card-body" style={{ backgroundColor: '#1e1e1e' }}>
                                    <div className="product-card" key={product._id}>

                                        <h3 className='mt-3 mb-2 text-light text-center' style={{ fontSize: '15px' }}>{product.Name}</h3>
                                        <p className='mt-3 mb-2 text-light text-center ' style={{ textDecoration: 'none' }}>{product.Description.substring(0, 100)}...</p>
                                        <p className='mt-3 mb-2 text-light text-center' style={{ fontWeight: 'bold' }}>Price: {product.Price}</p>

                                    </div>
                                </div>
                                <div className="card-footer" style={{ backgroundColor: '#1e1e1e' }}>
                                    <button className="btn btn-primary ml-5">View More</button>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div >
        </>
    );
};

export default SearchProduct;

