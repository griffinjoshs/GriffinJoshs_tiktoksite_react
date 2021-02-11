import React, { useState } from "react";
import "./ContactForm.css";
import { FiSend } from "react-icons/fi";
import ButtonComp from "../Button/Button";
// import { GrMail } from "react-icons/gr";

function ContactForm() {
        const [data, setData] = useState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      
        const [thanks, setThanks] = useState({
          active: false,
          message: "",
        });
      
        const changeHandler = (event) => {
          setData({
            ...data,
            [event.target.name]: event.target.value,
          });
          console.log("********DATA INSIDE CHANGE HANDLER *******");
          console.log(data);
        };
        console.log(data);
      
        const submitHandler = (event) => {
          event.preventDefault();
          console.log("data object");
          // axios.post('http://localhost:8000/api/contact/', data)
          // .then()
          // .catch();
          console.log(data);
          setData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setThanks({
            active: true,
            message: "Thank you for contacting me!",
          });
        };
      
        return (
          <div className="contact-section">
  <br></br>
  <br></br>
  <h1>Contact Me</h1>
    <div class="border"></div>
            {thanks.active ? (
              <div>{thanks.message}</div>
            ) : (
              <div className='contact-form' onSubmit={submitHandler}>
                {/* <div className="form-group container p-5" id='inputContainer'> */}
                  <input
                    className="form-control"
                    type="text"
                    name="firstName"
                    id="firstName" 
                    className="contact-form-text"
                    placeholder="First Name"
                    onChange={changeHandler}
                    value={data.firstName}
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    id="lastName" 
                    className="contact-form-text"
                    placeholder="Last Name"
                    onChange={changeHandler}
                    value={data.lastName}
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    id="emailAddress" 
                    className="contact-form-text"
                    placeholder="Email"
                    onChange={changeHandler}
                    value={data.email}
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    id="number" className="contact-form-text"
                    placeholder="Phone Number"
                    onChange={changeHandler}
                    value={data.phone}
                  />
                  <input
                    className="form-control"
                    type="text"
                    name="subject"
                    id="subject" className="contact-form-text"
                    placeholder="Subject"
                    onChange={changeHandler}
                    value={data.subject}
                  />
                  <textarea
                    className="form-control"
                    type="text"
                    name="message"
                    className="contact-form-text"
                    id="message"
                    placeholder="Message"
                    onChange={changeHandler}
                    value={data.message}
                  />
                  <ButtonComp 
    type='submit'
    className='btns'
    buttonStyle='btn--primary'
    buttonSize='btn--sortawide'>Send <FiSend/></ButtonComp>
                </div>
              // </div>
            )}
          </div>

)
}

export default ContactForm;
