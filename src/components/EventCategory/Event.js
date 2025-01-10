import React, { Fragment } from 'react';
import newImage1 from '../../images/roborace/polo.png';
import polologo from '../../images/polologo.png';
import pdf from '../../images/Young-Researchers-Conclave-v2.pdf';

const Event = () => {
    const ClickHandler = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Fragment>
            <main className="page_content about-page">
                <section className="about_section section_space bg-white">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            {/* Image Section */}
                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <img
                                    src={newImage1}
                                    alt="Event Banner"
                                    className="img-fluid rounded shadow"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Text Content Section */}
                            <div className="col-lg-6 d-flex flex-column justify-content-center">
                                <div className="about_content">
                                    <h2 className="heading_text text-primary text-center mb-3">
                                       Young Researchers Conclave 2025!
                                    </h2>

                                    <div className="logo-container text-center mb-4">
                                        <p className="heading_description mb-3 text-dark text-center">
                                            <strong>This Event is presented by</strong>
                                        </p>
                                        <img
                                            src={polologo}
                                            alt="Event Logo"
                                            className="img-fluid mb-2"
                                            style={{ maxWidth: '100px', maxHeight: '100px' }}
                                        />
                                    </div>

                                    <p className="heading_description mb-3 text-dark text-justify" style={{ textAlign: 'justify' }}>
                                        Become the Next Junior Scientist by participating in this exciting Inter-School Young Researchers Paper Presentation
                                        Conference, as part of the prestigious Robotica-25 event!
                                    </p>

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
                                            <strong>Last Date to Express Interest:</strong> 10th January 2025
                                        </li>
                                        <li>
                                            <strong>Last Date for Paper/Poster Submission:</strong> 24th January 2025
                                        </li>
                                    </ul>

                                    {/* Button Group */}
                                    <div className="btns_group d-flex flex-column flex-md-row justify-content-center">
                                        <a
                                            href={pdf}
                                            className="btn btn-secondary w-md-auto text-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
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

export default Event;
