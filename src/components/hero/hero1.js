import React from 'react';
import Slider from 'react-slick';

import placeholderLogo from '../../images/site_logo/logo.png'; // Main logo
import presentingLogo from '../../images/site_logo/otomatiks logo.png'; // Logo before the content

const Hero1 = () => {
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
            className="hero-section text-white"
            style={{
                backgroundImage: 'url("https://path_to_your_hero_background_image.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <div className="container position-relative" style={{
                                    backgroundColor: 'white',
                                   
                                }}>
                {/* Hero Content */}
                <div className="row align-items-center flex-column flex-lg-row">
                    {/* Left Side - Logo and Information */}
                    <div className="col-lg-6 text-center text-lg-left">
                        <div className="hero-logo-wrap mb-4">
                            <img
                                src={presentingLogo}
                                alt="Presenting Logo"
                                style={{ width: '200px', marginBottom: '15px' }}
                            />
                            <h2 className="font-weight-bold mb-2">Proudly Presents</h2>
                        </div>
                        <div className="hero-main-logo-wrap">
                            <img
                                src={placeholderLogo}
                                alt="Main Logo"
                                className="main-logo img-fluid mb-4"
                                style={{ width: '80%', maxWidth: '500px', height: 'auto' }}
                            />
                            <h3 className="font-weight-light">Unleashing Innovation in the World of Robotics</h3>
                            <p className="font-size-lg">
                                VIT University, Chennai || 7th & 8th of February 2025
                            </p>
                        </div>
                        <div className="hero-cta mt-0">
    <a
        href="https://pages.razorpay.com/robotica25"
        className="btn btn-light btn-lg text-white font-weight-bold"
        target="_blank" 
        rel="noopener noreferrer"
        style={{
            backgroundColor: '#066aab',
            color: '#003366',
            padding: '25px',
            borderRadius: '25px',
            fontSize: '18px',
        }}
    >
        Register Today!
    </a>
</div>

                    </div>

                    {/* Right Side - Video Slider */}
                    <div className="col-lg-6">
                        <div className="video-slider">
                            <Slider {...sliderSettings}>
                                <div>
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://www.youtube.com/embed/KcjSdEJ0CAA"
                                        title="YouTube Video 1"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ borderRadius: '12px' }}
                                    ></iframe>
                                </div>
                                <div>
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://www.youtube.com/embed/0G-QfbasgEw"
                                        title="YouTube Video 2"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ borderRadius: '12px' }}
                                    ></iframe>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay Style for Hero Section */}
            <style jsx>{`
                .hero-section {
                    position: relative;
                    color: white;
                    background-size: cover;
                    background-position: center;
                }
                .hero-logo-wrap h2 {
                    font-size: 1.5rem;
                }
                .hero-main-logo-wrap h3 {
                    font-size: 2.5rem;
                    font-weight: lighter;
                }
                .hero-cta a:hover {
                    background-color: #003366;
                    color: white;
                }
                .video-slider iframe {
                    border-radius: 12px;
                }
                .main-logo {
                    width: 70%;
                    max-width: 500px;
                    margin-bottom: 20px;
                }

                @media (max-width: 767px) {
                    .main-logo {
                        width: 80%;
                    }
                    .hero-logo-wrap img {
                        width: 150px;
                    }
                    .hero-main-logo-wrap h3 {
                        font-size: 2rem;
                    }
                    .hero-cta a {
                        font-size: 16px;
                    }
                    .video-slider iframe {
                        height: 250px;
                    }
                    .row {
                        display: flex;
                        flex-direction: column; /* Ensure the order on mobile is image first, video second */
                    }
                    .col-lg-6 {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero1;
