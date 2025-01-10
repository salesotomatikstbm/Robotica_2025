import React from 'react';

const YoungResearchersConclave = () => {
  return (
    <section className="container mt-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2 className="heading_text text-primary">Join the Young Researchers Conclave 2025!</h2>
        <p className="heading_description mb-3 text-dark text-justify" style={{ textAlign: "justify" }}>
        Participate in the prestigious Robotica-25 event at VIT University, Chennai
                                    </p>
     
      </div>

      {/* Event Details Section */}
      <div className="row text-center mt-4">
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg p-4 border-light rounded">
            <h5 className="card-title text-primary">Venue</h5>
            <p className="card-text">VIT University, Chennai</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg p-4 border-light rounded">
            <h5 className="card-title text-primary">Date</h5>
            <p className="card-text">7th February 2025</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg p-4 border-light rounded">
            <h5 className="card-title text-primary">Time</h5>
            <p className="card-text">1:30 PM to 4:00 PM</p>
          </div>
        </div>
      </div>

      {/* Submission Deadlines Section */}
      <div className="row text-center mt-4">
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg p-4 border-light rounded">
            <h5 className="card-title text-danger">Last Date to Express Interest</h5>
            <p className="card-text">10th January 2025</p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg p-4 border-light rounded">
            <h5 className="card-title text-danger">Last Date for Paper/Poster Submission</h5>
            <p className="card-text">24th January 2025</p>
          </div>
        </div>
      </div>

      {/* Patrons Section */}
      <div className="mt-5">
        <h4 className="font-weight-bold text-dark">PATRONS:</h4>
        <ul className="list-unstyled pl-3">
          <li>🔹 Mrs. S Madhumathi, IAS – Secretary, School Education Department, Tamil Nadu</li>
          <li>🔹 Prof. S Ponnusamy – Chair Professor, IIT Madras</li>
        </ul>
      </div>

      {/* Alert Section for Certificate */}
      <div className="alert alert-info text-center mt-4" role="alert">
        All presenters will receive a Certificate with the title “Young Researcher.”
      </div>
    </section>
  );
};

export default YoungResearchersConclave;
