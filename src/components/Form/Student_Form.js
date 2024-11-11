import React, { useState } from 'react';
import './StudentForm.css';

const schoolData = [
  { schoolName: 'ARYA VIDHYASSHRAM, INTERNATIONAL RESIDENTIAL SCHOOL', district: 'VELLORE' },
  { schoolName: 'ASHIRWAD INTERNATIONAL SCHOOL', district: 'VELLORE' },
  { schoolName: 'BALSAM ACADEMY', district: 'VELLORE' },
  { schoolName: 'BRUNDAVAN ENGLISH MEDIUM SCHOOL', district: 'VELLORE' },
  { schoolName: 'HINDU VIDYALAYA CBSE SCHOOL', district: 'VELLORE' },
  { schoolName: 'JEYAMALLI INTERNATIONAL SCHOOL', district: 'VELLORE' },
  { schoolName: 'THE KRISAR ACADEMY', district: 'VELLORE' },
  { schoolName: 'KSR MITIKAS PUBLIC SCHOOL', district: 'VELLORE' },
  { schoolName: 'LAKSHMI GARDEN SCHOOL', district: 'VELLORE' },
  { schoolName: 'MAYFLOWER SCHOOL(CMC)', district: 'VELLORE' },
  { schoolName: 'MAYFLOWER KIDS (GN)', district: 'VELLORE' },
  { schoolName: 'MOTHER TERESA ENGLISH MEDIUM SCHOOL', district: 'VELLORE' },
  { schoolName: 'PINKZ PUBLIC SCHOOL', district: 'VELLORE' },
  { schoolName: 'RATHINAGIRI BAGEERATHAN MATRICULATION HR SEC SCHOOL', district: 'VELLORE' },
  { schoolName: 'SAI GURUJI ELITE SCHOOL', district: 'VELLORE' },
  { schoolName: 'SHRI SHANTHINIKETHAN SCHOOL (SNMS)', district: 'VELLORE' },
  { schoolName: 'SRI NARAYANI VIDYASHRAM SR.SEC SCHOOL', district: 'VELLORE' },
  { schoolName: 'SPRING DAYS CBSE SCHOOL', district: 'VELLORE' },
  { schoolName: 'St.JOHN\'S GROUP OF SCHOOLS', district: 'VELLORE' },
  { schoolName: 'TULIP INTERNATIONAL SCHOOL', district: 'VELLORE' },
  { schoolName: 'VIDYANIKETAN MATRIC. HR. SEC. SCHOOL', district: 'VELLORE' },
  { schoolName: 'VELLORE INTERNATIONAL SCHOOL', district: 'VELLORE' },
  { schoolName: 'ST. ANTONY\'S PUBLIC SCHOOL (CBSE)', district: 'TIRUNELVELI' },
  { schoolName: 'SCAD INTERNATIONAL SCHOOL', district: 'TIRUNELVELI' },
  { schoolName: 'VSR INTERNATIONAL SCHOOL', district: 'TIRUNELVELI' },
  { schoolName: 'GOOD SHEPHERD SCHOOL', district: 'TIRUNELVELI' },
  { schoolName: 'FRANCIS XAVIER SCHOOL', district: 'TIRUNELVELI' },
  { schoolName: 'PANNAI PUBLIC', district: 'DINDIGUL' },
  { schoolName: 'PANNAI MATRIC', district: 'DINDIGUL' },
  { schoolName: 'THNU', district: 'DINDIGUL' },
  { schoolName: 'MEENAKSHI', district: 'DINDIGUL' },
  { schoolName: 'SINDINI MODEL', district: 'CHENNAI' },
  { schoolName: 'GGN INTERNATIONAL', district: 'CHENNAI' },
  { schoolName: 'SRI VENKATESHWARA', district: 'CHENNAI' },
  { schoolName: 'SRI BALA VIDYALAYA', district: 'CHENNAI' },
  { schoolName: 'THIRUVALLUVAR VIDYASHARAM', district: 'CHENNAI' },
  { schoolName: 'PUMS GOVT SCHOOL (PANGAYAT UNION MUNICIPALTY SCHOOL VASANTHANADAI)', district: 'VELLORE' },
  { schoolName: 'SVM ANANDHAASHRAMAM', district: 'SALEM' },
  { schoolName: 'SVM SHIVAJI NAGAR', district: 'SALEM' },
  { schoolName: 'SVM SHEVAPET', district: 'SALEM' },
  { schoolName: 'SVM KONDALAMPATTY', district: 'SALEM' },
  { schoolName: 'SVM AYOTHIYAPATTINAM', district: 'SALEM' },
  { schoolName: 'SVM KANNANKURICHI', district: 'SALEM' },
  { schoolName: 'SENTHIL PUBLIC SCHOOL', district: 'DHARAMAPURI' },
  { schoolName: 'SENTHIL PUBLIC SCHOOL', district: 'SALEM' },
  { schoolName: 'CLUNEY VIDYA NIKETHAN SCHOOL(CBSE)', district: 'SALEM' },
  { schoolName: 'SRK MATRIC HR SEC SCHOOL', district: 'SALEM' },
  { schoolName: 'SRK GLOBAL SCHOOL', district: 'SALEM' },
  { schoolName: 'SRI RAM VIDYALAYA', district: 'SALEM' },
  { schoolName: 'RASI VIDYASHRAMAM CBSE', district: 'SALEM' },
  { schoolName: 'MONFORT SCHOOL', district: 'SALEM' },
  { schoolName: 'HINDU GLOBAL SCHOOL', district: 'SALEM' },
  { schoolName: 'SARATHA NEWGEN SCHOOL', district: 'SALEM' },
  { schoolName: 'BUDDING MINDS INTERNATIONAL SCHOOL', district: 'TAMBARAM' },
  { schoolName: 'SHANTHOSH VIDYALAYA MATRIC HIGHER SECONDARY SCHOOL', district: 'TAMBARAM' },
  { schoolName: 'CEOA MATRIC HIGHER SECONDARY SCHOOL', district: 'THENI' },
  { schoolName: 'VIVEKA MATRICULATION SCHOOL', district: 'NAMAKKAL' },
  { schoolName: 'BHARATHIYAR HI TECH INTERNATIONAL SCHOOL (CBSE)', district: 'ATTUR' },
  { schoolName: 'BHARATHIYAR MATRIC HIGHER SECONDARY SCHOOL', district: 'ATTUR' },
  { schoolName: 'OAC-VELLORE', district: 'OAC' },
  { schoolName: 'OAC-PARRYS', district: 'OAC' },
  { schoolName: 'OAC-SALEM', district: 'OAC' },
  { schoolName: 'OAC-TAMBARAM', district: 'OAC' },
  { schoolName: 'OAC-ANNA NAGAR', district: 'OAC' },
  { schoolName: 'OAC-DINDUGAL', district: 'OAC' },
  { schoolName: 'OAC-THENI', district: 'OAC' },
  { schoolName: 'OAC-MADURAI', district: 'OAC' },
  { schoolName: 'OAC-NAMAKKAL', district: 'OAC' },
  { schoolName: 'OAC-ATTUR', district: 'OAC' },
  { schoolName: 'OAC-GUDIYATHAM', district: 'OAC' },
  { schoolName: 'OAC-MUMBAI', district: 'OAC' },
  { schoolName: 'OAC-UK', district: 'OAC' },
]
  ;

