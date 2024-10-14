import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLeaf, faBox, faReceipt, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import wImg1 from '../../images/about/1.png';
import wImg2 from '../../images/about/2.png';
import wImg3 from '../../images/about/3.png';
import pdf from '../../images/about.pdf';

const day1Policy = [
    { title: 'Working Model & Roborace', time: '9 AM - 1 PM', icon: faCheckCircle },
    { title: 'Panel Discussion', time: '2 PM - 4 PM', icon: faLeaf },
    { title: 'Prize Distribution', time: '4 PM - 6 PM', icon: faTrophy },
];

const day2Policy = [
    { title: 'In-School Competition', time: '9 AM - 4 PM', icon: faBox },
    { title: 'Prize Distribution', time: '4 PM - 6 PM', icon: faReceipt },
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
                                <h4 className="mb-3 text-secondary">Day 1 - 7th February 2025</h4>
                                <ul className="service_facilities_group unordered_list">
                                    {day1Policy.map((policy, index) => (
                                        <li key={index}>
                                            <strong className="iconbox_block layout_icon_left">
                                                <span className="iconbox_icon">
                                                    <FontAwesomeIcon icon={policy.icon} />
                                                </span>
                                                <span className="iconbox_content">
                                                    <strong className="iconbox_title mb-0">{policy.title}</strong> <br />
                                                    <strong className="iconbox_time mb-0">{policy.time}</strong>
                                                </span>
                                            </strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Day 2 Schedule */}
                            <div className="day_schedule" style={{ marginTop: '40px' }}>
                                <h4 className="mb-3 text-secondary">Day 2 - 8th of February 2025</h4>
                                <ul className="service_facilities_group unordered_list">
                                    {day2Policy.map((policy, index) => (
                                        <li key={index}>
                                            <strong className="iconbox_block layout_icon_left">
                                                <span className="iconbox_icon">
                                                    <FontAwesomeIcon icon={policy.icon} />
                                                </span>
                                                <span className="iconbox_content">
                                                    <strong className="iconbox_title mb-0">{policy.title}</strong> <br />
                                                    <strong className="iconbox_time mb-0">{policy.time}</strong>
                                                </span>
                                            </strong>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Button Section */}
                        <div className="btns_group d-flex flex-column flex-md-row justify-content-center">
                            <a
                                href="https://pages.razorpay.com/robotica25"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary w-45 w-md-auto text-center"
                            >
                                <span className="btn_label" data-text="Register Now">Enroll Now</span>
                                <span className="btn_icon">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>
                            </a>
                            <a
                                href={pdf}
                                className="btn-secondary w-md-auto text-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="btn_label" data-text="Learn Now">Know More</span>
                            </a>
                        </div>
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
                    .iconbox_time {
                        font-weight: bold;
                        display: block;
                    }
                    .iconbox_title {
                        margin-top: 5px;
                    }
                        .heading_block{
                        margin-top: -10%;
                        text-aline: center;
                        }
                    /* Remove bottom space on mobile */
                    .service_section {
                        padding-bottom: 0; /* Remove bottom padding */
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
