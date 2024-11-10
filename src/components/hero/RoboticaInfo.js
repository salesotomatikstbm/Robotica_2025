import React from 'react';

const RoboticaInfo = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          
          {/* Right Content - Statistics */}
          <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
          <div className="row text-center">
              {/* First Stat Box */}
              <div className="col-md-4 mb-3">
                <div className="p-4  text-white rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center" style={{
                                    backgroundColor: '#066aab',
                                   
                                }} >
                  <i className="fa-solid fa-user mb-2" style={{ fontSize: '40px' }}></i>
                  <h5 className="mb-1 font-weight-bold text-white">10+</h5>
                  <p className="small text-uppercase mb-0">Chief Guests</p>
                </div>
              </div>
              
              {/* Second Stat Box */}
              <div className="col-md-4 mb-3">
                <div className="p-4 bg-secondary text-white rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                  <i className="fa-solid fa-users mb-2" style={{ fontSize: '40px' }}></i>
                  <h5 className="mb-1 font-weight-bold text-white">80+</h5>
                  <p className="small text-uppercase mb-0">Schools</p>
                </div>
              </div>
              
              {/* Third Stat Box */}
              <div className="col-md-4 mb-3">
                <div className="p-4 text-white rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center" style={{
                                    backgroundColor: '#066aab',
                                   
                                }} >
                  <i className="fa-solid fa-trophy mb-2" style={{ fontSize: '40px' }}></i>
                  <h5 className="mb-1 font-weight-bold text-white">2500+</h5>
                  <p className="small text-uppercase mb-0">Participants</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Content - Event Details */}
          <div className="col-lg-6 text-lg-left text-center order-2 order-lg-1">
            <h2 className="display-4 text-dark font-weight-bold mb-3">
              Robotica 2025
            </h2>
            <h3 className="text-#066aab mb-4">
              Celebrating Innovation in Robotics
            </h3>
            <p className="text-muted lead">
              Robotica’25 isn’t just a competition—it’s an innovation festival, bringing together over 2500 participants from 80+ schools! Join us to create, compete, and be inspired.
            </p>


            <a href="tel:+919043209448" className="btn btn-lg mt-2 text-white" style={{
            backgroundColor: '#066aab',
            padding: '25px',
            borderRadius: '25px',
            fontSize: '18px',
        }}>
              <i className="fa-solid fa-phone-volume py-10 text-white"></i>Contact Us: +91-90432 09448
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticaInfo;
