import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import pdf from '../../images/about.pdf'; // Correct the path to your actual PDF

const OfferCountdown = () => {
  const targetDate = new Date('2025-02-07T00:00:00'); // Target Date

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer); // Clear timer on component unmount
  }, []);

  const ClickHandler = () => {
    // Add your functionality here for Enroll Now button
  };

  return (
    <div className="section_space bg-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 heading_block">
            <h2 className="heading_text mb-0 text-primary">Registration Ends In</h2>
          </div>

          {/* Mobile View: One row for countdown items */}
          <div className="d-md-none">
            {/* Mobile View: Two rows for countdown items */}
            <div className="row">
              <div className="col-6" data-aos="fade-left" data-aos-duration="500">
                <div className="p-3 rounded shadow">
                  <h2>{timeLeft.days}</h2>
                  <p>Days</p>
                </div>
              </div>
              <div className="col-6" data-aos="fade-right" data-aos-duration="600">
                <div className="p-3 rounded shadow">
                  <h2>{timeLeft.hours}</h2>
                  <p>Hours</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6" data-aos="fade-left" data-aos-duration="700">
                <div className="p-3 rounded shadow">
                  <h2>{timeLeft.minutes}</h2>
                  <p>Minutes</p>
                </div>
              </div>
              <div className="col-6" data-aos="fade-right" data-aos-duration="800">
                <div className="p-3 rounded shadow">
                  <h2>{timeLeft.seconds}</h2>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
          </div>


          {/* Desktop View: Four columns for countdown items */}
          <div className="d-none d-md-flex">
            <div className="col-md-3" data-aos="fade-left" data-aos-duration="500">
              <div className="p-3 rounded shadow">
                <h2>{timeLeft.days}</h2>
                <p>Days</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-right" data-aos-duration="600">
              <div className="p-3 rounded shadow">
                <h2>{timeLeft.hours}</h2>
                <p>Hours</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-left" data-aos-duration="700">
              <div className="p-3 rounded shadow">
                <h2>{timeLeft.minutes}</h2>
                <p>Minutes</p>
              </div>
            </div>
            <div className="col-md-3" data-aos="fade-right" data-aos-duration="800">
              <div className="p-3 rounded shadow">
                <h2>{timeLeft.seconds}</h2>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add buttons below the countdown timer */}
        <div className="row justify-content-center" style={{ marginTop: '50px' }}>
          <div className="col-auto">
            <ul className="btns_group unordered_list p-0 d-flex flex-column flex-md-row justify-content-center gap-3">
              <li>
                <a
                  href="https://pages.razorpay.com/robotica25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <span className="btn_label" data-text="Register Now">Enroll Now</span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </span>
                </a>

              </li>
              <li>
                                <a href={pdf} className="" style={{ display: 'block', textAlign: 'center' }} target="_blank" rel="noopener noreferrer">
                                    <span className="btn_label" data-text="Learn Now">Know More</span>
                                    <span className="btn_icon"></span>
                                </a>
                            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCountdown;
