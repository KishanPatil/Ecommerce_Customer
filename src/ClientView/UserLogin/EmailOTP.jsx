import React, { useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';
import otp from '../LandingPage/Images/otp.webp';
import css from './EmailOTP.Module.css';

function EmailOTP() {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [otpError, setOTError] = useState('');
  const [timeout, setTimeout] = useState(0);
  const [resend, setResend] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get email from local storage and set state
    const emailIdFromStorage = localStorage.getItem('email');
    if (emailIdFromStorage) {
      setEmail(emailIdFromStorage);
    }

    // Generate OTP and set timeout
    const generateOTP = async () => {
      try {
        const response = await axios.post('http://localhost:3009/customer/otpgenerate', { email });
        console.log(response.data);
        setResend(false); // reset resend flag
        setTimeout(Date.now() + 100000); // set timeout for 1 minutes 40 sec
      } catch (error) {
        console.error(error);
      }
    };

    generateOTP();
  }, [email, resend]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeout > Date.now()) {
        setTimeout(timeout - 1000);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeout]);

  const handleResendOTP = () => {
    setResend(true);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setOTError('');

    try {
      const response = await axios.get(`http://localhost:3009/customer/customers/${email}`);
      console.log(response.data);
      if (response.data.otp === otp) {
        alert('OTP verified successful');
        localStorage.setItem('customerId', response.data._id);
        navigate('/');
      } else {
        setOTError('Invalid OTP');
      }
    } catch (error) {
      console.error(error);
      setOTError('Something went wrong, please try again');
    }
  };

  return (
      <div>
          <ClientNavBar />
      <Card style={{ width: '40rem', height: '23rem', marginLeft: '25%', marginTop: '8%' }}>
        <Card.Body>
          <Card.Title className="mt-4 text-center">Verification Code</Card.Title>
          {/* <div className={css.otpImage}>
                        <img src="https://cdn.dribbble.com/users/1537480/screenshots/3782048/media/e6529daef5ca1f728e25a092a89c39c4.png?compress=1&resize=400x300" className='mb-3' alt="OTP receiving Image" />
                     </div> */}
          <Card.Text>
            <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
              <label>Enter the OTP sent to</label>  {email}
            </div>
            <Form onSubmit={handleVerifyOTP}>
              <Form.Control
                type="text"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                placeholder="Enter OTP"
                className="mt-3 mb-3"
              />
              {timeout > Date.now() && (
  <div style={{ textAlign: 'center' }}>
    <div>OTP will expire in {Math.floor((timeout - Date.now()) / 60000)} minutes and {Math.floor((timeout - Date.now()) / 1000) % 60} seconds</div>
    <div>
      
      <button type="submit" className="btn btn-dark mt-3 mb-3" onClick={handleVerifyOTP}>
        Verify
      </button>
      <button type="button" className="btn btn-dark text-white ml-2" >
        <Link to='/' className='text-white' style={{textDecoration:'none'}}>Cancel</Link>
      </button>
      <br/>
      <button type="button" className="btn btn-link" onClick={handleResendOTP}>
        Resend OTP
      </button>
    </div>
  </div>
)}
            </Form>
          </Card.Text>
        </Card.Body>

      </Card>
    </div>
  );
}

export default EmailOTP;




// import React,{useEffect,useState} from 'react'
// import {Link,useNavigate} from 'react-router-dom'
// import { Card, Form } from 'react-bootstrap'
// import axios from 'axios';
// import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';
// function EmailOTP() {
//     const [email, setEmail] = useState('');
//     const navigate = useNavigate();
  
//     useEffect(() => {
//       const emailIdFromStorage = localStorage.getItem('email');
//       if (emailIdFromStorage) {
//         setEmail(emailIdFromStorage);
//         }
//         console.log(email);
//         const generateOTP = async () => {
//             try {
//               const response = await axios.post('http://localhost:3009/customer/otpgenerate',{email});
//               console.log(response.data);
//             } catch (error) {
//               console.error(error);
//             }
//           };
          
//           generateOTP();
//         const getuserdata = async () => {
//             const response = await axios.get(`http://localhost:3009/customer/getcustomerbyemail/${email}`);
//             console.log(response.data);
//             if (response.data.email !== email) {
//                 alert('Invalid email or password');
//                 return;
//               }
        
//               // alert('Login successful');
//               navigate('/otp');
//         }
//         getuserdata();
//     }, []);

//     // localStorage.setItem('customerId', response.data._id);
//     return (
//         <div className={css.container}>
//             <ClientNavBar />
//             <Card style={{ width: '40rem', height: '23rem', marginLeft: '25%', marginTop: '8%' }}>
//                 <Card.Body>
//                     <Card.Title className='mt-4 text-center'>Verification Code</Card.Title>
//                     <div className={css.otpImage}>
//                         {/* <img src={otp} className='mb-3' alt="OTP receiving Image" /> */}
//                     </div>
//                     <Card.Text>
//                         <Form.Control
//                             type="text"
//                             id = 'otp'
//                             size='md'
//                             placeholder='Enter OTP'
//                             className={css.textbox}

//                         />
//                         <div className={css.btns}>
//                             <button className='btn btn-dark mt-4'>
//                                 <Link to='' style={{textDecoration:'none',color:'white'}}>Verify</Link>
//                             </button>
//                             <button className='btn btn-dark mt-4 ml-4'>
//                                 <Link to='/login' style={{textDecoration:'none',color:'white'}}>Cancel</Link>
//                             </button>
//                         </div>
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//         </div>
//     )
// }

// export default EmailOTP;

