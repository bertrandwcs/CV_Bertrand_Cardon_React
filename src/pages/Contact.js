import React from "react";
import Navigation from "../components/Navigation";
import CopyToClipboard from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Ottignies</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0642844284">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié!");
                  }}
                >
                  0474682578
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="monmail@hotmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Mail copié!");
                  }}
                >
                  bertrandcardon@hotmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/bertrand-cardon-a6604032/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/bertrandwcs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>{" "}
            <a
              href="https://www.facebook.com/bertrand.lichtbuer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Facebook</h4>
              <i className="fab fa-facebook"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
