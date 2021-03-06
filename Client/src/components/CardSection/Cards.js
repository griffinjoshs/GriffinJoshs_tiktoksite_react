import React from "react";
import { Button } from "react-bootstrap";
import { BiRightArrowCircle } from "react-icons/bi";
import './Cards.css'

const Card = (props) => {
    const { Icon, Link, Header, Paragraph, ButtonText } = props
  return (
    <div>
      <div className="card" onClick="https://www.patreon.com/griffinjoshs">
        <br></br>
        <i className="boxIcon">{Icon}</i>
        <br></br>
        <h3 className="boxHeader">{Header}</h3>
        <br></br>
        <p>{Paragraph}</p>
        <br></br>
        <Button className="cardBtn" href="https://www.patreon.com/griffinjoshs">
          {ButtonText} <BiRightArrowCircle />{" "}
        </Button>{" "}
        <br></br>
      </div>
    </div>
  );
};

export default Card;
