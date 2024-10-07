import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-white py-3">
      <div className="container">
        {/* Flexbox row for horizontal alignment */}
        <div className="row text-center text-md-left">
          
          {/* Phone number on the left */}
          <div className="col-12 col-md-4 mb-2 d-flex justify-content-center justify-content-md-start">
            <p className="mb-0">
              <a href="tel:+919043209448" className="text-primary">+91-90432 09448</a>
            </p>
          </div>
          
          {/* Email centered */}
          <div className="col-12 col-md-4 mb-2 d-flex justify-content-center">
            <p className="mb-0">
              <a href="mailto:robotica25@otomatiks.in" className="text-primary">robotica25@otomatiks.in</a>
            </p>
          </div>
          
          {/* Copyright text on the right */}
          <div className="col-12 col-md-4 mb-2 d-flex justify-content-center justify-content-md-end text-dark">
            <p className="mb-0 text-primary">&copy; {new Date().getFullYear()} Otomatiks. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
