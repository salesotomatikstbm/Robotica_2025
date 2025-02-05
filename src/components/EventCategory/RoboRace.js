import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import newImage1 from '../../images/roborace/1.png';
import newImage2 from '../../images/roborace/2.png';
import newImage3 from '../../images/roborace/3.png';
import newImage4 from '../../images/roborace/4.png';
import newImage5 from '../../images/roborace/5.png';

import pdf from '../../images/Roborace- Robotica 2025.pdf';

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
                                        {[newImage1, newImage2, newImage3, newImage4, newImage5].map((img, index) => (
                                            <SwiperSlide key={index}>
                                                <img
                                                    src={img}
                                                    alt={`Robo Race Image ${index + 1}`}
                                                    className="img-fluid rounded shadow"
                                                    style={{ width: '100%', height: '560px', objectFit: 'cover' }} // Set equal width and height
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                            {/* Text Content Section */}
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <div className="about_content">
                                    <h2 className="heading_text text-primary">ROBO RACE</h2>
                                    <p className="heading_description mb-3 text-dark text-justify" style={{ textAlign: "justify" }}>
                                        Brace yourself for an electrifying contest! In this dynamic race, teams will engineer and construct their own Robo Cars, skillfully navigating a meticulously designed track. Speed, strategic thinking, and collaboration will be paramount as you compete for the esteemed title of Robo Race champion!
                                    </p>
                                    <ul className="event-themes-list ">
                                        <li><strong>Date:</strong> 7th February 2025</li>
                                        <li><strong>Time:</strong> 09:00 AM - 01:00 PM</li>
                                        <li><strong>Venue:</strong> VIT University, Chennai</li>
                                        <li><strong>Participation Fees:</strong> ₹ 800 /- only.</li>
                                    </ul>
                                    
                                    {/* Button Group */}
                                    <div className="btns_group d-flex flex-column flex-md-row justify-content-center">
                                    <a 
                                        target="_blank"
                                        rel="noopener noreferrer" className="btn btn-primary w-45 w-md-auto text-center">
                                        <span className="btn_label" data-text="Registration Closed">Registration Closed</span>
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

export default RoboRace;
