import React from "react";
import GetWidthook from "../GetWidthHook";

import bannerBgWeb from "../../../assets/images/WebBanner.png";
import bannerBgTablet from "../../../assets/images/TabletHeader.png";
import bannerBgMobile from "../../../assets/images/Phone.png";

import "./Banner.css";
const Banner = () => {
  const { width } = GetWidthook();
  return (
    <div className="bannerContainer" id="home">
      <div className="banner-content__container"></div>
      <div className="banner-img__container">
        <div className="bannerTitleContainer">
          <h2 className="banner__title">Welcome</h2>
        </div>
        {width < 700 ? (
          <img src={bannerBgMobile} className="banner__bg" alt="" />
        ) : width > 700 && width < 950 ? (
          <img src={bannerBgTablet} className="banner__bg" alt="" />
        ) : (
          <img src={bannerBgWeb} className="banner__bg" alt="" />
        )}
      </div>
    </div>
  );
};

export default Banner;
