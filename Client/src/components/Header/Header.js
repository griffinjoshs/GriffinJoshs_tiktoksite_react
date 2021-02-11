import React from "react";
import { Jumbotron, Button, Container, Col, Row } from 'react-bootstrap';
import "./Header.css";
import { FiArrowRightCircle, FiRadio } from "react-icons/fi";
import HeaderImage from "./HeaderImage/HeaderImage";
import ButtonComp from '../Button/Button'

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
    <ButtonComp href='/subscribe'
    className='btns'
    buttonStyle='btn--outline'
    buttonSize='btn--large'>
      Subscribe
    </ButtonComp>
    </Col>
    <Col xl={1}></Col>
    <Col sm={12} xl={5}>
    <br className="btnSpace"></br>
    <ButtonComp href='https://griffinjoshs.bigcartel.com/'
    className='btns'
    buttonStyle='btn--primary'
    buttonSize='btn--large'>
      Merch <FiArrowRightCircle/>
    </ButtonComp>
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
