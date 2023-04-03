import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';
import css from './UserLogin.css'
function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const loginUser = async () => {
    if (!email || !password) {
      alert('Enter email and password');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3009/customer/customers/${email}`);
      console.log(response.data);
      if (response.data.email !== email || response.data.password !== password) {
        alert('Invalid email or password');
        return;
      }

      // alert('Login successful');
      navigate('/otp');

      localStorage.setItem('email', response.data.email);

      // localStorage.setItem('customerId', response.data._id); // Set the customer's _id in local storage
      // navigate('/', { state: { id: response.data._id } });
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
      <div className="row ">
        <div className="col-md-6 offset-md-3">
        <div className={css.cardLogin}>
        <h2 className="text-center text-light mt-5">Login</h2>
          <div className="card my-5">
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
                  className="form-control"
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
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                  </div>
                  
              <div className="text-center">
                <button type="button" className="btn btn-color px-5 mb-5  w-90" onClick={loginUser}>
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
