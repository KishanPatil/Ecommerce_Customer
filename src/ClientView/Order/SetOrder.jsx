// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import { getCustomerById, getAllOrders } from '../service/SetOrderService';
import { getCustomerById, getOrderByCustomerId, getCartByCuatomerId } from '../../services/Order/SetOrderService'
// import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';
import ClientNavBar from '../LandingPage/Navbar/ClinetNavBar';
import axios from 'axios';
import { createPaymentService } from '../../services/Payment/PaymentService';
import { Elements } from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js';

import { PaymentElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51MrHZkSBXFZ8OGxd4H8wh5XznpIurol68HQa755scZNN6dNogkmfmwOX87F4OqXZ93l67Y6cqK5ujMLb3XXHue8400576hUKVX');

export default function SetOrder() {
    
    const cartid = localStorage.getItem('cartid');
    const total = localStorage.getItem('total');
    
    const customerId = localStorage.getItem('customerId');
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    };

    const [Customer, setCustomer] = useState([]);

    const [cart, setCart] = useState([]);
    const [stripeToken, setStripeToken] = useState("")

    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setTheState] = useState("");
    const [pin, setPin] = useState();
    const [payment, setPayment] = useState("");

    const navigate = useNavigate();

    console.log(Customer, " thi9s ois customer data Customer")

    console.log(cart, "this is cart data")

    useEffect(() => {
        async function fetchCustomer() {
            const Customerdata = await axios.get(`http://localhost:3009/customer/getCustomerById/${customerId}`, { headers });
            console.log(Customerdata.data)
            console.log("customer data in SetOrder : ", Customerdata.data)
            setCustomer(Customerdata.data);


        }
        async function fetchCart() {
            const mycart = await axios.get(`http://localhost:3009/cart/getcartbycustomerid/${customerId}`, { headers: headers });;
            console.log("cart of Customer ", mycart.data);
            console.log("cart of price ");
            setCart(mycart.data);

            console.log("mycart data here ====>>>> "+mycart.data)
            createPayment(mycart.data, total)

        }
        fetchCart();
        fetchCustomer();


    }, []);





    const onChangePayment = (event) => {
        // alert("called")
        // console.log(event.target.value);
        setPayment(event.target.value);
        console.log(payment);
    }

    function goToOrder() {
        // alert(payment);
        alert("Order placed successfully !!");
        navigate("/orderpage");
        // navigate('/order')

    }


    const submitAddress = (event) => {
        event.preventDefault();

    }


    const inputEventStreet = (event) => {
        console.log(event.target.value);
        setStreet(event.target.value);
        // city = Customer.address?.city
    }

    const inputEventCity = (event) => {
        console.log(event.target.value);
        setCity(event.target.value);
    }

    const inputEventPin = (event) => {
        console.log(event.target.value);
        setPin(event.target.value);
    }

    const inputEventState = (event) => {
        console.log(event.target.value);
        setTheState(event.target.value);
    }
    /*
    


    */
    const createPayment = async (cart, total) => {
        console.log("cart and total =====>  " + cart, total)
        try {
            createPaymentService(cart, total)
                .then(res => res.json())
                .then(data => {
                    console.log('stripetoekn ====>', data.clientSecret)
                    setStripeToken(data.clientSecret)

                })

        } catch (error) {
            console.log('Error to connect to stripe payment')
        }
    }

    const PostDataToOrder = async () => {

        cart.products.map(async (val) => {
            console.log(" street value is ", street)
            const temp_obj = {
                "customerid": cart.customerId,
                "status": "placed",
                "street": street,
                "city": city,
                "State": state,
                "pin": pin,
                "payment": payment,
                "quantity": val.quantity,
                "productId": val.productid
            }
            await axios.post("http://localhost:3009/order/orders", temp_obj).then((val) => {
                console.log("Product added to order")

                console.log(temp_obj);
                // alert("done")
            })


            // goToOrder();
        })
        // await axios.delete(`http://localhost:3009/cart/removefromcart/${customerId}`)



        goToOrder();
    }


    // street = Customer.address.city;

    return (
        <>
            <div className='' >
                <ClientNavBar />
                <div className='row mt-5' style={{ "color": "white", marginLeft: '10%' }}>

                    <div className="col-sm-5 mx-3   border" style={{ backgroundColor: '#1e1e1e' }}>
                        <h4> Delivery address:- </h4>

                        <form onSubmit={submitAddress}>

                            <div className="form-outline mb-4">
                                <label className="form-label" for="form3Example3">Street</label>
                                <input type="text" id="name" className="form-control form-control-lg"
                                    value={street} onChange={inputEventStreet}
                                    placeholder="Enter Your Street Address " />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" for="form3Example3">City</label>
                                <input type="text" id="name" className="form-control form-control-lg"
                                    value={city} onChange={inputEventCity}
                                    placeholder="Enter Your City " />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" for="form3Example3">Pin</label>
                                <input type="number" id="name" className="form-control form-control-lg"
                                    value={pin} onChange={inputEventPin}
                                    placeholder="Enter Pin " />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" for="form3Example3">State</label>
                                <input type="text" id="name" className="form-control form-control-lg"
                                    value={state} onChange={inputEventState}
                                    placeholder="Enter Your State " />
                            </div>

                        </form>

                        {/* <p>city: {Customer.address.city}, </p>
                <p> state: {Customer.address.state}, </p>
                <p> pincode: {Customer.address.pincode} </p> */}

                    </div>


                    {stripeToken != "" && (
                        <div className="col-sm-5 mx-3 text-center  border" style={{ backgroundColor: '#1e1e1e' }}>
                            <h4 className='mb-4'> select payment method :- </h4>
                            {console.log('elements stripe token -|->>>>>', { clientSecret: stripeToken })}
                            <Elements options={{
                                clientSecret: stripeToken
                            }} stripe={stripePromise}>
                                <PaymentElement />
                                {/* <button className="btn btn-success px-5 mx-5" onClick={PostDataToOrder} > Place Order </button>
                                <button type="button" class="btn btn-success" onClick={(e) => {
                                    e.preventDefault()
                                    goToOrder()
                                }} > Place Orader

                                </button> */}
                            </Elements>
                            <button className="btn btn-success px-5 mx-5 mt-5" onClick={PostDataToOrder} > Place Order </button>
                            {/* <button type="button" class="btn btn-success mt-5" onClick={(e) => {
                                e.preventDefault()
                                goToOrder()
                            }} > Cancel 

                            </button> */}
                            {/* <div onChange={onChangePayment}>
                                                <input type="radio" value="UIP" name="payment" /> <img src="https://images.news18.com/ibnlive/uploads/2020/02/UPI.jpg?impolicy=website&width=510&height=356" width="125" height="50" alt="" /> <br />UPI <br />
                                                <input type="radio" value="Credit Card" name="payment" /> <img src="https://cdn-icons-png.flaticon.com/512/893/893081.png" width="125" height="100" alt="" /> <br />Credit Card <br />
                                                <input type="radio" value="Cash_On_delivery" name="payment" /> <img src="https://cdn-icons-png.flaticon.com/512/1554/1554406.png" width="125" height="100" alt="" /> <br />Cash on delivery  <br />
                                            </div>
                                            <hr className='hr' />
                                            <div className="d-flex px-5 justify-content-center">
                                                <button className="btn btn-success px-5 mx-5" onClick={PostDataToOrder} > Place Order </button>
                                                {/* <button type="button" class="btn btn-success" onClick={(e) => {
                                                    e.preventDefault()
                                                    goToOrder() }} > Place Orader
                                            </div>
                                    </button> */}

                        </div>
                    )}

                    <p></p>
                    <hr className='hr' />

                </div>


            </div>
        </>
    )
}
