import React, { Fragment, useState } from 'react';
import ModalVideo from 'react-modal-video'; // Import ModalVideo
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
  const [isOpen, setOpen] = useState(false); // Modal state handler

  return (
    <Fragment>
      <main className="bg-white">
        <section className="service_details_section">
          <div className="container">
            <h2 className="heading_text text-center heading_block text-primary">
              Glimpse of ROBOTICA 2024
            </h2>

            {/* Video Section */}
            <div className="details_item_image position-relative mb-4">
              <img 
                src={srImg} 
                alt="Service Details" 
                className="img-fluid w-100" 
                style={{ maxWidth: '100%', height: 'auto' }} // Ensure responsive image
              />
              {/* Video Play Button */}
              <button 
                className="video_btn ripple_effect" 
                onClick={() => setOpen(true)} // Open modal onClick
                style={{
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)', // Center the button
                  backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                  borderRadius: '50%', 
                  padding: '15px', 
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 10 // Ensure button appears above the image
                }}
              >
                <span className="btn_icon">
                  <i className="fa-solid fa-play" style={{ color: '#fff', fontSize: '24px' }}></i>
                </span>
              </button>
            </div>

            {/* Images Gallery */}
            <div className="row">
              {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16].map((imgSrc, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                  <img src={imgSrc} alt={`Gallery Image ${index + 1}`} className="img-fluid" style={{ height: 'auto', width: '100%' }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal Video */}
      <ModalVideo 
        channel='youtube' 
        autoplay 
        isOpen={isOpen} 
        videoId="uC-K8NP2Khw" // Replace with your YouTube video ID
        onClose={() => setOpen(false)} // Close modal when user clicks outside or the close button
        className="modal-video" // Optional: add a custom class for additional styling if needed
      />
      
      <style jsx>{`
        .modal-video {
          top: -25%; // Adjust to position modal higher
        }
        .modal-video .modal-dialog {
          margin: 0 auto; // Center the modal horizontally
          position: absolute; // Set position to absolute
          width: 90%; // Ensure modal width is responsive
          max-width: 800px; // Set a max width for larger screens
        }
        @media (max-width: 768px) {
          .modal-video {
            top: -90%; // Adjust modal position for mobile view
          }
          .modal-video .modal-dialog {
            width: 95%; // Make modal wider for small screens
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Glimpse;
