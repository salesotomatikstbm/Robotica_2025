import React, { Fragment, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Hero from '../../components/hero/hero';
import Offer from '../../components/offer/offer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Testimonial from '../../components/Testimonial/Testimonial';
import Swal from 'sweetalert2';
import AlertImage from '../../images/chennai.jpg';
import WorkingModel from '../../components/EventCategory/WorkingModel';
import RoboRace from '../../components/EventCategory/RoboRace';
import About from '../../components/about/about';
import Guests from '../../components/Guests/Guests';
import Glimpse from '../../components/Glimpse/Glimpse';
import Faq from '../../components/FaqSection/Faq';
import Footer from '../../components/Footer/Footer';
import FounderMessage from '../../components/Founder Message/FounderMessage';
import OfferCountdown from '../../components/TimeZone/OfferCountdown';
import './HomePage.css'; // Import custom CSS for styles
import Hero1 from '../../components/hero/hero1';
import RoboticaInfo from '../../components/hero/RoboticaInfo';
import Guests1 from '../../components/Guests/Guests1';
import RoboSumo from '../../components/EventCategory/RoboSumo';
import YoungResearchersConclave from '../../components/EventCategory/YoungResearchersConclave';
import Event from '../../components/EventCategory/Event';
import PoloGuests from '../../components/Guests/PoloGuests';
import RoboGames from '../../components/EventCategory/RoboGames';
import Workshop from '../../components/EventCategory/Workshop1';
import Workshop1 from '../../components/EventCategory/Workshop1';
import Workshop2 from '../../components/EventCategory/Workshop2';
import RoboSumo1 from '../../components/EventCategory/RoboSumo1';

const HomePage = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS

        // Preload the alert image
        const preloadImage = new Image();
        preloadImage.src = AlertImage;

        // Show the alert after preloading the image
        preloadImage.onload = () => {
            Swal.fire({
                imageUrl: AlertImage,
                imageWidth: 500,
                imageHeight: 400,
                imageAlt: 'Custom image',
                confirmButtonText: 'Know More',
                width: window.innerWidth < 768 ? '80%' : '400px',
                padding: '1rem',
                customClass: {
                    popup: 'responsive-popup',
                }
            });
        };
    }, []);

    return (
        <Fragment>
            <div>
                <main >
                {/* style={{
                                    backgroundColor: '#066aab',
                                   
                                }} */}

                    <section id="hero" className="" data-aos="fade-up" data-aos-duration="1000">
                        <Hero />
                       
                    </section>
                    <div className="container main-content">
                    <section id="working-model" className="" data-aos="fade-up" data-aos-duration="1000">
                         <RoboGames />
                 </section>
                 <section id="robo-race" className="" data-aos="slide-up" data-aos-duration="1200">
                 <Workshop1 />
                        </section>
                        <section id="guests" className="" data-aos="fade-right" data-aos-duration="1000">
                        <Workshop2 />
                        </section>
                        <section id="about" className="" data-aos="zoom-in" data-aos-duration="1200">
                            <About />
                        </section>
                       
                        <section id="founder-message" className="" data-aos="fade-down" data-aos-duration="1000">
                            <FounderMessage />
                          
                        </section>
                       
                      

                        <section id="guests" className="" data-aos="fade-right" data-aos-duration="1000">
                            <Guests />
                        </section>
                        <section id="guests" className="" data-aos="fade-right" data-aos-duration="1000">
                          <Guests1 />
                        </section>
                        {/* <section id="offer-countdown" className="" data-aos="flip-left" data-aos-duration="800">
                            <OfferCountdown />
                        </section> */}
                         
                      
                       <section id="robo-race" className="" data-aos="slide-up" data-aos-duration="1200">
                           {/* <RoboSumo /> */}
                           <RoboSumo1 />
                        </section>
                        <section id="working-model" className="" data-aos="fade-up" data-aos-duration="1000">
                            <WorkingModel />
                        </section>
                        <section id="robo-race" className="" data-aos="slide-up" data-aos-duration="1200">
                            <RoboRace />
                        </section>
                       
                        <section id="robo-race" className="" data-aos="slide-up" data-aos-duration="1200">
                <Event />
                        </section>
                        <section id="guests" className="" data-aos="fade-right" data-aos-duration="1000">
                         <PoloGuests />
                        </section>
                        <section id="offer" className="" data-aos="zoom-in" data-aos-duration="800">
                            <Offer />
                        </section>
                        <section id="glimpse" className="" data-aos="fade-left" data-aos-duration="1000">
                            <Glimpse />
                        </section>
                        <section id="testimonial" className="" data-aos="fade-up" data-aos-duration="1200">
                            <Testimonial />
                        </section>
                        <section id="faq" className="" data-aos="slide-right" data-aos-duration="1000">
                            <Faq />
                        </section>
                        <section id="footer" className="" data-aos="fade-right" data-aos-duration="800">
                            <Footer />
                        </section>
                    </div>
                </main>
                <Scrollbar />
                <style jsx>{`
  @media (max-width: 768px) {
    #working-model {
      margin-top: 0 !important; /* Remove top margin in mobile view */
    }
  }
`}</style>



            </div>
        </Fragment>
    );
};

export default HomePage;
