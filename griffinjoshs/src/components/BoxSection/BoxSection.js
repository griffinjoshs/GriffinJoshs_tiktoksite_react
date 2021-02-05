import React from "react";
import { Container, Col, Row, Button } from 'react-bootstrap';
import "../Header/Header.css";
import "../BoxSection/BoxSection.css";
// import { SiTiktok } from "react-icons/si";
import { FaPodcast, FaLaughSquint, FaPatreon } from "react-icons/fa";
import { BiRightArrowCircle } from "react-icons/bi";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function BoxSection() {
  return ( 
        <section className="boxSection">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <Row>
                    <Col md={12} lg={4}>
                        <div className="card" onClick="https://www.patreon.com/griffinjoshs">
                        <br></br>
                        <i className="boxIcon"><FaPatreon/></i>
                            <br></br>
                            <h3 className="boxHeader">Patreon</h3>
                            <br></br>
                            <p>For those who really support me, if you would like to get the best from me possible, join my Patreon Community. You will get free Merchandise as well as access to unposted and removed videos!</p>
                            <br></br>
                            <Button className="cardBtn" href="https://www.patreon.com/griffinjoshs">Learn More <BiRightArrowCircle/> </Button>                            <br></br>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                    <div className="card" onClick="https://anchor.fm/griffinjoshs">
                            <br></br>
                            <i className="boxIcon"><FaPodcast/></i>
                            <br></br>
                            <h3 className="boxHeader">Podcast </h3>
                            <br></br>
                            <p>Besides making TikToks I've began to love going live. So lets make it regular with a podcast. I will schedule episodes and be featuring some big name TikTokers and rappers!</p>
                            <br></br>
                            <Button className="cardBtn" href="https://anchor.fm/griffinjoshs">Learn More <BiRightArrowCircle/> </Button>
                            <br></br>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                    <div className="card" onClick="">
                            <br></br>
                            <i className="boxIcon"><FaLaughSquint/></i>
                            <br></br>
                            <h3 className="boxHeader">MemePage</h3>
                            <br></br>
                            <p>Since I can't make every funny video on the internet, let me bring my humor alive and start posting my favorite memes and videos! So if you got some funny memes, send them to me!</p>
                            <br></br>
                            <Button className="cardBtn" href="https://anchor.fm/griffinjoshs">Learn More <BiRightArrowCircle/> </Button>
                            <br></br>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>
  );
}

export default BoxSection;
