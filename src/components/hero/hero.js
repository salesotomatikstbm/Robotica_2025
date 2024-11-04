import React from 'react';
import Slider from 'react-slick';
import shape1 from '../../images/hero/shape_image_1.webp';
import shape2 from '../../images/hero/shape_image_2.webp';
import shape3 from '../../images/hero/shape_image_3.webp';
import shape4 from '../../images/hero/shape_image_4.webp';
import placeholderLogo from '../../images/site_logo/logo.png'; // Main logo
import presentingLogo from '../../images/site_logo/otomatiks logo.png'; // Logo before the content

const Hero = (props) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <section
            className="software_company_hero_section xb-hidden bg-white mb-0"
            style={{ position: 'relative', paddingTop: '10px' }}
        >
            {/* Background Video Section */}
            <div className="background-video-wrapper bg-white">
                <video className="bg-video" autoPlay muted loop>
                    <source src="your-video-source.mp4" type="video/mp4" />
                </video>
                {/* Content with background video */}
                <div className="content-with-bg">
                    <div className="hero_top_logo_wrap" style={{ textAlign: 'center', marginBottom: '10px', zIndex: 9999 }}>
                        <img
                            src={presentingLogo}
                            alt="Presenting Logo"
                            style={{ width: '300px', height: 'auto', marginBottom: '5px' }}
                        />
                        <h2 style={{ marginTop: '0', fontSize: '16px' }}>
                            Proudly Presents
                        </h2>
                    </div>
                    <div className="hero_logo" style={{ textAlign: 'center', margin: '0 ' }}>
                    <img
    src={placeholderLogo}
    alt="Main Logo"
    className="main-logo img-fluid d-block mx-auto mb-3"
    style={{ width: '65%', maxWidth: '600px', height: 'auto' }}
/>

                        <h2 style={{ marginTop: '0', fontSize: '24px' }}>
                            Unleashing Innovation in the World of Robotics
                        </h2>
                        <h2 style={{ marginTop: '0', fontSize: '16px' }}>
                            VIT University, Chennai || 7th & 8th of February 2025
                        </h2>
                    </div>
                </div>
            </div>

            {/* Rest of the section */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="content_wrap" style={{ marginBottom: '30px', marginTop: '50px' }}>
                            <h2 className="" style={{ marginBottom: '15px' }}>
                                Robotica <mark>2025</mark><br /> Celebrating Innovation
                            </h2>
                            <p className="text-dark text-justify" style={{ marginBottom: '20px' }}>
                                Robotica’25 ain’t just a competition; it’s a celebration of innovation and creativity in the realm of robotics. Building on the success of our previous competitions, where we welcomed over 2500+ participants from 80+ schools across the state, this year aims to surpass all expectations.
                            </p>
                            <div className="container text-center" style={{ marginBottom: '15px' }}>
                                <div className="row justify-content-start">
                                    <div className="col-md-4">
                                        <div style={{
                                            backgroundColor: 'white',
                                            borderRadius: '8px',
                                            padding: '15px',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            height: '100%',
                                        }}>
                                            <i className="fa-solid fa-user text-primary" style={{ fontSize: '30px', marginBottom: '10px' }}></i>
                                            <h5 className='text-primary'>10+ Chief Guests</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{
                                            backgroundColor: 'white',
                                            borderRadius: '8px',
                                            padding: '15px',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            height: '100%',
                                        }}>
                                            <i className="fa-solid fa-users text-primary" style={{ fontSize: '30px', marginBottom: '10px' }}></i>
                                            <h5 className='text-primary'>80+ Schools Participants</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div style={{
                                            backgroundColor: 'white',
                                            borderRadius: '8px',
                                            padding: '15px',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            height: '100%',
                                        }}>
                                            <i className="fa-solid fa-trophy text-primary" style={{ fontSize: '30px', marginBottom: '10px' }}></i>
                                            <h5 className='text-primary'>2500+ Participants</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ul className="btns_group unordered_list p-0 justify-content-start" style={{ marginTop: '50px' }}>
                                <li>
                                    <a
                                        className="btn text-white"
                                        href="https://pages.razorpay.com/robotica25"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ backgroundColor: '', }}
                                    >
                                        <span className="btn_label" data-text="Enroll Now!">Register Today!</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="hotline_block" href="tel:+91 90432 09448">
                                        <span className="hotline_icon bg-primary">
                                            <i className="fa-solid fa-phone-volume "></i>
                                        </span>
                                        <span className="hotline_content text-primary">
                                            <small className="text-primary">CONTACT US </small>
                                            <strong className="text-dark mb">+91-90432 09448</strong>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="video_wrap" style={{ marginTop: '0px' }}>
                            <Slider {...sliderSettings}>
                                <div>
                                    <iframe
                                        width="100%"
                                        height="350"
                                        src="https://www.youtube.com/embed/KcjSdEJ0CAA"
                                        title="YouTube Video 1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ borderRadius: '8px' }}
                                    ></iframe>
                                </div>
                                <div>
                                    <iframe
                                        width="100%"
                                        height="350"
                                        src="https://www.youtube.com/embed/0G-QfbasgEw"
                                        title="YouTube Video 2"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ borderRadius: '8px' }}
                                    ></iframe>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape_image_1" style={{ marginTop: '220px' }}>
                <img src={shape1} alt="Engine" />
            </div>
            <div className="shape_image_2" style={{ marginBottom: '20px' }}>
                <img src={shape2} alt="Engine" />
            </div>
            <div className="shape_image_3" style={{ marginTop: '220px' }}>
                <img src={shape3} alt="Engine" />
            </div>
            <div className="shape_image_4" style={{ marginBottom: '20px' }}>
                <img src={shape4} alt="Engine" />
            </div>

            {/* Custom styles for mobile view */}
            <style jsx>{`
                .background-video-wrapper {
                    position: relative;
                    overflow: hidden;
                }
                .bg-video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                }
                .content-with-bg {
                    position: relative;
                    z-index: 2;
                }
                .content_with_bg {
                    padding-left: 10px !important;
                    z-index: 9999;
                }
                .main-logo {
                    width: 600px;
                    height: 120px;
                }
                @media (max-width: 767px) {
                    .main-logo {
                        width: 250px;
                        height: auto;
                    }
                    h2 {
                        font-size: 4vw; /* Dynamically scale heading text */
                    }
                    .video_wrap iframe {
                        height: 200px; /* Adjust the video height for mobile */
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
