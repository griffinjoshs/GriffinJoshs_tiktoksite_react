import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../SubscribeBar/SubscribeBar.css";
import { Container, Col, Row } from 'react-bootstrap';
import { FiRadio } from "react-icons/fi";


function SubscribeBar() {
    return (
        <section className="subSection" id="subSection">
    <Container id="subBackground" >
        <Row>
            <Col lg={2}></Col>
            <Col md={12} lg={8}>
                <h3>Join the 'Real Ones' and Subscribe to Be the First One to know my every move!</h3>
                <br></br>
                <form className="subscribeForm" form method="POST" action="/subscribe" id="subForm" >
                <input type="email" id="email" placeholder="Email"></input>
                <button type="submit" id="subscribeBtn">Subscribe <FiRadio/></button></form>
            </Col>
            <Col lg={2}></Col>
        </Row>
    </Container></section>
        
    )
}

export default SubscribeBar;