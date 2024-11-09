import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Student_Form from '../../components/Form/Student_Form';
const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="Robotica-2025" element={<HomePage />} />
          <Route path="/admin/students-form-submission" element={<Student_Form />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
