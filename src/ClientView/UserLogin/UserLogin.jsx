import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';
import css from './UserLogin.css'
import emailjs from '@emailjs/browser'


function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const loginUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3009/customer/email?email=${email}&password=${password}`);
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log("TOKEN IS: ",response.data.token)
      const {isValid} = response.data
      console.log(localStorage.getItem('token'));

      if(!isValid){
        window.alert("Invalid Email | Password")
      }else{
        const {data , otp} = response.data
        try {
          await emailjs.send('service_kcbr7ih', 'template_r8tli08', {
            to_name :`${data.fname} ${data.lname}`,
            otp,
            to_email : data.email
          }, '8qsTBYXkbh2Zln1tN')
        } catch (error) {
          window.alert('OTP Sending Failed')
        }
        const ans = window.prompt('Enter OTP :: ')
        if(!ans){
          window.alert('User Cancelled OTP')
        }else if (ans == otp){
          // /success
            localStorage.setItem('email', response.data.data.email);
            localStorage.setItem('customerId', response.data.data._id); // Set the customer's _id in local storage  
            navigate('/', { state: { id: response.data.data._id } });
        }else {
          window.alert('Invalid OTP!!')
        }
      }
      // alert('Login successful');
      
    } catch (error) {
      alert('User not found');
    }
  };


  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (    
    <div className={css.login_body}>
      <ClientNavBar/>
      <div className={css.container}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <div className={css.cardLogin}>
        <h2 className="text-center text-light mt-1">Login</h2>
          <div className="card my-4">
            <form className={css.card_body}>
              <div className="text-center">
                <img
                  src="https://assets.materialup.com/uploads/c81e81ac-827a-4c57-9883-eb9657ed27cb/preview.jpg"
                  className="img-fluid {css.profile-image-pic} img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                  // style={{height:'40px'}}
                />
              </div>
              <div className="mb-3 mr-3">
                <input
                  type="text"
                  className="form-control ml-2 text-md"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3 mr-3">
                <input
                  type="password"
                  className="form-control ml-2"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                  </div>
                  
              <div className="text-center">
                <button type="button" className="btn btn-dark px-5 mb-5 mr-2 w-90" onClick={loginUser}>
                  Login
                </button>
              </div>
              {/* <div className={css.userRegister}>
                Not Register <Link to="">Create an Account</Link>
              </div> */}
              <div id="emailHelp" className="form-text text-center mb-5 text-dark userRegister">
                Not Registered? <Link to="/register" className="text-dark fw-bold userRegister">Create an Account</Link>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserLogin
