import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Form1 from '../../components/Form/Form1';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="Robotica-2025" element={<HomePage />} />
          <Route path="/admin/students-form-submission" element={<Form1 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
