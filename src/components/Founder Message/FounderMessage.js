import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Founder from '../../images/Founder.png'; 
import BackgroundVideo from '../../images/Founderbg.mp4'; 

const FounderMessage = () => {
  return (
    <div>
      <div
        className="container my-5 position-relative" 
        style={{
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute w-100 h-100"
          style={{
            objectFit: "cover",
            top: 0,
            left: 0,
            borderRadius: "15px", 
            zIndex: -1, 
          }}
        >
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="row align-items-center">
          {/* Founder Message */}
          <div className="col-12 col-md-8 order-2 order-md-1 mt-4 mt-md-0">
            <div
              className="p-3 p-md-4"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)", // Light background with transparency
                borderRadius: "10px",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="font-weight-bold text-dark mb-3 mb-md-4">
                Welcome to <span style={{ color: "#3b5998" }}>Robotica-25</span>!
              </h3>
              <p className="text-muted mb-2 mb-md-3">
                To our extraordinary participants, esteemed parents, and forward-thinking school leaders—Robotica-25 is not just a stage for competition, it’s a platform for shaping the future. Students, you are the pioneers of tomorrow, redefining what’s possible through innovation.
              </p>
              <p className="text-muted mb-2 mb-md-3">
                Parents, your belief and support are the foundation upon which great things are built. And to the visionary school leaders, your commitment to nurturing talent paves the way for breakthroughs that will change the world.
              </p>
              <p className="text-secondary font-italic mt-2">
                Let’s lead the future, together!
              </p>
              <h5 className="font-weight-bold mt-3 text-dark">Sathish S</h5>
              <p className="text-muted">Founder & CEO, Otomatiks</p>
            </div>
          </div>

          {/* Founder Image */}
          <div className="col-12 col-md-4 text-center order-1 order-md-2">
            <img
              src={Founder}
              alt="Sathish S, Founder & CEO"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "250px", // Smaller size for mobile
                height: "250px", // Maintain aspect ratio
                objectFit: "cover",
                border: "5px solid white",
                marginBottom: "20px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 15px; // Reduce padding for mobile view
          }
          .row {
            flex-direction: column-reverse; // Stack image above text on mobile
          }
          .text-center {
            text-align: center; // Center align on mobile
          }
        }
      `}</style>
    </div>
  );
};

export default FounderMessage;
