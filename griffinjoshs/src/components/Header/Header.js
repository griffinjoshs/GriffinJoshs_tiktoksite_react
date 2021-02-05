import React from "react";
import { Jumbotron, Button, Container, Col, Row } from 'react-bootstrap';
import "../Header/Header.css";
import { FiArrowRightCircle, FiRadio } from "react-icons/fi";
import HeaderImage from "./HeaderImage/HeaderImage";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const name = 'Griffin Joshs';

function Header() {
  return ( 
    <Container fluid id="homeFront">
      <div className="topSpace"></div>
  <Row className="header">
  <Col lg={1}></Col>
    <Col sm={12} lg={5} id="jumbtronColumn"> <Jumbotron id="homeFrontJumbotron" >
    <h1>{name}</h1>
    <h2 className="headerP">
      Somehow You Found My Website 👅
</h2>
<br></br>
<br></br>
    <Row className="mb-2" id="btn">
      <Col sm={12} lg={5} id="primaryBtnCol">
    <Button variant="light" className="primary" id="btns" size="lg" href="https://teespring.com/stores/my-store-10056083">
      Merch <FiArrowRightCircle />
    </Button>
    </Col>
    <Col xl={1}></Col>
    <Col sm={12} xl={5}>
    <br className="btnSpace"></br>
    <Button variant="secondary" className="transparent" id="btns" size="lg" href="#subSection">
    Subscribe <FiRadio/> 
    </Button>
    </Col>
    </Row>
  </Jumbotron></Col>
  {/* <Col lg={1}></Col> */}
  <Col sm={12} lg={6} id="imgCol">
      <HeaderImage />
      </Col>
      {/* <Col lg={1}></Col> */}
  </Row>
  </Container>
  );
}

export default Header;
