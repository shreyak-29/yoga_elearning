import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 YogaBliss E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Shreya Riddhi Khushi</a>
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/IndianYogaAssociation.IYA/">
            <AiFillFacebook />
          </a>
          <a href="https://x.com/yogaatiya?lang=en&mx=2">
            <AiFillTwitterSquare />
          </a>
          <a href="https://www.instagram.com/indianyogaassociation.iya/?hl=en">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
