import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import srImg1 from '../../images/RoboSumo/1.png';
import srImg2 from '../../images/RoboSumo/2.png';
import srImg3 from '../../images/RoboSumo/3.png';

import pdf from '../../images/Roborace- Robotica 2025.pdf';

SwiperCore.use([Autoplay, Pagination, Navigation]); // Enable Swiper modules

const RoboSumo1 = () => {
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
                                        {[srImg1, srImg2, srImg3].map((img, index) => (
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
                                    <h2 className="heading_text text-primary">ROBO SUMO</h2>
                                    <p className="heading_description mb-2 text-dark" style={{ textAlign: "justify" }}>
                                        In this thrilling event, teams will design and build their own Sumo Robots to compete in an intense battle of strength, strategy, and skill. The objective is simple yet challenging: outwit, outmaneuver, and push your opponent’s robot out of the ring. Harness the power of innovation, teamwork, and tactical thinking as you strive to become the ultimate Robo Sumo Champion!
                                    </p>
                                    <ul className="event-themes-list mb-4">
                                        <li><strong>Date:</strong> 7th February 2025</li>
                                        <li><strong>Time:</strong> 09:00 AM - 01:00 PM</li>
                                        <li><strong>Venue:</strong> VIT University, Chennai</li>
                                        <li><strong>Participation Fees:</strong> ₹ 800 /- only</li>
                                    </ul>
                                
                                    
                                    {/* Button Group */}
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

export default RoboSumo1;
