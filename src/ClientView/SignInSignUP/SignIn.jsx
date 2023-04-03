
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

// export const SignIn = () => {
//     const [email, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const history = useHistory();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3009/login', {
//                 email,
//                 password,
//             });
//             localStorage.setItem('token', response.data.token);
//             history.push('/productlist');
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={username}
//                         onChange={(event) => setUsername(event.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={password}
//                         onChange={(event) => setPassword(event.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Log In</button>
//             </form>
//         </div>
//     );
// };


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      const response = await axios.get(`http://localhost:2003/customer/getByEmail/${email}`);

      if (response.data.email !== email || response.data.password !== password) {
        alert('Invalid email or password');
        return;
      }

      alert('Login successful');
      navigate('/', { state: { id: response.data._id } });
    } catch (error) {
      alert('User not found');
    }
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Login</h2>
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>
              <div className="mb-3">
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
              <div className="mb-3">
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
                <button type="button" className="btn btn-color px-5 mb-5 w-100" onClick={loginUser}>
                  Login
                </button>
              </div>
              <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                Not Registered? <Link to="/register" className="text-dark fw-bold">Create an Account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin
