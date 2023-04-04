import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Image, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './SinglePRoductView.css';
import ClientNavBar from '../../ClientView/LandingPage/Navbar/ClinetNavBar';
import { Link } from 'react-router-dom';
import { faSolarSystem, faTruck, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from '../CommentComponent/Comment';



export const SingleProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3009/product/products/${id}`);
        setProduct(response.data);
        console.log("single pro", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = async () => {
    const customerId = localStorage.getItem('customerId');
    if (!customerId) {
      alert('Please login to add to cart');
      return;
    }
    console.log(product._id)
    try {
      const products = [{
        productid: product._id,
        quantity: 1
      }]
      const response = await axios.post(`http://localhost:3009/cart/cart/${customerId}`, {
        products
      });
      console.log(response);
      alert('Added to cart successfully');
      navigate('/cart');
    } catch (error) {
      console.error(error);
    }
  };


  if (!product) {
    return <p>Loading....</p>;
  }

  return (
    <div className=''>
      <ClientNavBar />
      <Row className='container mt-3' style={{ backgroundColor: '#303030' }}>
        {/* Product Image */}
        <Col md={6} >
          <Image className='product_image ml-3 mt-4' src={product.image} alt={product.Name} style={{ height: '27rem', width: '27rem', marginTop: '30px' }} />
        </Col>
        {/* Product Description */}
        <Col md={6} className='productDescription mt-5 shadow-lg' style={{ width: '50%', height: '20%', borderRadius: '6%' }}>
          <ListGroup variant='flush' className='productDescription' style={{backgroundColor: '#3b3a3a'}}>
            <ListGroupItem className='productDescription' style={{backgroundColor: '#3b3a3a'}}>
              <h5 className='productDescription'><b>{product.Name}</b></h5>
            </ListGroupItem>
            <ListGroupItem className='productDescription text-light' style={{backgroundColor: '#3b3a3a'}}><b>
              Price :</b> {product.Price}
              <span> Rs</span>{' '}
            </ListGroupItem>
            <ListGroupItem className='productDescription text-light'style={{backgroundColor: '#3b3a3a'}}><b>
              <label className='productDescription'>Product Description :</label> </b>{product.Description}{' '}
            </ListGroupItem>
          </ListGroup>
          <br />
          {/* </Col> */}
          {/* <Col md={3}> */}
          <ListGroupItem className='productDescription' id='description'>
            <Row className='productDescription'>
              <Col className='productDescription  '> <b>Status:</b></Col>
              <Col className='productDescription' style={{ marginLeft: '-73%' }}>
                {product.Quantity > 0 ? 'In Stock' : 'Out of Stock'}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem className='productDescription' style={{ display: 'flex', direction: 'row' }}>
            {product.Quantity > 0 ?
              <Button className='btn-block mb-4 mt-3' type='button' onClick={addToCart} style={{ width: '140px', marginLeft: '15%' }}>
                Add to Cart
              </Button> :
              ''
            }

            <Button className='btn-block mb-4 ml-5 mt-3' type='button' style={{ width: '140px', marginTop: '-2px' }}>
              <Link to='/' className='text-light' style={{ textDecoration: 'none' }}>Cancel</Link>
            </Button>
          </ListGroupItem>
          <hr />
          <ListGroupItem className='productDescription' style={{ display: 'flex', direction: 'row' ,backgroundColor:'33b3a3a'}}>
            <div className="card" style={{ width: '180rem',border:'none'}}>
              <Row className='card-style'>
                <Col md={2}>
                  <i class="fa-light fa-truck"></i>
                </Col>
                <Col>
                  <label className='policieStyle'>Free Shiping</label>
                </Col>
              </Row>
              <Row className='card-style'>
                <Col md={2}>
                <i class="fa-light fa-handshake"></i>
                
                </Col>
                <Col>
                   <label className='policieStyle'>Sold and Shipped by ProCoders</label>
                </Col>
              </Row>
            </div>
          </ListGroupItem>
        </Col>
      </Row>
      <Row className='mt-4'>
      <Comment/>
      </Row>
    </div>
  );
};
