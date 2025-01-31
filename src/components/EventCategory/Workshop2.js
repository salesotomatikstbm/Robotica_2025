import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import newImage1 from '../../images/ws1.jpg';
import newImage2 from '../../images/ws2.jpg';
import newImage3 from '../../images/ws1.jpg';
import newImage4 from '../../images/ws2.jpg';
import newImage5 from '../../images/ws1.jpg';

import pdf from '../../images/Working model- Robotica 2025.pdf';

SwiperCore.use([Autoplay, Pagination, Navigation]); // Enable Swiper modules

const Workshop2 = () => {
    const ClickHandler = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Fragment>
            <main className="page_content about-page">
                <section className="about_section section_space bg-white">
                    <div className="container">
                        {/* <h1 className="heading_text text-center heading_block text-primary">Event Category</h1> */}
                        <div className="row align-items-center justify-content-center">
                            {/* Image Section */}
                            <div className="col-lg-6 mb-4 text-center order-1 order-lg-2">
                                <div className="team_cartoon_image">
                                    {/* Swiper slider starts here */}
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        navigation={false}
                                        className="mySwiper"
                                    >
                                       {[newImage2].map((img, index) => (
                                           <SwiperSlide key={index}>
                                                <img
                                                    src={img}
                                                    alt={`Working Model Image ${index + 1}`}
                                                    className="img-fluid rounded shadow"
                                                    style={{  objectFit: 'cover' }}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="about_content">
                                    <h2 className="heading_text text-primary">ELECTRIC VEHICLES WORKSHOP</h2>
                                    <p className="heading_description mb-3 text-dark text-justify" style={{ textAlign: "justify" }}>
                                    ELECTRIC VEHICLES WORKSHOP ORGANISED BY OTOMATIKS AND TOP ENGINEERS IN ASSOCIATION WITH MECHANICA’24 IIT MADRAS
                                    </p>
                                    <p className="heading_description mb-3 text-dark text-justify" style={{ textAlign: "justify" }}>
                                    Open For all Students (School, Engineering / Arts and Science), Staffs, Entrepreneurs, Incubators, Start Ups, Freelancers, Business Owners and Professionals.
                                    </p>
                                    <ul className="event-themes-list mb-4">
                                        <li><strong>Date:</strong> 8th February 2025</li>
                                        <li><strong>Time:</strong> 09:30 AM - 04:30 PM</li>
                                        <li><strong>Venue:</strong> VIT University, Chennai</li>
                                    
                                    </ul>
                                </div>

                                <div className="btns_group d-flex flex-column flex-md-row justify-content-center">
                                    <a
                                        href="https://pages.razorpay.com/pl_Pkj23JfDeDsLx8/view"
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

export default Workshop2;
