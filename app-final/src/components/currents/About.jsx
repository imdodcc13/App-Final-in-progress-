import React, { Component } from 'react';
import '../../css/about.css';

class About extends Component {
    render() {
      return (
        <div id="about" className="d-flex align-items-center flex-column">
			<h2><u>About NYSL</u></h2>
			<h2>Mission</h2>
			<p>Yo support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer, specifically those skills around team cooperation and good sportsmanship</p>
			<h2>Vision</h2>
			<p>The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-disciplines, and leadership</p>
			<h2>General Information</h2>
			<p>The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is ran by a small full-time staff, and relies on the generous volunteer time of parents and previous league members.</p>
        </div>
      );
    }
  }
    
  export default About;