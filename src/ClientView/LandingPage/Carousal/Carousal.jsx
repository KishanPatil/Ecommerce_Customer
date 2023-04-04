import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousal(){
    return(
        <Carousel style={{height:"380px",width:"1150px" ,marginLeft:"4%"}}>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://www.eiosys.com/wp-content/uploads/2021/11/blog-15-Best-Email-Marketing-tools-in-2021.png"
            alt="First slide"
            style={{height:"380px",width:"1150px"}}
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://media.nedigital.sg/fairprice/images/d73e902e-c047-4bf2-84cc-c21da7d21326/MP-GadgetsLand-LandingBanner-Feb2021.jpg?q=70"
            alt="Second slide"
            style={{height:"380px",width:"1150px"}}
          />
  
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/big-gadget-sale-design-template-33c6c8e6f1e51bb2b276280ba5562b82_screen.jpg?ts=1652171462"
            alt="Third slide"
            style={{height:"380px",width:"1150px"}}
          />
  
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    );
}