import React from "react";

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col">
          <ul className="footer-social">
            <li className="footer-social--item">
              <i className="fab fa-twitter" />
            </li>
            <li className="footer-social--item">
              <i className="fab fa-facebook" />
            </li>
            <li className="footer-social--item">
              <i className="fab fa-instagram" />
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <p>
            Moviematch. Made with{" "}
            <i className="fas fa-heart" style={{ color: "red" }} /> by Yeondam
            Park{" "}
            <span>
              <a
                href="https://github.com/yeondam88/moviematch"
                style={{ color: "rgba(0,0,0,0.8)" }}
              >
                <i className="fab fa-github" />
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
