import React, { Fragment } from 'react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import 'swiper/swiper.min.css';
import srImg1 from '../../images/workingmodel/event.jpg';

const Event = () => {
    return (
        <Fragment>
            <main className="page_content about-page">
                <section className="about_section section_space bg-white">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            {/* Image Section */}
                            <div className="col-lg-6 mb-4 text-center order-1 order-lg-2">
                                <div className="team_cartoon_image">
                                    <img
                                        src={srImg1}
                                        alt="Working Model"
                                        className="img-fluid rounded shadow"
                                        style={{
                                            width: '100%', // Adjust to fit within its container
                                            height: '100vh', // Maintain aspect ratio
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="about_content">
                                    <h2 className="heading_text text-primary">
                                        Join the Young Researchers Conclave 2025!
                                    </h2>
                                    <p
                                        className="heading_description mb-2 text-dark"
                                        style={{ textAlign: 'justify' }}
                                    >
                                        Become the Next Junior Scientist by participating in this
                                        exciting Inter-School Young Researchers Paper Presentation
                                        Conference, as part of the prestigious Robotica-25 event!
                                    </p>
                                    <p
                                        className="heading_description mb-2 text-dark"
                                        style={{ textAlign: 'justify' }}
                                    >
                                        Patrons
                                    </p>
                                    <ul className="event-themes-list mb-4">
                                        <li>
                                            <strong>Mrs. S Madhumathi, IAS</strong> Secretary, School
                                            Education Department, Tamil Nadu
                                        </li>
                                        <li>
                                            <strong>Prof. S Ponnusamy</strong> Chair Professor, IIT
                                            Madras
                                        </li>
                                        <li>
                                            <strong>Mr. S Sathish</strong> CEO & Founder, Otomatiks
                                        </li>
                                        <li>
                                            <strong>Dr. Saranya T Jaikumar</strong> Educational
                                            Psychologist
                                        </li>
                                        <li>
                                            <strong>Dr. Srimathy Kesan</strong> Founder & CEO, SpaceKidz
                                            India
                                        </li>
                                        <li>
                                            <strong>Dr. C Nirmala</strong> Founder, Junior Researchers’
                                            Learning Adventure (JRLA), Chennai
                                        </li>
                                    </ul>
                                    <ul className="event-themes-list mb-4">
                                        <li>
                                            <strong>Date:</strong> 7th February 2025
                                        </li>
                                        <li>
                                            <strong>Time:</strong> 1:30 PM to 4:00 PM
                                        </li>
                                        <li>
                                            <strong>Venue:</strong> VIT University, Chennai
                                        </li>
                                        <li>
                                            <strong>Last Date to Express Interest:</strong> 10th January
                                            2025
                                        </li>
                                        <li>
                                            <strong>Last Date for Paper/Poster Submission:</strong> 24th
                                            January 2025
                                        </li>
                                    </ul>
                                </div>

                                <div className="btns_group d-flex flex-column flex-md-row justify-content-center">
                                    <a
                                        href="https://pages.razorpay.com/robotica25"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary w-100 w-md-auto text-center"
                                    >
                                        <span
                                            className="btn_label"
                                            data-text="Register Now"
                                        >
                                            Enroll Now
                                        </span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Custom CSS for responsive alignment */}
                <style jsx>{`
                    @media (max-width: 768px) {
                        .btns_group .btn-primary {
                            margin-bottom: 16px;
                        }
                        .about_content h2 {
                            font-size: 1.5rem;
                        }
                    }
                    .team_cartoon_image img {
                        max-width: 100%; /* Ensures the image doesn't exceed its container */
                        border-radius: 12px; /* Rounded corners for better aesthetics */
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
                    }
                `}</style>
            </main>
        </Fragment>
    );
};

export default Event;
