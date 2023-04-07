import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col, Form, Button, Image } from "react-bootstrap";
//import css from './OrderComponent.module.css'
//import { useAuth } from "../../hooks/useAuth";
//import { findCustomerByIdService } from "../../service/customerService";
import { Navigate, useParams ,useNavigate} from "react-router-dom";
//ximport { findOrderByIdService } from "../../service/orderService";

function OrderComponent() {
    //const customerId = useAuth()
    const [customer, setCustomer] = useState(null)
    const navigate = useNavigate();
    const [order, setOrder] = useState(null)
    const params = useParams()
    const { orderId } = params
    // const [total, setTotal] = useState(0)
    const customerId = localStorage.getItem('customerId');
    const total = localStorage.getItem('total');
    console.log(total)
    // useEffect(() => {
    //     findCustomerByIdService(customerId).then(data => {
    //         setCustomer(data)
    //         console.log(data)
    //     })
    // }, [customerId])

    // useEffect(() => {
    //     console.log(orderId)
    //     findOrderByIdService(orderId).then(data => {
    //         let prodTotal = 0
    //         setOrder(data)
    //         data.products.forEach(element => {
    //             prodTotal += (element.quantity * (element.productId.price))
    //         });

    //         setTotal(prodTotal)

    //     })
    // }, [orderId])

    return (
        <React.Fragment>

            <Container className="p-4 mh-50 mt-5 rounded-5" style={{ maxWidth: "800px" }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-bold mb-0 ">Checkout</h3>
                </div>

                <Row className="justify-content-center align-items-center">

                    <Col>
                        {customer !== null && (
                            <Card className="my-4 shadow-3 bg-light">
                                <Card.Body className="p-4">
                                    <p className="m-7 fw-bold  ">Customer Details - </p>
                                    <Form.Label>Delivering To :  {customer.account.firstname} {customer.account.lastname}</Form.Label><br />
                                    <Form.Label>Shipping Here :  {customer.shipping.street} , {customer.shipping.city} {customer.shipping.state} {customer.shipping.city} {customer.shipping.country}</Form.Label><br />
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="bg-light">
                            {order !== null && (
                                <Card.Body className="p-4">
                                    <p className="m-7 fw-bold ">Order Summery -</p><br />
                                    <p className="m-7 fw-bold ">Order Id - {order._id}</p>
                                    <Form.Label className="m-7 fw-bold " >Items :</Form.Label><br />
                                    <div className='align-items-center'>
                                        {order?.products.map(product => (
                                            <div className="card mb-3">
                                                <div className="row g-0">
                                                   
                                                    <div className="col-md-4 border border-secondary ">
                                                        <img src={product.productId.image} className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                   
                                                    <div className="col-md-8 ">
                                                        <div className="card-body">
                                                            <h5 className="card-title">{product.productId.name}</h5>
                                                        </div>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{product.productId.price}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            )}
                            <Card.Footer>
                                <div className="fs-5 fw-bold text-dark">
                                    <h5>Total : {total}</h5>  </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <div className="d-grid gap-1">
                        <Button className="fs-6 my-4" color="primary" onClick={() => {
                           navigate('/product')
                        }}>
                            Checkout
                        </Button>
                    </div>
                </Row>
            </Container>

        </React.Fragment >
    )
}

export default OrderComponent




// import React, { useEffect, useState } from "react";
// import {
//   PaymentElement,
//   LinkAuthenticationElement,
//   useStripe,
//   useElements
// } from "@stripe/react-stripe-js";
// import './CheckoutForm.css'

// export default function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!stripe) {
//       return;
//     }

//     const clientSecret = new URLSearchParams(window.location.search).get(
//       "payment_intent_client_secret"
//     );

//     if (!clientSecret) {
//       return;
//     }

//     stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
//       switch (paymentIntent.status) {
//         case "succeeded":
//           setMessage("Payment succeeded!");
//           break;
//         case "processing":
//           setMessage("Your payment is processing.");
//           break;
//         case "requires_payment_method":
//           setMessage("Your payment was not successful, please try again.");
//           break;
//         default:
//           setMessage("Something went wrong.");
//           break;
//       }
//     });
//   }, [stripe]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     setIsLoading(true);

//     const { error } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         // Make sure to change this to your payment completion page
//         return_url: "http://localhost:3000",
//       },
//     });

//     // This point will only be reached if there is an immediate error when
//     // confirming the payment. Otherwise, your customer will be redirected to
//     // your `return_url`. For some payment methods like iDEAL, your customer will
//     // be redirected to an intermediate site first to authorize the payment, then
//     // redirected to the `return_url`.
//     if (error.type === "card_error" || error.type === "validation_error") {
//       setMessage(error.message);
//     } else {
//       setMessage("An unexpected error occurred.");
//     }

//     setIsLoading(false);
//   };

//   const paymentElementOptions = {
//     layout: "tabs"
//   }

//   return (
//     <form id="payment-form" onSubmit={handleSubmit}>
//       <LinkAuthenticationElement
//         id="link-authentication-element"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <PaymentElement id="payment-element" options={paymentElementOptions} />
//       <button disabled={isLoading || !stripe || !elements} id="submit">
//         <span id="button-text">
//           {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
//         </span>
//       </button>
//       {/* Show any error or success messages */}
//       {message && <div id="payment-message">{message}</div>}
//     </form>
//   );
// }