import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "@mui/material/Link";
import MyButton from "./button";
function Footer() {
  return (
    <div className="footer">
      <div className="line">
        <h1>DIZA FASHION</h1>
        <div className="group-info">
          <h5>New To DIZA</h5>
          <p>
            Subscribe to our newsletter to get updates on our latest designs and
            offers!
          </p>
          <div className="lin">
            <form className="lin">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input
                type="e-mail"
                placeholder="Enter E-mail Address"
                aria-label="E-mail"
              />
            </form>
            <MyButton
              backgroundColor="#f2a81d" //the color of the button
              border="2px solid #f2a81d" //color of border on hover
              color="#f2a81d" //color of text on hover
              text="Male" //text on button
            />
            <MyButton
              backgroundColor="#f2a81d" //the color of the button
              border="2px solid #f2a81d" //color of border on hover
              color="#f2a81d" //color of text on hover
              text="Female" //text on button
            />
          </div>
        </div>
      </div>
      <div className="line1">
        <p>
          copyright{" "}
          <Link color="inherit" href="https://Diza.com/">
            Diza Fashion
          </Link>{" "}
          2023
        </p>
        <div className="social">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
