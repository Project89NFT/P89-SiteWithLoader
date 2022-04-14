import React from "react";
import { FaTwitter, FaInstagram, FaDiscord, FaTiktok } from "react-icons/fa";

import "./Footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footerContentContainer">
        <div className="socialIcons">
          <a href="https://twitter.com/Project89NFT" className="footerSocial">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" className="footerSocial">
            <FaInstagram />
          </a>
          <a href="https://discord.gg/G77cDU7SSn" className="footerSocial">
            <FaDiscord />
          </a>
          <a href="https://www.tiktok.com/@project89_nft" className="footerSocial">
            <FaTiktok />
          </a>
        </div>
        <p className="footerCopyText">
          &copy; {year} - All Rights Reserved - Project89
        </p>
      </div>
    </footer>
  );
};

export default Footer;
