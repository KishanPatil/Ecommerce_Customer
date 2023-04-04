import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';
import { Link } from 'react-router-dom';
export const Cart = () => {
  const [cart, setCart] = useState(null);
  const customerId = localStorage.getItem('customerId');

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3009/cart/getcartbycustomerid/${customerId}`);
        console.log(response.data)
        setCart(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCart();
  }, [customerId]);

  const removeFromCart = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3009/cart/removefromcart/${customerId}/${productId}`);
      console.log(response);
      alert('Removed from cart successfully');
      const response2 = await axios.get(`http://localhost:3009/cart/getcartbycustomerid/${customerId}`);
      console.log(response2.data)
      setCart(response2.data);
    } catch (error) {
      console.error(error);
    }
  };
  const incrementQuantity = async (productid, quantity) => {
    try {
      const response = await axios.put(`http://localhost:3009/cart/updatequantity/${customerId}/${productid}/${quantity + 1}`);
      console.log("increases succesfully", response);
      const response2 = await axios.get(`http://localhost:3009/cart/getcartbycustomerid/${customerId}`);
      console.log(response2.data)
      setCart(response2.data);
    } catch (error) {
      console.error(error);
    }
  };

  const decrementQuantity = async (productid, quantity) => {
    try {
      if (quantity === 1) {
        return;
      }
      const response = await axios.put(`http://localhost:3009/cart/updatequantity/${customerId}/${productid}/${quantity - 1}`);
      console.log(response);
      const response2 = await axios.get(`http://localhost:3009/cart/getcartbycustomerid/${customerId}`);
      console.log(response2.data)
      setCart(response2.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!cart) {
    return <p className='text-light text-center'>
      <ClientNavBar />
      <h4 className='text-white text-center'> Your cart is Empty</h4></p>;
  }

  if (cart.products.length === 0) {
    <ClientNavBar />
    return <>
      <ClientNavBar />
      <h4 className='text-white text-center'>Your cart is Empty</h4>
    </>
  }
  const total = cart.products.reduce((acc, product) => acc + product.quantity * product.productid.Price, 0);
  return (
    <div className=''>
      <ClientNavBar />
      {/* <h2 className='text-white cart-body'>Cart</h2> */}
      <Button className='btn btn-dark mt-2  border' style={{ marginLeft: '11%', marginBottom: '-1%' }}><Link to='/' className='text-light' style={{ textDecoration: 'none' }}>Continue Shopping</Link></Button>
      <div className='cart-card'>
        <ListGroup className='mt-4 '>
          {cart.products.map((product) => (
            <ListGroup.Item key={product._id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#303030', color: 'white', border: '1px solid grey' }}>
              <div style={{ height: '100px', width: '100px', marginRight: '20px' }}>
                <img src={product.productid.image} alt="" style={{ height: '100%', width: '100%' }} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4>{product.productid.Name}</h4>
                  <Button variant='btn btn-danger' onClick={() => removeFromCart(product.productid._id)} style={{ height: '30px', padding: '3px', width: '8%' }}>Remove</Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p>Quantity:</p>
                    <Button variant='outline-secondary' size='sm' onClick={() => decrementQuantity(product.productid._id, product.quantity)}>-</Button>
                    <span style={{ margin: '0px 5px' }}>{product.quantity}</span>
                    <Button variant='outline-secondary' size='sm' onClick={() => incrementQuantity(product.productid._id, product.quantity)}>+</Button>
                  </div>
                  <p>Price: {product.productid.Price}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <h4>Total: {product.quantity * product.productid.Price}</h4>
                </div>

              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>


      <h4 className='text-light text-center mt-3'>Total : {total}</h4>

      <Button variant='btn btn-light mt-3' href='/setorder' style={{ marginLeft: '42%' }}>Place Order</Button>
      <Link to="/"><Button variant='btn btn-light ml-3 mt-3' href='/'>Cancel</Button></Link>
    </div>
  );
};
