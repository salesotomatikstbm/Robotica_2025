import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLeaf, faBox, faReceipt, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import wImg1 from '../../images/about/1.png';
import wImg2 from '../../images/about/2.png';
import wImg3 from '../../images/about/3.png';
import pdf from '../../images/example.pdf';

// Policy data for Day 1 and Day 2 with Font Awesome icons
const day1Policy = [
    { title: '9 AM - 1 PM: Working Model & Roborace', icon: faCheckCircle },
    { title: '2 PM - 4 PM: Panel Discussion', icon: faLeaf },
    { title: '4 PM - 6 PM: Prize Distribution', icon: faTrophy },
];

const day2Policy = [
    { title: '9 AM - 4 PM: In-School Competition', icon: faBox },
    { title: '4 PM - 6 PM: Prize Distribution', icon: faReceipt },
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [wImg1, wImg2, wImg3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const ClickHandler = () => {
        window.scrollTo(0, 0);
    };

    return (
        <section className="service_section section_space bg-white">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="image_wrap">
                            <img src={images[currentIndex]} alt="Techco - About" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ps-lg-5">
                            <div className="heading_block">
                                <h2 className="heading_text mb-0 text-primary">About Robotica</h2>
                            </div>

                            {/* Day 1 Schedule */}
                            <div className="day_schedule">
                                <h4 className="mb-3 text-primary">Day 1 - 7th February 2025 </h4>
                                <ul className="service_facilities_group unordered_list">
                                    {day1Policy.map((policy, index) => (
                                        <li key={index}>
                                            <strong className="iconbox_block layout_icon_left">
                                                <span className="iconbox_icon">
                                                    <FontAwesomeIcon icon={policy.icon} />
                                                </span>
                                                <span className="iconbox_content">
                                                    <strong className="iconbox_title mb-0">{policy.title}</strong>
                                                </span>
                                            </strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Day 2 Schedule */}
                            <div className="day_schedule" style={{ marginTop: '40px' }}>
                                <h4 className="mb-3 text-primary">Day 2 - 8th of February 2025 </h4>
                                <ul className="service_facilities_group unordered_list">
                                    {day2Policy.map((policy, index) => (
                                        <li key={index}>
                                            <strong className="iconbox_block layout_icon_left">
                                                <span className="iconbox_icon">
                                                    <FontAwesomeIcon icon={policy.icon} />
                                                </span>
                                                <span className="iconbox_content">
                                                    <strong className="iconbox_title mb-0">{policy.title}</strong>
                                                </span>
                                            </strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Button Section */}
                        <ul className="btns_group unordered_list p-0 justify-content-center" style={{ marginTop: '60px' }}>
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

            {/* Mobile Styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .service_facilities_group {
                        display: flex;
                        flex-direction: column; /* Stack items vertically */
                        align-items: center; /* Center align items */
                        width: 100%; /* Full width */
                        padding: 0; /* Remove padding */
                    }
                    .day_schedule {
                        width: 100%; /* Full width */
                        margin: 0 auto; /* Center align */
                        padding: 10px; /* Add padding for better spacing */
                        border: 1px solid #ddd; /* Optional: Add border for separation */
                        border-radius: 5px; /* Optional: Add rounded corners */
                    }
                    .iconbox_block {
                        display: flex; /* Flexbox for icon and content */
                        align-items: center; /* Align items vertically */
                        margin-bottom: 10px; /* Space between items */
                    }
                    .iconbox_icon {
                        margin-right: 10px; /* Space between icon and text */
                    }
                    .iconbox_content {
                        text-align: left; /* Align text to the left */
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
