import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FontAwesomeIcon from '@fortawesome/fontawesome-svg-core'
import { Link, useNavigate } from 'react-router-dom';
const customerId = localStorage.getItem('customerId');
const isLoggedIn = Boolean(customerId);


export default function ClientNavBar({ onSearch, onSearchClick }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const customerIdFromStorage = localStorage.getItem('customerId');
    if (customerIdFromStorage) {
      setIsLoggedIn(true);
      setCustomerId(customerIdFromStorage);
    }
  }, []);

  const logoutUser = () => {
    localStorage.removeItem('customerId');
    setIsLoggedIn(false);
    setCustomerId('');
    navigate('/');
  };

  const [sdata, setSdata] = useState("");
  //function to search products 
  const handleSubmit = () => {
    if (sdata === "") {
      alert("Search Something");
      navigate("/");
    } else { navigate(`/search/${sdata}`) }
  }

  return (
    <Navbar  expand="lg shadow-lg" style={{backgroundColor:'#373639'}} sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "white", textDecoration: "none", fontSize: "large" }}>EKarto</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link ><Link to='/' className=' ml-2 ' style={{ color: "white", textDecoration: "none" }}>  Home </Link></Nav.Link>
            <Nav.Link href="#" ><Link className=' ml-2 effect' to='/product' style={{ color: "white", textDecoration: "none" }}> Products</Link></Nav.Link>
            <Nav.Link ><Link className=' ml-2' to='/category' style={{ color: "white", textDecoration: "none" }}> Category</Link></Nav.Link>
            <Nav.Link ><Link className=' ml-2' to='/brand' style={{ color: "white", textDecoration: "none" }}> Brand</Link></Nav.Link>

            {/* <Nav.Link href="#" style={{ color: "white", textDecoration: "none" }}>Contact Us</Nav.Link> */}
          </Nav>
          <Form onSubmit={handleSubmit} className="d-flex justify-content-center ml-5" style={{ color: 'white', textDecoration: 'none' }}>
            <Form.Control
              type="search" placeholder="Search Here" className="me-2  ml-2" aria-label="Search"
              onChange={(e) => {
                setSdata(e.target.value); console.log("Searched data:", e.target.value);
              }} />
            <Button  variant='outline-secondary' className='btn btn-dark ml-2'
              onClick={handleSubmit} style={{color:'white'}}>Search</Button>
          </Form>


          {isLoggedIn ? (
            <>
              
              

              {/* <Nav.Link >
                <Link to="/cart" className='mr-2 ml-2'><i class="fa-solid fa-cart-shopping" style={{ fontSize: '30px', color: 'white' }}></i></Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={`/user`} className='mr-5'><i class="fa-solid fa-user" style={{ fontSize: '30px', color: 'white' }}></i></Link>
              </Nav.Link> */}
                <Button variant='outline-secondary' className="btn btn-dark ml-5" onClick={logoutUser} style={{ color: 'white',float: "left" }}>Logout</Button>
                <Nav.Link >
                <Link to="/cart" className='mr-2 ml-2'><i class="fa-solid fa-cart-shopping" style={{ fontSize: '30px', color: 'white' }}></i></Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={`/user`} className='mr-2'><i class="fa-solid fa-user" style={{ fontSize: '30px', color: 'white' }}></i></Link>
              </Nav.Link>
                
            </>
          ) : (
            <button variant='outline-secondary'className="btn btn-dark ml-3">
              <Link to="/login" style={{ color: 'white', textDecoration: 'none' ,float:'left'}}>Login</Link>
            </button>
            

          )}
          <Nav.Link >
                <Link to={`/orderpage`} className='mr-3 '  style={{ color: "white", textDecoration: "none" }}>Order</Link>
              </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}