import React, { Fragment, useState } from 'react';
import srImg from '../../images/services/service_details_image_1.png';
// Import all 16 images
import img1 from '../../images/Glimps/1.png';
import img2 from '../../images/Glimps/2.JPG';
import img3 from '../../images/Glimps/3.png';
import img4 from '../../images/Glimps/4.png';
import img5 from '../../images/Glimps/5.png';
import img6 from '../../images/Glimps/6.png';
import img7 from '../../images/Glimps/7.png';
import img8 from '../../images/Glimps/8.png';
import img9 from '../../images/Glimps/9.JPG';
import img10 from '../../images/Glimps/10.JPG';
import img11 from '../../images/Glimps/11.JPG';
import img12 from '../../images/Glimps/12.JPG';
import img13 from '../../images/Glimps/13.JPG';
import img14 from '../../images/Glimps/14.JPG';
import img15 from '../../images/Glimps/15.JPG';
import img16 from '../../images/Glimps/16.JPG';

const Glimpse = () => {
  const [isVideoOpen, setVideoOpen] = useState(false); // Video modal state handler

  // Array of gallery images
  const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16
  ];

  return (
    <Fragment>
      <main className="bg-white">
        <section className="service_details_section">
          <div className="container">
            <h2 className="heading_text text-center text-primary mb-4">
              Glimpse of ROBOTICA 2024
            </h2>

            {/* Video Section */}
            <div className="video_section position-relative mb-4">
              <img src={srImg} alt="Service Details" className="img-fluid w-100" />
              <button
                className="video_btn ripple_effect"
                onClick={() => setVideoOpen(true)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '50%',
                  padding: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <i className="fa-solid fa-play" style={{ color: '#fff', fontSize: '24px' }}></i>
              </button>
            </div>

            {/* Images Gallery */}
            <div className="row">
              {galleryImages.map((imgSrc, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                  <img src={imgSrc} alt={`Gallery Image ${index + 1}`} className="img-fluid" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-Screen Video Modal */}
        {isVideoOpen && (
          <div
            className="video_modal"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '90vw',
              height: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              overflow: 'hidden'
            }}
          >
            <iframe
              width="80%"
              height="80%"
              src="https://www.youtube.com/embed/I-vdhLprvus?si=kAeiLVOcVYINWTBR" // Automatically play video in full screen
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              style={{
                borderRadius: '8px',
                maxWidth: '80%',
                maxHeight: '80%',
                aspectRatio: '16 / 9',
                display: 'block',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)'
              }}
            ></iframe>
            <button
              className="close_btn"
              onClick={() => setVideoOpen(false)}
              style={{
                position: 'absolute',
                top: '-1px',
                right: '-100px',
                         border: 'none',
                borderRadius: '50%',
                width: '530px',
                height: '100px',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              &times;
            </button>
          </div>
        )}
      </main>

      {/* Media Queries for Desktop and Mobile Views */}
      <style jsx>{`
        /* Mobile View */
        @media (max-width: 767px) {
          .video_modal iframe {
            width: 100% !important;
            height: 100% !important;
          }
        }

        /* Desktop View */
        @media (min-width: 768px) {
          .video_modal iframe {
            width: 80% !important;
            height: 80% !important;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Glimpse;
