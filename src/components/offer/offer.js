import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import sImg2 from '../../images/Offer/1.png';
import sImg3 from '../../images/Offer/2.png';
import sImg4 from '../../images/Offer/3.png';
import pdf from '../../images/about.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offer = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // Define your services array
    const services = [
        {
            id: '1',
            sImg: sImg2,
            title: 'Trophy',
            slug: 'Trophy',
            col: 'col-lg-4 col-md-6 col-sm-12', // Bootstrap classes for responsive columns
        },
        {
            id: '2',
            sImg: sImg3,
            title: 'Medal',
            slug: 'Medal',
            col: 'col-lg-4 col-md-6 col-sm-12',
        },
        {
            id: '3',
            sImg: sImg4,
            title: 'Certificate',
            slug: 'Certificate',
            col: 'col-lg-4 col-md-6 col-sm-12',
        },
    ];

    useEffect(() => {
        AOS.init(); // Initialize AOS animations
    }, []);

    return (
        <section className="section_space bg-white">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="text-primary">What You Get</h2>
                </div>

                <div className="row">
                    {services.map((service, index) => (
                        <div
                            className={`${service.col} mb-4`}
                            key={service.id}
                            data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                            data-aos-duration="500"
                        >
                            {service.title && (
                                <div className="text-center">
                                    <div className="mb-3">
                                        <img
                                            src={service.sImg}
                                            alt={service.title}
                                            className="img-fluid" // Makes the image responsive
                                            style={{ maxWidth: '150px' }} // Limit image width
                                        />
                                    </div>
                                    <h3>
                                        <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="text-dark">
                                            {service.title}
                                        </Link>
                                    </h3>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Button Group */}
                <div className="text-center mb-4">
                    <ul className="btns_group unordered_list p-0 justify-content-center">
                        <li className="me-3"> {/* Add margin to the right for spacing */}
                            <a
                                href="https://pages.razorpay.com/robotica25"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                <span className="btn_label" data-text="Register Now">Enroll Now</span>
                                <span className="btn_icon">
                                    <i className="fa-solid fa-arrow-up-right"></i>
                                </span>
                            </a>

                        </li>
                        <li>
                            <a
                                href={pdf}
                                className=""
                                style={{ display: 'block', textAlign: 'center' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="btn_label" data-text="Learn Now">Know More</span>
                                <span className="btn_icon"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Offer;
