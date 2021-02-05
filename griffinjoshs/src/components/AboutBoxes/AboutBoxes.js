import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
// import "../Header/Header.css";
import "../../components/BoxSection/BoxSection.css";
import { SiTiktok } from "react-icons/si";
import { FaPodcast, FaPatreon } from "react-icons/fa";
import { BiRightArrowCircle } from "react-icons/bi";
// import { FiRadio } from "react-icons/fi";


function AboutBoxSection() {
  return ( 
        <section className="boxSection">
            <Container>
            <div className="space"></div>
                <Row>
                    <Col md={12} lg={4}>
                        <div className="card" onClick="">
                            <br></br>
                            <i className="boxIcon"><SiTiktok/></i>
                            <br></br>
                            <h3 className="boxHeader">TikTok</h3>
                            <br></br>
                            <p>TikTok is where everything started for me! It gave me my rise to fame. If you are intersted in working with me and want a promotion click here</p>
                            <br></br>
                            <button className="cardBtn">Learn More <BiRightArrowCircle/></button>
                            <br></br>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                    <div className="card" onClick="">
                            <br></br>
                            <i className="boxIcon"><FaPodcast/></i>
                            <br></br>
                            <h3 className="boxHeader">Podcast</h3>
                            <br></br>
                            <p>TikTok is where everything started for me! It gave me my rise to fame. If you are intersted in working with me and want a promotion click here</p>
                            <br></br>
                            <button className="cardBtn">Learn More <BiRightArrowCircle/></button>
                            <br></br>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                    <div className="card" onClick="">
                            <br></br>
                            <i className="boxIcon"><FaPatreon/></i>
                            <br></br>
                            <h3 className="boxHeader">Patreon</h3>
                            <br></br>
                            <p>TikTok is where everything started for me! It gave me my rise to fame. If you are intersted in working with me and want a promotion click here</p>
                            <br></br>
                            <button className="cardBtn">Learn More <BiRightArrowCircle/></button>
                            <br></br>
                        </div>
                    </Col>
                </Row>
                <br></br>
            </Container>
        </section>
  );
}

export default AboutBoxSection;