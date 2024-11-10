import React, { useState } from 'react';
import './StudentForm.css';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePhoneNumber = (contactNumber) => {
    // Simple validation for 10-digit phone number (change pattern as needed)
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(contactNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate contact number
    if (!validatePhoneNumber(formData.contactNumber)) {
      setMessage('Please enter a valid 10-digit contact number.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    const submissionData = new FormData();
    submissionData.append("Name", formData.studentName);
    submissionData.append("SchoolName", formData.schoolName);
    submissionData.append("Grade", formData.grade);
    submissionData.append("Level", formData.level);
    submissionData.append("ContactNumber", formData.contactNumber);
    submissionData.append("TrainerName", formData.trainerName);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyjbQ3qOmJM6aq1JUBMQJW5IqR_RvdmEfKLW4dJ600W8DVpLVrPN3pZq9zkmc2a_29r1Q/exec", {
        method: "POST",
        body: submissionData,
      });

      if (response.ok) {
        const responseData = await response.text();
        setMessage(responseData);
        setFormData(initialState); // Reset form after successful submission
      } else {
        setMessage("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("There was an error sending your message.");
    } finally {
      setIsSubmitting(false); // Reset the submitting state
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Student Registration Form</h2>
      <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded-lg">
   
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label fw-bold">Student Name <span className="text-danger">*</span></label>
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
        {/* School Name Field */}
        <div className="mb-3">
          <label htmlFor="schoolName" className="form-label fw-bold">School Name <span className="text-danger">*</span></label>
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
        {/* Grade Field */}
        <div className="mb-3">
          <label htmlFor="grade" className="form-label fw-bold">Grade <span className="text-danger">*</span></label>
          <select
            className="form-select"
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value="">Select Grade</option>
            {["II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"].map((grade) => (
              <option key={grade} value={grade}>{grade}</option>
            ))}
          </select>
        </div>
        {/* Level Field */}
        <div className="mb-3">
          <label htmlFor="level" className="form-label fw-bold">Level <span className="text-danger">*</span></label>
          <select
            className="form-select"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          >
            <option value="">Select Level</option>
            {["1", "2", "3", "4"].map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
        {/* Contact Number Field */}
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label fw-bold">Contact Number <span className="text-danger">*</span></label>
          <input
            type="tel"
            className="form-control"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit contact number"
          />
        </div>
        {/* Trainer Name Field */}
        <div className="mb-3">
          <label htmlFor="trainerName" className="form-label fw-bold">Trainer Name <span className="text-danger">*</span></label>
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

        {/* Submit Button */}
        <div className='mt-3'>
          <button 
            type="submit" 
            className="btn btn-primary w-100 p-3"
            style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'}}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
            {isSubmitting && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
          </button>
        </div>

        <div className="p-3">       
          {message && <p className="text-center">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default Student_Form;
