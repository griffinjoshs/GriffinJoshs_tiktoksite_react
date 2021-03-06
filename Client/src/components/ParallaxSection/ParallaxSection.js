import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import "./ParallaxSection.css";
import ButtonComp from '../Button/Button'

function ParallaxSection(props) {
    const { Header, Paragraph, ButtonText, ButtonIcon } = props
    return (
        <section className="parallax">
            <Container>
            <br></br>
                <Row className="parallaxRow">
                    <Col lg={2}></Col>
                    <br></br>
                    <br></br>
                    <Col md={12} lg={8}>
                        <h2 id="paraTitle"><strong>{Header}</strong></h2>
                        <br></br>
                        <p className="parallaxGraph">{Paragraph}</p>
                        <br></br>
                        <ButtonComp
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--wide'> 
                           {ButtonText}
                       {ButtonIcon}
                    </ButtonComp>
                    <br></br>
                    <br></br>
                    <br></br>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>
      </section>
    );
  }
  
  export default ParallaxSection;