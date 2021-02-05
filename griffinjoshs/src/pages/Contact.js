import React from "react";
// import Header from "../components/Header";
// import Section from "../components/Section";
import 'bootstrap/dist/css/bootstrap.min.css';
import SmallFooter from "../components/Footer/SmallFooter";
import ContactHeader from "../components/ContactHeader/ContactHeader";
import ContactBody from "../components/ContactBody/ContactBody";

// import Navbar from "./components/Navbar";

function contact() {
  return (
    <div>
    <ContactHeader />
    <ContactBody />
    <br></br>
    <SmallFooter />
    </div>
  );
}

export default contact;