import React, { Fragment, useState } from 'react';
import Services from '../../api/service';
import { useParams } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
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
  const { slug } = useParams();
  const ServiceDetails = Services.find(item => item.slug === slug);
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <main className="bg-white">
        <section className="service_details_section">
          <div className="container">
            <h2 className="heading_block text-center text-primary mb-4">
              Glimpse of ROBOTICA 2024
            </h2>
            <div className="details_item_image position-relative mb-4">
              <img 
                src={srImg} 
                alt="Service Details" 
                className="img-fluid w-100" 
                style={{ maxWidth: '100%', height: 'auto' }} // Ensure responsive image
              />
              <button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                <span className="btn_icon">
                  <i className="fa-solid fa-play"></i>
                </span>
              </button>
            </div>

            {/* Images Gallery */}
            <div className="row">
              {[
                img1, img2, img3, img4, img5, img6, 
                img7, img8, img9, img10, img11, img12, 
                img13, img14, img15, img16
              ].map((imgSrc, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"> {/* 2 images per row on mobile, 3 on medium, 4 on large */}
                  <img src={imgSrc} alt={`Gallery Image ${index + 1}`} className="img-fluid" />
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
        videoId="uC-K8NP2Khw" 
        onClose={() => setOpen(false)} 
      />
    </Fragment>
  );
};

export default Glimpse;
