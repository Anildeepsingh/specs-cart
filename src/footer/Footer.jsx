import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_heading">
        <hr />
        <img
          src="https://specscart.co.uk/skin/frontend/rwd/default/img/logo_symbol.svg"
          alt=""
        />
        <hr />
      </div>
      <div className="footer_element_container">
        <div className="footer_container_div1">
          <h4>GLASSES</h4>
          <a href="glasses">Round Glasses</a>
          <a href="glasses">Wayfarer Glasses</a>
          <a href="glasses">Cat Eye Glasses</a>
          <a href="glasses"> Rectangular Glasses</a>
          <a href="glasses"> Rimless Glasses</a>
          <a href="glasses"> Verifocal Glasses</a>
          <a href="glasses"> Transition Glasses</a>
        </div>
        <div className="footer_container_div1">
          <h4>SUNGLASSES</h4>
          <a href="glasses">Aviator Glasses</a>
          <a href="glasses">Round Sunglasses</a>
          <a href="glasses">Cat Eye Sunglasses</a>
          <a href="glasses">Wayfarer Sunglasses</a>
          <a href="glasses">Designer SunGlasses</a>
          <a href="glasses">Polarised SunGlasses</a>
          <a href="glasses">Prescription SunGlasses</a>
        </div>
        <div className="footer_container_div1">
          <h4>HELP & FAQ</h4>
          <a href="glasses">Your Prescription</a>
          <a href="glasses">Digital Blue Glasses</a>
          <a href="glasses">Lenses & Coatings</a>
          <a href="glasses">Anti Reflecting Lenses</a>
          <a href="glasses">How To Order</a>
          <a href="glasses">Delivery Information</a>
          <a href="glasses">Free Return</a>
        </div>
        <div className="footer_container_div1">
          <h4>ABOUT US</h4>
          <a href="glasses">Our Story</a>
          <a href="glasses">Contact Us</a>
          <a href="glasses">Our Blog</a>
          <a href="glasses">Privacy Policy</a>
          <a href="glasses">Franchise</a>
        </div>
        <div className="footer_right_section">
          <div className="footer_right_element">
            <h4>SUBSCRIBE</h4>
            <h4>CONTACT US</h4>
          </div>
          <input
            type="text"
            placeholder="Sing up for our newsletter"
            className="footer_search"
          />
          <div className="footer_social_link">
            <a href="glasses">
              {" "}
              <h3>
                {" "}
                <FaFacebookF />
              </h3>
            </a>
            <a href="glasses">
              {" "}
              <h3>
                {" "}
                <BsTwitter />
              </h3>
            </a>
            <a href="glasses">
              {" "}
              <h3>
                {" "}
                <FaInstagram />
              </h3>
            </a>
            <a href="glasses">
              {" "}
              <h3>
                {" "}
                <FaLinkedinIn />
              </h3>
            </a>
            <a href="glasses">
              {" "}
              <h3>
                {" "}
                <ImYoutube2 />
              </h3>
            </a>
          </div>
        </div>
      </div>
      <hr />

      <div className="footer_bottom">
        <div>
          <p>
            Developed by HRM International Limited <BiCopyright /> 2018
            Specscart{" "}
          </p>
        </div>
        <div>
          <a href="glasses">Terms & Condition</a>
          <a href="glasses">| Privacy Policy |</a>
          <a href="glasses"> Site Map</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
