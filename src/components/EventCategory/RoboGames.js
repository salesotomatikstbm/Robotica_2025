import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import srImg1 from '../../images/RoboGame.jpg';
import pdf from '../../images/Working model- Robotica 2025.pdf';

SwiperCore.use([Autoplay, Pagination, Navigation]); // Enable Swiper modules

const RoboGames = () => {
    const ClickHandler = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Fragment>
            <main className="page_content about-page">
                <section className="about_section section_space bg-white">
                    <div className="container">
                        <h1 className="heading_text text-center heading_block text-primary">Event Category</h1>
                        <div className="row align-items-center justify-content-center">
                            {/* Image Section */}
                            <div className="col-lg-6 mb-4 text-center order-1 order-lg-2">
                                <div className="team_cartoon_image">
                                    {/* Single Image Display */}
                                    <img
                                        src={srImg1}
                                        alt="Robo Games Main Image"
                                        className="img-fluid rounded shadow"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="about_content">
                                    <h2 className="heading_text text-primary">ROBO GAMES</h2>
                                    <p className="heading_description mb-2 text-dark text-justify" style={{ textAlign: 'justify' }}>
                                        Step into the world of Robo Games! Dive into an exhilarating showcase of creativity, skill, and innovation. 
                                        Participants will face exciting challenges that put their engineering and problem-solving abilities to the test. 
                                       
                                    </p>
                                    <ul className="event-themes-list mb-4">
                                        <li><strong>Date:</strong> 7th & 8th February 2025</li>
                                       
                                        <li><strong>Venue:</strong> VIT University, Chennai</li>

                                        <li><strong>3 Games</strong> At Just ₹ 99 /- only</li>
                                        <li><strong>5 Games</strong> At Just ₹ 199 /- only</li>
                                        <li><strong>10 Games</strong> At Just ₹ 299 /- only</li>
                                        <li><strong>Exciting Discounts For </strong>Groups, Families</li>
                                    </ul>
                                </div>

                                <div className="btns_group d-flex flex-column flex-md-row justify-content-center">
                                    <a
                                        href="https://pages.razorpay.com/pl_PmmnTG497Fepb4/view"
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
                </section>

                {/* Custom CSS to adjust layout */}
                <style jsx>{`
                    @media (max-width: 768px) {
                        .btns_group .btn-secondary {
                            margin-bottom: 0 !important; /* Remove bottom margin for mobile view */
                        }
                    }
                `}</style>
            </main>
        </Fragment>
    );
};

export default RoboGames;
