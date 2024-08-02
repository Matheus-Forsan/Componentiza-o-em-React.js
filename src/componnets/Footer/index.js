import React from "react"
import "./style.css"
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
  } from "react-icons/fa";

export function Footer (){
    return(
        <footer className="footer">
        <div className="social-links">
          <a href="#facebook">
            <FaFacebook /> Facebook
          </a>
          <a href="#twitter">
            <FaTwitter /> Twitter
          </a>
          <a href="#instagram">
            <FaInstagram /> Instagram
          </a>
        </div>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://github.com/ma-nobrega"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matheus Nobrega
          </a>
        </p>
      </footer>
    );
}
export default Footer;