import React, {Component} from 'react';

import {BrowserRouter as Router, Routes, Route, useMatch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Bio from './Bio';
import Contact from './Contact';

const About = () => {

  const match = useMatch("/about/*");
 console.log(match)
  return (
  <div>
    <h1>About </h1>
    <p>this is our about</p>

    <Link to={`${match.pathname}`}>About</Link>&nbsp;
    <Link to={`${match.pathname}/contact`}>Contact</Link>&nbsp;
    <Link to={`${match.pathname}/bio`}>Bio</Link>

    
    <Routes>
      <Route path={`${match.pathname}/contact`} element={<Contact />} />
      <Route path={`${match.pathname}/bio`} element={<Bio />} />
    </Routes>
    


  </div>)

}
export default About