const districts = [...new Set(schoolData.map((school) => school.district))]; // Unique districts

const Student_Form = () => {
  const initialState = {
    studentName: '',
    schoolName: '',
    grade: '',
    level: '',
    contactNumber: '',
    trainerName: '',
    event: '',
    submissionTime: '',
    district: '' // Adding district to form state
  };

  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "studentName") {
      setFormData({ ...formData, [name]: value.toUpperCase() });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validatePhoneNumber = (contactNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(contactNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date().toLocaleDateString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    setFormData((prevFormData) => ({
      ...prevFormData,
      submissionTime: currentDate
    }));

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
    submissionData.append("Event", formData.event);
    submissionData.append("SubmissionTime", formData.submissionTime);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxSiE70_4JPo2XvLOp-963BWwyK6I8m_Je_TDUjYURHVafD_pa9xT6Nh4QU_tLhmEYgkw/exec", {
        method: "POST",
        body: submissionData,
      });

      if (response.ok) {
        const responseData = await response.text();
        setMessage(responseData);
        setFormData(initialState);
      } else {
        setMessage("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("There was an error sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredSchools = schoolData.filter((school) => school.district === formData.district);

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

        {/* District Selection */}
        <div className="mb-3">
          <label htmlFor="district" className="form-label fw-bold">Branch <span className="text-danger">*</span></label>
          <select
            className="form-select"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          >
            <option value="">Select Branch</option>
            {districts.map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
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
            disabled={!formData.district} // Disable if no district is selected
          >
            <option value="">Select School</option>
            {filteredSchools.map((school) => (
              <option key={school.schoolName} value={school.schoolName}>{school.schoolName}</option>
            ))}
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

        {/* Event Selection (Radio Buttons) */}
        <div className="mb-3">
          <label className="form-label fw-bold">Event <span className="text-danger">*</span></label>
          <div className="d-flex flex-column flex-md-row">
            {["Working Model", "RoboRace", "Inschool"].map((event) => (
              <div key={event} className="form-check mb-2 mb-md-0 me-md-4">
                <input
                  type="radio"
                  id={event}
                  name="event"
                  value={event}
                  checked={formData.event === event}
                  onChange={handleChange}
                  className="form-check-input"
                  required
                />
                <label htmlFor={event} className="form-check-label">{event}</label>
              </div>
            ))}
          </div>
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
            <option value="Keerthika P">Keerthika P</option>
            <option value="Pooja S">Pooja S</option>
            <option value="Agaliya D">Agaliya D</option>
            <option value="Dhivakar V C">Dhivakar V C</option>
            <option value="Nabeesa R L">Nabeesa R L</option>
            <option value="Shalini V">Shalini V</option>
            <option value="Raju Shanmugam">Raju Shanmugam</option>
            <option value="Abirami S">Abirami S</option>
            <option value="Dinesh Kumar M">Dinesh Kumar M</option>
            <option value="Fazil Khan F">Fazil Khan F</option>
            <option value="Frederick">Frederick</option>
            <option value="Ganesh I">Ganesh I</option>
            <option value="Hemamalini A">Hemamalini A</option>
            <option value="Jeevitha D">Jeevitha D</option>
            <option value="Prabhu Raja S">Prabhu Raja S</option>
            <option value="Revathi S">Revathi S</option>
            <option value="Santhosh P">Santhosh P</option>
            <option value="Sharmin Firdousy">Sharmin Firdousy</option>
            <option value="Soniya G">Soniya G</option>
            <option value="Sudarson S">Sudarson S</option>
            <option value="Swarnamalya">Swarnamalya</option>
            <option value="Swathy Velu">Swathy Velu</option>
            <option value="Thenmozhi M">Thenmozhi M</option>
            <option value="Pathikonda Yuvarajulu">Pathikonda Yuvarajulu</option>
            <option value="Harish B">Harish B</option>
            <option value="Anitha K">Anitha K</option>
            <option value="Gowri K S">Gowri K S</option>
            <option value="Mekala S">Mekala S</option>
            <option value="Saradha Nagarajan">Saradha Nagarajan</option>
            <option value="Usharani B">Usharani B</option>
            <option value="Mahalakshmi R">Mahalakshmi R</option>
            <option value="Janifer Princilla">Janifer Princilla</option>
            <option value="Naveenkumar B">Naveenkumar B</option>
            <option value="Pavithra B">Pavithra B</option>
            <option value="Sneha D">Sneha D</option>
            <option value="Sindhu N">Sindhu N</option>
            <option value="Gomathi">Gomathi</option>
            <option value="Mohankanth">Mohankanth</option>
            <option value="Diana Franciska Mary">Diana Franciska Mary</option>
            <option value="Saranya S">Saranya S</option>
            <option value="Kavitha M">Kavitha M</option>
            <option value="Bharani Dharan M">Bharani Dharan M</option>
            <option value="Gokul G">Gokul G</option>
            <option value="Harikrishnan K">Harikrishnan K</option>
            <option value="Madhumathi V">Madhumathi V</option>
            <option value="Muthubalaji M">Muthubalaji M</option>
            <option value="Priyanka R">Priyanka R</option>
            <option value="Shivaani S V">Shivaani S V</option>
            <option value="Jeevanandham">Jeevanandham</option>
            <option value="Jenifer">Jenifer</option>
            <option value="Suganya K">Suganya K</option>
            <option value="Jenifer R">Jenifer R</option>
            <option value="Ranjani P N">Ranjani P N</option>
            <option value="Vignesh M">Vignesh M</option>
            <option value="Dharani">Dharani</option>
            <option value="Kaviya">Kaviya</option>
            <option value="DINESH">DINESH</option>
            <option value="NIVETHA">NIVETHA</option>
            <option value="Hemalatha">Hemalatha</option>
            <option value="Lavenya">Lavenya</option>
          </select>
        </div>

        {/* Hidden field for submission time */}
        <input
          type="hidden"
          name="submissionTime"
          value={formData.submissionTime}
        />

        <div className="mt-3">
          <button
            type="submit"
            className="btn btn-primary w-100 p-3"
            style={{ fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
            {isSubmitting && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
          </button>
        </div>
      </form>

      <div className='p-5'>
        {message && (
          <div className="alert alert-info">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Student_Form;
