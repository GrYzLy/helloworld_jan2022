import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './About';
import Homepage from './Homepage';
import NotFound from './NotFound';
import Search from './Search';

const RouterReact = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about/*" element={<About />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default RouterReact
