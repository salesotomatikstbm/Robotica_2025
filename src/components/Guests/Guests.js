import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Teams from '../../api/team';

const Guests = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            <main className="page_content section_space bg-white">
                <section className="team_section">
                    <div className="container">
                        <div className="pt-0 pb-3">
                            <div className="heading_block text-center">
                                <h2 className="heading_text mb-0 text-primary">
                                Our Esteemed Chief Guests
                                </h2>
                            </div>
                        </div>

                        {/* Team Grid */}
                        <div className="row justify-content-center">
                            {Teams.map((team, index) => (
                                <div
                                    className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
                                    key={index}
                                    data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} // Alternating animations
                                    data-aos-duration={`${500 + index * 100}`} // Staggered animation duration
                                >
                                    <div className="card text-center border-0 shadow-sm h-100">
                                        {/* Profile Image */}
                                        <div
                                            className="card-img-top overflow-hidden rounded-circle mx-auto mt-4 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '200px',
                                                height: '200px',
                                                backgroundColor: '#f8f9fa',
                                            }}
                                        >
                                            <Link onClick={ClickHandler} to={``}>
                                                <img
                                                    src={team.tImg}
                                                    alt={team.name}
                                                    className="img-fluid"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        borderRadius: '50%',
                                                    }}
                                                />
                                            </Link>
                                        </div>

                                        {/* Guest Info */}
                                        <div className="card-body">
                                            <h3 className="card-title h6 text-primary mb-2">
                                                {team.name}
                                            </h3>
                                            <h4 className="card-text small text-muted">
                                                {team.title}
                                            </h4>
                                            <h5 className="card-text small text-muted">
                                                {team.Dis}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    );
};

export default Guests;
