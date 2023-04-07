import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousal(){
    return(
        <Carousel style={{height:"380px",width:"1150px" ,marginLeft:"4%"}}>
        <Carousel.Item>
          <img
            className="d-block rounded-3"
            src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1680689020/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2023/HP_EssentialCombo_27March2023_jmwooa.jpg/mxw_2048,f_auto"
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
            className="d-block rounded-3"
            src="https://www.eiosys.com/wp-content/uploads/2021/11/blog-15-Best-Email-Marketing-tools-in-2021.png"
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
            className="d-block rounded-3"
            src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1680533646/Croma%20Assets/CMS/LP%20Page%20Banners/2023/Gifting%20Store%20-%20April/HP%20Rotating%20Banners/HP_GiftingStore_3April2023_txfs3z.jpg/mxw_2048,f_auto"
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