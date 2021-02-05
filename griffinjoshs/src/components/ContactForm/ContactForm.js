import React from "react";
import "../ContactForm/ContactForm.css";
import { FiSend } from "react-icons/fi";
// import { GrMail } from "react-icons/gr";

function ContactForm() {
    return (
        <div className="contact-section">
  <br></br>
  <br></br>
  <h1>Contact Me</h1>
    <div class="border"></div>
  <form className="contact-form" method="post" action="send" onsubmit="alert('sent')">
    <input type="text" name="firstName" id="firstName" className="contact-form-text" placeholder="Your First Name" />
    <input type="text" name="lastName" id="lastName" className="contact-form-text" placeholder="Your Last Name" />
    <input type="email" name="email" id="emailAddress" className="contact-form-text" placeholder="Your Email" />
    <input type="text" name="number" id="number" className="contact-form-text" placeholder="Your Phone Number" />
    <input type="text" name="subject" id="subject" className="contact-form-text" placeholder="Subject" />
    <textarea name="contact-form-text" className="contact-form-text" placeholder="Your Message" id="message" defaultValue={""}/>
    <br></br>
    <button type="submit" className="contact-form-btn">Send <FiSend/></button>
  </form>
  <br></br>
</div>

)
}

export default ContactForm;
