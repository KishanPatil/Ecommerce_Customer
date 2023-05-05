import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';

function DisplayUserProfile({ Id }) {
    const [user, setUser] = useState([]);
    const [order, setOrder] = useState([]);
    const id = localStorage.getItem('customerId');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // const response = await axios.get(`http://localhost:3009/customer/customers/${id}`)
                const response = await axios.get(`http://localhost:3009/customer/getcustomerbyid/${id}`)
                setUser(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser()
    }, [id]);


    return (
        <div>
            {/* <h1>User Profile</h1>
        <p> Name: {user.fname}</p>
        <p>Last Name: {user.lname}</p>
        <p>Phone : {user.phone}</p>
        <p>Email : {user.email}</p>
        <p>Password : {user.password}</p>
        <p>City: {user?.Address?.city}</p>
        <p>State: {user?.Address?.state}</p>
        <p>Pincode: {user?.Address?.pincode}</p>
        <p>Number of Orders: {order.length}</p>
       <Link to = {`/editprofile/${localStorage.getItem('customer')}`}><button>Edit Profile</button></Link> */}
            <ClientNavBar />
            <div className="container rounded bg-white mt-5 mb-5" style={{ fontSize: "0.8rem" }}>
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png" /><span className="font-weight-bold">{user.fname}</span><span className="text-black-50">{user.email}</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Hello {user?.fname}!!</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value={user?.fname} /></div>
                                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" placeholder="surname" value={user?.lname} /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value={user?.phone} /></div>
                                <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="enter address line 1" value={user?.email} /></div>
                                <div className="col-md-12"><label className="labels">Password</label><input type="password" className="form-control" placeholder="enter address line 2" value={user?.password} /></div>
                                <div className="col-md-12"><label className="labels">City</label><input type="text" className="form-control" placeholder="enter address line 2" value={user?.city} /></div>
                                <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="enter address line 2" value={user?.state} /></div>
                                <div className="col-md-12"><label className="labels">Pincode</label><input type="text" className="form-control" placeholder="enter address line 2" value={user?.pincode} /></div>

                            </div>
                            <Row>
                                <Col> <Link to={`/editprofile`}> <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Edit Profile</button></div></Link></Col>
                                <Col><Link to={`/`}> <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Cancel</button></div></Link></Col>
                            </Row>

                        </div>
                    </div>
                    {/* <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" value="" /></div> <br />
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value="" /></div>
            </div>
        </div> */}
                </div>
            </div>
        </div>

    )
}

export default DisplayUserProfile