import React, { useState } from 'react';
import axios from 'axios';
import './UserRegister.css'
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';
import {Row, Col} from 'react-bootstrap'
import {Link , useNavigate} from 'react-router-dom'

function Register() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('')
  const [state , setState] = useState('')
  const [pincode , setPincode] = useState('')
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validate()){
    try {
      const res = await axios.post('http://localhost:3009/customer/customers', {
        fname,
        lname,
        phone,
        email,
        password,
        city,
        state,
        pincode
      });
      console.log(res.data);
      alert('Registration Successful!');
      navigate('/login')
    } catch (err) {
      setErrors(err.response.data.error);
    }
  }
  };

  const validate = () => {
    let tempErrors = {};

    if (!fname.trim()) {
      tempErrors.fname = "First Name is required.";
    }

    if (!lname.trim()) {
      tempErrors.lname = "Last Name is required.";
    }

    if (!phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/i.test(phone)) {
      tempErrors.phone = "Phone number is invalid.";
    }

    if (!email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is invalid.";
    }

    if (!password.trim()) {
      tempErrors.password = "Password is required.";
    } else if (password.trim().length < 6) {
      tempErrors.password = "Password should have at least 6 characters.";
    }

    if (!city.trim()) {
      tempErrors.city = "City is required.";
    }

    if (!state.trim()) {
      tempErrors.state = "State is required.";
    }

    if (!pincode.trim()) {
      tempErrors.pincode = "Pincode is required.";
    } else if (!/^[1-9][0-9]{5}$/i.test(pincode)) {
      tempErrors.pincode = "Pincode is invalid.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  }

  

  return (
    <div>
      <ClientNavBar />
      <div className="register-body">
        <h2 className='mb-5 '>Register</h2>
        <form  className='container' onSubmit={handleSubmit}>
          <div>
           <Row>
            <Col>
            <label htmlFor="name"> First Name:</label>
            </Col>
            <Col>
            <input
              className={`ml-2 mb-3 mr-4 register-input ${errors.fname && 'border border-danger'}`}
              type="text"
              id="fname"
              placeholder='Enter first name'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            {errors.fname && <div className="text-danger" style={{fontSize:'12px',marginTop:'-10px'}}>{errors.fname}</div>}
           
            </Col>
           </Row>
          </div>
          <div>
           <Row>
            <Col>
            <label htmlFor="lname">Last Name:</label>
            </Col>
            <Col>
            <input
              className={`ml-2 mb-3 mr-4 register-input ${errors.lname && 'border border-danger'}`}
              type="text"
              id="lname"
              placeholder='Enter last name'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
             {errors.lname && <div className="text-danger" style={{fontSize:'12px',marginTop:'-10px'}}>{errors.lname}</div>}
            </Col>
           </Row>
          </div>
          <div>
            <Row>
              <Col>
              <label htmlFor="phone">Phone:</label>
              </Col>
              <Col>
              <input
              className={`ml-2 mb-3 mr-4 register-input ${errors.phone && 'border border-danger'}`}
              type="text"
              id="phone"
              placeholder='Enter phone number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
             {errors.phone && <div className="text-danger" style={{fontSize:'12px',marginTop:'-10px'}}>{errors.phone}</div>}
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
              <label htmlFor="email">Email:</label>
              </Col>
              <Col>
              <input
              className={`ml-2 mb-3 mr-4 register-input ${errors.email && 'border border-danger'}`}              type="email"
              id="email"
              placeholder='Enter email id'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             {errors.email && <div className="text-danger" style={{fontSize:'12px',marginTop:'-10px'}}>{errors.email}</div>}
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
              <label htmlFor="password">Password:</label>
              </Col>
              <Col>
              <input
              className={`ml-2 mb-3 mr-4 register-input ${errors.password && 'border border-danger'}`}              type="password"
              id="password"
              placeholder='Enter password '
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="text-danger" style={{fontSize:'12px',marginTop:'-10px'}}>{errors.password}</div>}
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
              <label htmlFor="city">City:</label>
              </Col>
              <Col>
              <input
              className={`ml-2 mb-3 mr-4 register-input ${errors.city && 'border border-danger'}`}
              type="text"
              id="city"
              placeholder='Enter City '
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && <div className="text-danger" style={{fontSize:'12px',marginTop:'-10px'}}>{errors.city}</div>}
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
              <label htmlFor="state">State:</label>
              </Col>
              <Col>
              <input
             className={`ml-2 mb-3 mr-4 register-input ${errors.state && 'border border-danger'}`}
              type="text"
              id="state"
              placeholder='Enter State '
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            {errors.state && <div className="text-danger" style={{fontSize:'12px',marginTop:'-10px'}}>{errors.state}</div>}
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
              <label htmlFor="pincode">Pincode:</label>
              </Col>
              <Col>
              <input
              className={`ml-2 mb-3 mr-4 register-input ${errors.pincode && 'border border-danger'}`}
              type="text"
              id="pincode"
              placeholder='Enter pincode '
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            {errors.pincode && <div className="text-danger" style={{fontSize:'12px',marginTop:'-10px'}}>{errors.pincode}</div>}
              </Col>
            </Row>
          </div>
        
          <div className="btns">
          <button type="submit" className='btn btn-success ' >Register</button>
          <button type="cancel" className='btn btn-success '><Link to='/' style={{textDecoration:'none',color:'white'}}>Cancel</Link></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
