import React from 'react';

const Testimonial = () => {
  const videoIds = [
    'RWrOCSw_TB4', 
    '6-EccKrkbRw', 
    '_-cB389xycQ', 
    'GzZeMbQuU7I',
    'pm5by5b-Zpk',
    'VMH_vvC8nDQ'
  ];

  return (
    <section className="team_section section_space bg-white"> {/* Apply background color */}
      <div className="container">
        <div className="section_space pt-0 pb-3">
          <div className="heading_block text-center">
            <h2 className="heading_text mb-0 text-primary"> {/* Adjust text color */}
              Testimonial
            </h2>
          </div>
        </div>
        <div className="row">
          {videoIds.map((videoId, index) => (
            <div className="col-12 col-md-4 text-center" key={index}>
              <iframe
                width="100%"
                height="250"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
