import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col col-6">
        <div className="row">
          <div className="col mb-2 text-start">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 text-start ">
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" className="text-white">Audio and Subtitles</a>
                </p>
                <p>
                  <a href="#" className="text-white">Media Center</a>
                </p>
                <p>
                  <a href="#" className="text-white">Privacy</a>
                </p>
                <p>
                  <a href="#" className="text-white">Contact us</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" className="text-white">Audio Description</a>
                </p>
                <p>
                  <a href="#" className="text-white">Investor Relations</a>
                </p>
                <p>
                  <a href="#" className="text-white">Legal Notices</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" className="text-white">Help Center</a>
                </p>
                <p>
                  <a href="#" className="text-white">Jobs</a>
                </p>
                <p>
                  <a href="#" className="text-white">Cookie Preferences</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col footer-links">
                <p>
                  <a href="#" className="text-white">Gift Cards</a>
                </p>
                <p>
                  <a href="#" className="text-white">Terms of Use</a>
                </p>
                <p>
                  <a href="#" className="text-white">Corporate Information</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2">
            <button type="button" className="btn btn-sm footer-button rounded-0 mt-3">
              Service Code
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2 mt-2 copyright">
            © 1997-2023 Netflix, Inc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
