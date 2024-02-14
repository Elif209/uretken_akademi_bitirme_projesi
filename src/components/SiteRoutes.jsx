import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Course from '../pages/Course';
import Teenage from '../pages/Teenage';
import Contact from '../pages/Contact';
import PagesNotFound from '../pages/PagesNotFound';
import Education from '../pages/Education';

function SiteRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={<Course />} />
      <Route path='/teenage' element={<Teenage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/education' element={<Education />} />
      <Route path='*' element={<PagesNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
