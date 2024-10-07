import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import newImage1 from '../../images/roborace/1.png';
import newImage2 from '../../images/roborace/2.png';
import newImage3 from '../../images/roborace/3.png';
import newImage4 from '../../images/roborace/4.png';
import newImage5 from '../../images/roborace/5.png';

import pdf from '../../images/example.pdf';

SwiperCore.use([Autoplay, Pagination, Navigation]); // Enable Swiper modules

const RoboRace = () => {
    const ClickHandler = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Fragment>
            <main className="page_content about-page">
                <section className="about_section section_space bg-white">
                    <div className="container">
                     
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-5">
                                <div className="about_content">
                                    <h2 className="heading_text text-primary">Robo Race</h2>
                                    <p className="heading_description mb-2 text-dark text-justify">
                                    Brace yourself for an electrifying contest! In this dynamic race, teams will engineer and construct their own Robo Cars, skillfully navigating a meticulously designed track. Speed, strategic thinking, and collaboration will be paramount as you compete for the esteemed title of Robo Race champion!     </p>
                                    <ul className="event-themes-list mb-4">
                                        <li><strong>Date:</strong> 7th February 2025</li>
                                        <li><strong>Time:</strong> 09:00 AM - 01:00 PM</li>
                                        <li><strong>Venue:</strong> VIT University, Vellore</li>
                                        <li><strong>Participation Fees:</strong> ₹ 800 /- only</li>
                                    </ul>
                                </div>

                                {/* Updated Button Group for mobile responsiveness */}
                                <div className="btns_group d-flex flex-column flex-md-row justify-content-center gap-3">
                                    <Link onClick={ClickHandler} to="/" className="btn btn-primary w-100 w-md-auto text-center">
                                        <span className="btn_label" data-text="Register Now">Enroll Now</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                    <a href={pdf} className=" btn-secondary w-100 w-md-auto text-center" target="_blank" rel="noopener noreferrer">
                                        <span className="btn_label" data-text="Learn Now">Know More</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 mb-4 text-center">
                                <div className="team_cartoon_image">
                                    {/* Swiper slider starts here */}
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        className="mySwiper"
                                    >
                                        {[newImage1, newImage2, newImage3, newImage4, newImage5].map((img, index) => (
                                            <SwiperSlide key={index}>
                                                <img src={img} alt={`Robo Race Image ${index + 1}`} className="img-fluid" />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    );
};

export default RoboRace;
