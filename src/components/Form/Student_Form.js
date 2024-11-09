import React, { useState } from 'react';

const Student_Form = () => {
  const initialState = {
    studentName: '',
    schoolName: '',
    grade: '',
    level: '',
    contactNumber: '',
    trainerName: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the form data for debugging
    console.log('Form Data to Submit:', formData);

    const submissionData = new FormData();
    submissionData.append("Name", formData.studentName);
    submissionData.append("SchoolName", formData.schoolName);
    submissionData.append("Grade", formData.grade);
    submissionData.append("Level", formData.level);
    submissionData.append("ContactNumber", formData.contactNumber);
    submissionData.append("TrainerName", formData.trainerName);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzTFeURxzQgsZ0aqu6cy9Qi1tkuQWKKnNt4o3GQg81G5HVH9ikS14dqVU7jMWXty8fBow/exec", {
        method: "POST",
        body: submissionData,
      });

      if (response.ok) {
        const responseData = await response.text();
        setMessage(responseData);

        // Reset form to initial state after successful submission
        setFormData(initialState);
      } else {
        setMessage("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("There was an error sending your message.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Student Registration Form</h2>
      <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded-lg ">
        
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label fw-bold">Student Name</label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="schoolName" className="form-label fw-bold">School Name</label>
          <select
            className="form-select"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            required
          >
            <option value="">Select School</option>
            <option value="School A">School A</option>
            <option value="School B">School B</option>
            <option value="School C">School C</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="grade" className="form-label fw-bold">Grade</label>
          <select
            className="form-select"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value="">Select Grade</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="level" className="form-label fw-bold">Level</label>
          <select
            className="form-select"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label fw-bold">Contact Number</label>
          <input
            type="tel"
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="trainerName" className="form-label fw-bold">Trainer Name</label>
          <select
            className="form-select"
            id="trainerName"
            name="trainerName"
            value={formData.trainerName}
            onChange={handleChange}
            required
          >
            <option value="">Select Trainer</option>
            <option value="Trainer A">Trainer A</option>
            <option value="Trainer B">Trainer B</option>
            <option value="Trainer C">Trainer C</option>
          </select>
        </div>

        
        <button 
          type="submit" 
          className="btn btn-primary w-100 py-3 mt-3"
          style={{ fontSize: '16px', fontWeight: 'bold' }}
        >
          Submit
        </button>


        {message && <p className="mt-3 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default Student_Form;
