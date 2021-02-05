import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
// import "../AboutBottom/AboutBottom.css";
import '../ParallaxSection/ParallaxSection.css'

function AboutBottom() {
    return (
        <section className="parallax">
            <Container>
                <Row className="parallaxRow">
                    <Col lg={2}></Col>
                    <br></br>
                    <br></br>
                    <Col md={12} lg={8}>
                        <h2 id="paraTitle"><strong>Thank You To All My Fans for the Love and Support!</strong></h2>
                        <br></br>
                        <p className="parallaxGraph">Since November of 2019, I have been dedicated to bringing you comedy and great content! I could have never imagined I would grow so big. However in September of 2020 I have been hit with what seems like a permanant shadowban on my main account. However I have not stopped bringing you the best content and livestreams as possible and extremely look forward to continuely Entertaining all of you. Make sure to Subscribe to my Email List to get special offers, as well as my Podcast. </p>
                        <br></br>
                        <button type="button" id="paraButton" className="btn"><strong>Check Out My Podcast</strong></button>
                        <br></br>
                        <br></br>
                    {/* <img src={Me} alt="star" text-align="center" id="Image"></img> */}
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                < div className="space"></div>
            </Container>
      </section>
    );
  }
  
  export default AboutBottom;