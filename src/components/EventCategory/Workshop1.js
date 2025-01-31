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

import pdf from '../../images/Roborace- Robotica 2025.pdf';

SwiperCore.use([Autoplay, Pagination, Navigation]); // Enable Swiper modules

const Workshop1 = () => {
    const ClickHandler = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Fragment>
            <main className="page_content about-page">
                <section className="about_section section_space bg-white">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            {/* Image Slider Section */}
                            <div className="col-lg-6 text-center">
                                <div className="team_cartoon_image">
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
                                        {[newImage1].map((img, index) => (
                                            <SwiperSlide key={index}>
                                               <img
    src={img}
    alt={`Robo Race Image ${index + 1}`}
    className="img-fluid rounded shadow"
    style={{ objectFit: 'cover' }}
/>

                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                            {/* Text Content Section */}
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="about_content">
                                    <h2 className="heading_text text-primary">ETHICAL HACKING WORKSHOP</h2>
                                    <p className="heading_description mb-3 text-dark text-justify" style={{ textAlign: "justify" }}>
                                    ETHICAL HACKING WORKSHOP ORGANISED BY OTOMATIKS AND TOP ENGINEERS IN ASSOCIATION WITH MECHANICA’24 IIT MADRAS
                                    </p>
                                    <p className="heading_description mb-3 text-dark text-justify" style={{ textAlign: "justify" }}>
                                    Open For all Students (School, Engineering / Arts and Science), Staffs, Entrepreneurs, Incubators, Start Ups, Freelancers, Business Owners and Professionals.
                                    </p>
                                    <ul className="event-themes-list ">
                                        <li><strong>Date:</strong> 7th February 2025</li>
                                        <li><strong>Time:</strong> 09:30 AM - 04:30 PM</li>
                                        <li><strong>Venue:</strong> VIT University, Chennai</li>
                                       
                                    </ul>
                                    
                                    {/* Button Group */}
                                    <div className="btns_group d-flex flex-column flex-md-row justify-content-center">
                                    <a
                                        href="https://pages.razorpay.com/pl_PkixjbAlRWuRWp/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary w-45 w-md-auto text-center"
                                    >
                                        <span className="btn_label" data-text="Register Now">Enroll Now</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </a>
                                    <a href={pdf} className=" btn-secondary  w-md-auto text-center" target="_blank" rel="noopener noreferrer">
                                        <span className="btn_label" data-text="Learn Now">Know More</span>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    );
};

export default Workshop1;
