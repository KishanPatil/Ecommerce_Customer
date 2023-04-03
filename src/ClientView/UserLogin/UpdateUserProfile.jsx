import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';

function UpdateUserProfile() {

  //initializing state variable
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [errors, setErrors] = useState({})

  //creating a navigate object
  const navigate = useNavigate()

  //Extracting id from the localstorage
  const id = localStorage.getItem('customerId');
  console.log(id);

  async function handleUpdate(e) {
    e.preventDefault();

    // validating input fields
    const errors = {};
    if (!fname) {
      errors.fname = 'First name is required';
    }

    if (!lname) {
      errors.lname = 'Last name is required';
    }

    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Invalid phone number';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (!city) {
      errors.city = 'City is required';
    }

    if (!state) {
      errors.state = 'State is required';
    }
    if (!pincode) {
      errors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(pincode)) {
      errors.pincode = 'Invalid pincode';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }


    try {
      await axios.put(`http://localhost:3009/customer/updatecustomersbyid/${id}`, { fname, lname, phone, email, password, city, state, pincode });
      alert('Profile updated successfully !!')

      //navigate to the view profile page
      navigate('/user')
    } catch (error) {
      console.log(error)
    }
  }

  //defining a useEffect hook to fetch the data
  useEffect(() => {
    async function fetchData() {
      const userResponse = await axios.get(`http://localhost:3009/customer/getcustomerbyid/${id}`);
      const { fname, lname, phone, email, password, city, state, pincode } = userResponse.data;
      console.log(userResponse.data)

      //setting the name with the fetched data
      setFname(fname)
      setLname(lname)
      setPhone(phone)
      setEmail(email)
      setPassword(password)
      setCity(city)
      setState(state)
      setPincode(pincode)
    }
    fetchData();
  }, [id])

  return (
    <div >
      <ClientNavBar />
      <div className="container rounded bg-white mt-5 mb-5" style={{ fontSize: "0.8rem" }}>
        <div className="row">
          <div className="col-md-7" style={{marginLeft:'20%'}}>
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Hello {fname}!!</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value={fname} onChange={(e) => setFname(e.target.value)} required />
                  {errors.fname && <p className="text-danger">{errors.fname}</p>}
                </div>
                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" placeholder="surname" value={lname} onChange={(e) => setLname(e.target.value)} required />
                  {errors.lname && <p className="text-danger">{errors.lname}</p>}
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  {errors.phone && <p className="text-danger">{errors.phone}</p>}
                </div>
                <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="enter address line 1" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>
                <div className="col-md-12"><label className="labels">Password</label><input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
                <div className="col-md-12"><label className="labels">City</label><input type="text" className="form-control" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} required />
                  {errors.city && <p className="text-danger">{errors.city}</p>}
                </div>
                <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="Enter State" value={state} onChange={(e) => setState(e.target.value)} required />
                  {errors.state && <p className="text-danger">{errors.state}</p>}
                </div>
                <div className="col-md-12"><label className="labels">Pincode</label><input type="text" className="form-control" placeholder="Enter Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                  {errors.pincode && <p className="text-danger">{errors.pincode}</p>}
                </div>
              </div>
              <Row>
                <Col><div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleUpdate}>Edit</button></div></Col>
                <Col><Link to={`/user`}> <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Cancel</button></div></Link></Col>
              </Row>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateUserProfile