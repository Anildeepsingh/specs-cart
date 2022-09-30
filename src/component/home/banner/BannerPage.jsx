import React from "react";
import "./BannerPage.css";
import Image35 from "../../../asset/Image35.png";
import Image36 from "../../../asset/Image36.png";
import Image39 from "../../../asset/Image39.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const BannerPage = () => {
  return (
    <div className="Banner_container">
      <div className="banner_section1">
        <p>Home Trial Cart 2.0</p>
        <h1>It's An Experience!</h1>
        <h1>Four Frames. Three Lenses. 1Laser</h1>
        <div>
          <button className="tryNow_btn">Try Now</button>
          <button className="watch_icon_btn">
            <BsFillPlayCircleFill className="watch_icon" />
          </button>
          <button className="watchNow_btn"> Watch Whats New!</button>
        </div>
      </div>
      <div className="banner_images">
        <img src={Image35} alt="img" className="banner_img1" />
        <img src={Image39} alt="img" className="banner_img2" />
        <img src={Image36} alt="img" className="banner_img3" />
      </div>
    </div>
  );
};

export default BannerPage;
