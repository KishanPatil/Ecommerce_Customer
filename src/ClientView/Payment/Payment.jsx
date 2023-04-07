import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
// import css from "./PaymentComponent.module.css"
// import CashIcon from "../Icons/CashIcon"
import CloseButton from 'react-bootstrap/CloseButton';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';
import { createPaymentService } from '../../services/Payment/PaymentService'
import OrderComponent from '../../ClientView/Checkout/CheckoutForm' 
const stripePromise = loadStripe('pk_test_51Mt6nxSGE2olbbFYNEtLFzsbOQ3H7LPlDLuaJQqzcs2Vmn0AHmTZAS1KC7JqeIAgVIS7tY7AMhW6OmUhqNFb5VQ100rvqUPC9t');

function PaymentComponent() {
  const [clientSecret, setClientSecret] = useState("");
  const params = useParams()
  const { orderId } = params
  const cartid = localStorage.getItem('cartid');
  const navigate = useNavigate();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    createPaymentService(cartid)
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [orderId]);

  const options = {
    // passing the client secret obtained from the server
    clientSecret,
  };
  return (

    <React.Fragment>

      <Container className="p-5 mh-50 mt-5 rounded-5 shadow-lg bg-light" style={{ maxWidth: "700px" }}>
        <div className="position-relative">
          <div className="position-absolute top-0 end-0 fw-bold">
            <CloseButton />
          </div>
        </div>
        <Row className="justify-content-center align-items-center p-3">
          <Card >
            <Card.Header className='fw-bold fs-5'>Select Payment Method</Card.Header>
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <Form>
                  <Form.Group>
                    <PaymentElement />
                    <div className='d-grid gap-1'>
                      <Button
                        type="submit" size="lg" onClick={() => { navigate(`/checkout/${orderId}`) }}> Continue</Button>
                    </div>
                  </Form.Group>

                </Form>
              
              </Elements>
            )}

          </Card>

        </Row>

      </Container>

    </React.Fragment>

  )
}

export default PaymentComponent