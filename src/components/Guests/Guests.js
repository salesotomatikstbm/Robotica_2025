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
                                    <div className="team_card" style={styles.teamCard}>
                                        {/* Profile Image */}
                                        <div className="team_member_image" style={styles.teamMemberImage}>
                                            <Link onClick={ClickHandler} to={``}>
                                                <img src={team.tImg} alt={team.name} style={styles.teamImage} />
                                            </Link>
                                        </div>

                                        {/* Guest Info */}
                                        <div className="team_member_info" style={styles.teamMemberInfo}>
                                            <h3 className="team_member_name" style={styles.teamMemberName}>
                                                {team.name}
                                            </h3>
                                            <h4 className="team_member_title" style={styles.teamMemberTitle}>
                                                {team.title}
                                            </h4>
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

// Custom Styles
const styles = {
    teamCard: {
        background: '#fff',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        margin: '0 auto',
        textAlign: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
    },
    teamMemberImage: {
        overflow: 'hidden',
        borderRadius: '50%',
        marginBottom: '20px',
        width: '200px',
        height: '200px',
        margin: '0 auto',
        transition: 'transform 0.3s ease',
    },
    teamImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%',
        transition: 'transform 0.3s ease-in-out',
    },
    teamMemberInfo: {
        color: '#333',
    },
    teamMemberName: {
        fontSize: '18px',
        fontWeight: '700',
        marginBottom: '5px',
        color: '#066aab',
    },
    teamMemberTitle: {
        fontSize: '14px',
        color: '#777',
    },
};

// Hover Effect (if needed)
document.querySelectorAll('.team_card').forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0px 18px 35px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0px 12px 24px rgba(0, 0, 0, 0.15)';
    });
});
