import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import specscart from "../asset/specscart.png";

import Group2964 from "../asset/Group2964.png";
import Group2966 from "../asset/Group2966.png";
import Group2965 from "../asset/Group2965.png";
import Group2967 from "../asset/Group2967.png";
import Cart from "../asset/Cart.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <div className="navbar_left">
          <div>
            <a href="return" className="navbar_left_compo">
              Free Returns
            </a>
            <a href="tryathome" className="navbar_left_compo">
              {" "}
              | Try At Home |
            </a>
            <a href="dispatch" className="navbar_left_compo">
              24 Hr Dispatch
            </a>
          </div>
          <div>
            <Link to="/glasses" className="navbar_left_component">
              Glasses
            </Link>
            <Link to="sunglasses" className="navbar_left_component">
              SunGlasses
            </Link>
            <Link to="eyetest" className="navbar_left_component">
              Eye-Test
            </Link>
            <Link to="blogs" className="navbar_left_component">
              Blogs
            </Link>
          </div>
        </div>
        <div>
          <Link to="/">
            <img src={specscart} alt="logo" className="specsCart_logo" />
          </Link>
        </div>
        <div className="navbar_right">
          <div>
            <a href="contact" className="navbar_right_compo">
              +441613125767
            </a>
            <a href="help" className="navbar_right_compo">
              | Help |
            </a>
            <a href="login" className="navbar_right_compo">
              Log In
            </a>
          </div>
          <div>
            <a href="search" className="navbar_right_component">
              <img src={Group2964} alt="group" />
            </a>
            <a href="group" className="navbar_right_component">
              <img src={Group2966} alt="group" />
            </a>
            <a href="fav" className="navbar_right_component">
              <img src={Group2965} alt="group" />
            </a>
            <a href="group" className="navbar_right_component">
              <img src={Group2967} alt="group" />
            </a>
            <a href="cart" className="navbar_right_component">
              <img src={Cart} alt="cart" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
