import React from "react";
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';
import "../Header/Header.css";
import "../BottomSec/styles/BottomSec.css";
import BottomSecImage from "../BottomSec/BottomSecImage";
import ButtonComp from '../Button/Button'

// By importing the Header.css file, it is added to the DOM whenever this component loads
const styles = {
  topSpace: {
    "padding-top": "50px"
  }
}


function AboutHeader() {
  return ( 
    <Container fluid id="homeFront">
    <div style={styles.topSpace}></div>
  <Row className="header">
  <Col lg={1}></Col>
    <Col sm={12} lg={5} id="jumbtronColumnAbout"> <Jumbotron id="homeFrontJumbotron" >
    <br></br>
    <br></br>
    <h1 className="about">About Me</h1>
    <br></br>
    <p className="aboutP">About My Website. I will Eventually write a paragraph about myself and my social media precense and what it means to me. I will talk about who I am, how I got here, and where I will go from here. And yes, I haven't been able to go live lately due to my work on this website and other projects!</p>
<br></br>
    <Row className="mb-2" id="btn">
    <Col sm={12} xl={6}>
    <br className="btnSpace"></br>
    <ButtonComp
    className='btns'
    buttonStyle='btn--outline'
    buttonSize='btn--large'>
      Subscribe 
    </ButtonComp>
    </Col>
    </Row>
  </Jumbotron></Col>
  {/* <Col lg={1}></Col> */}
  <Col sm={12} lg={6} id="imgCol">
      <BottomSecImage />
      </Col>
  </Row>
  </Container>
  );
}

export default AboutHeader;
