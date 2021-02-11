import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/Footer.css";
import FooterIcons from "./FooterIcons";
// import eCommerceLink from '../Navbar'

function Footer() {
    return ( 
        <footer>
          <div className="container-fluid footer-top" id="fluid">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 segment-two" id="footerNavColumn">
                <h2 className="followHeader" id="Hfooter">Follow Me</h2>
                  <p id="footerP"></p>
                      <FooterIcons/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 segment-two" id="footerNavColumn">
                  <h2 id="Hfooter">Sponsors</h2>
                  <ul className="navbarFooter">
                    {/* ======= Navbar Links ======= */}
                    <li className="footerNavitem text-decoration-none">
                      <a href="https://www.mdacne.com/" className="nav-link footerNavLink">MD Acne</a>
                    </li>
                    <li className="footerNavitem text-decoration-none">
                      <a href="https://thecoldestwater.com/?ref=shop-griffinjoshs" className="nav-link footerNavLink">The Coldest Water</a>
                    </li>
                    <li className="footerNavitem text-decoration-none">
                      <a href="https://www.vanlinker.com/" className="nav-link footerNavLink">Vanlinker Sunglasses</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 segment-two" id="footerNavColumn">
                  <h2 id="Hfooter">Pages</h2>
                  <ul className="navbarFooter">
                    {/* ======= Navbar Links ======= */}
                    <li className="footerNavitem text-decoration-none">
                      <a href="/" className="nav-link footerNavLink">Home</a>
                    </li>
                    <li className="footerNavitem text-decoration-none">
                      <a href='https://griffinjoshs.bigcartel.com/' className="nav-link footerNavLink">Shop</a>
                    </li>
                    <li className="footerNavitem text-decoration-none">
                      <a href="/contact" className="nav-link footerNavLink">Contact</a>
                    </li>
                    <li className="footerNavitem text-decoration-none">
                      <a href="/about" className="nav-link footerNavLink">About Me</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 segment-two" id="footerNavColumn">
                  <h2 id="Hfooter">Subscribe</h2>
                  <p id="footerP">Become A Real One!</p>
                  <div className="btnContainer"> 
                    <div className="btnContainer">
                      <div className='form-container'>
                      <form method="POST" action="/subscribe" id="subForm">
                        <div id="input-container">
                          <input type="text" className="sub-form-text" name="emailInput" id="subInput" placeholder="E-mail" />
                          <button type="submit" id="submitSub" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Subscribe</button>
                        </div>    
                      </form>
                      </div>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Subscribe to the real ones club!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                                <input type="text" className="form-control" name="email" id="email" disabled />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Phone Number:</label>
                                <input type="text" className="form-control" name="phoneNumber" id="phoneNumber" />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">First Name:</label>
                                <input type="text" className="form-control" name="firstName" id="firstName" />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Last Name:</label>
                                <input type="text" className="form-control" name="lastName" id="lastName" />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" id="subscribe">Subscribe</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
            <br></br> 
            <br></br>
          </div>
          <p className="footer-bottom-text">All Rights Reserved by ©Griffin Joshs.2020</p>
        </footer>
      );
    }
export default Footer;