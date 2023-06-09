import React, { useState, useEffect } from 'react';
import css from './MainContent.module.css'
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
// Importing Images 
import PhoneCategory from '../Images/PhoneCategory.avif';
import HeadphoneCategory from '../Images/HeadphoneCategory.avif';
import LaptopCategory from '../Images/LaptopCategory.avif';
import SpeakerCategory from '../Images/SpeakerCategory.avif';
import TvCategory from '../Images/TvCategory.avif';
import iphone from '../Images/MobilePhone/iphone.avif'
import washingMachine from '../Images/WashingMachine/washingMachine.webp'
import laptop from '../Images/Laptop/laptop.webp';
import Headphones from '../Images/Headphones/Headphones.webp';
import boat from '../Images/Brands/boat.jfif';
import apple from '../Images/Brands/apple.png';
import canon from '../Images/Brands/canon.png';
import sony from '../Images/Brands/sony.png';
import samsung from '../Images/Brands/samsung.png';
import LG from '../Images/Brands/LG.jfif';
import bosch from '../Images/Brands/bosch.png';
import Panasonic from '../Images/Brands/Panasonic.png';
import mi from '../Images/Brands/mi.png'
import { SingleProductView } from '../../SingleProductView/SingleProductView';
import { Button } from 'react-bootstrap';
// import Product from '../../Product/ProductList';



export default function MainContent() {

    // const  mobilePhone = () =>{
    //     <Link to="/product"></Link>
    // }
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
        // const selectedCategory = categoryData.find((category) => category.id === categoryId);
        navigate(`/categoryproductlist/${categoryId}`);
        // console.log(selectedCategory);
    };

    return (

        <div className={css.MainContent}>
            {/* Categories display */}
            <div className={css.card} style={{ backgroundColor: "#303030" }}>
                <div className='ml-3 mr-3 mt-5' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>

                    {categoryData.slice(0, 4).map((category) => (
                        <div className='category-card' key={category._id}>
                            <img className='card' src={category.image} alt={category.CategoryName} onClick={() => handleCategoryClick(category._id)} style={{ width: '100%', height: '100%' }} />
                            {/* <h3 className='mt-1 mb-2 text-primary'  >{category.CategoryName}</h3> */}
                            <h5 className='mt-1 ml-2 mb-1 text-light text-center'  >{category.CategoryName}</h5>
                        </div>))}

                </div>
            </div>

            {/* Product displaying */}
            <div className={css.card_block}>
                <div className={css.sub_card}>
                    <Link to='brandproductlist/64146585cdb03e2d7dd0cd18'> <img src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/financing-products-og-202006?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1593544210000' alt="iphone image" /></Link>
                    <Link to='categoryproductlist/6414485ea4d83a3d3db92470'><img src={washingMachine} alt="washing machine image" /></Link>
                </div>
                <div className={css.sub_card}>
                    <Link to='categoryproductlist/64143279a4d83a3d3db9240d'> <img src={laptop} alt="laptop image" /></Link>
                    <Link to='categoryproductlist/6414541fa4d83a3d3db924d2'><img src={Headphones} alt="headphone image" /></Link>
                </div>

            </div>

            {/* <div className={`${css.card} ${css.brand_card}`} style={{ backgroundColor: "#303030" }}>
                <img className="card-img-top" id="brandimg" src={boat} alt="Card image cap" />
                 <img className={`card-img-top ${css.brandimg}`} src={apple} alt="Card image cap" />
                <img className={`card-img-top ${css.brandimg}`} src={canon} alt="Card image cap" />
                <img className={`card-img-top ${css.brandimg}`} src={sony} alt="Card image cap" />
                <img className={`card-img-top ${css.brandimg}`} src={Panasonic} alt="Card image cap" />
                <img className={`card-img-top ${css.brandimg}`} src={LG} alt="Card image cap" />
                <img className={`card-img-top ${css.brandimg}`} src={samsung} alt="Card image cap" />
                <img className={`card-img-top ${css.brandimg}`} src={mi} alt="Card image cap" /> 
            </div>  */}

            {/* All products */}
            <hr />
         <Container className='mt-5'>
            <div className='text-center text-light mb-4 rounded-4' style={{backgroundColor:'orange'}}>
                Take A Glance 
            </div>
         <div className='  ratio ratio-21x9 mt-5' style={{maxHeight:'120%',maxWidth:'300%'}}>
            
            <iframe 
            src="https://www.youtube.com/embed/NMHwoZH0V3M"
            className='rounded-4'
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen style={{height:'70%',width:'60%',marginLeft:'23%'}}>
            </iframe>
        </div>
        {/* <Button className='text-center text-light mb-4 rounded-4 ' style={{backgroundColor:'orange',marginTop:'-20%',marginLeft:'75%'}}>
                 View More
            </Button> */}
         </Container>
        </div>
    );
}