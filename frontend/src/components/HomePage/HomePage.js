import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'; // Import your logo image
import './HomePage.css'; // Import CSS for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <img src={logo} alt="Kutti Story Logo" className="logo" />
        <h1 className="website-name">Kutti Story</h1>
      </div>
      <div className="background">
        {/* Cool background image or design */}
      </div>
      {/* <div className="navigation">
        <Link to="/post" className="nav-link">Post Your Story</Link>
        <Link to="/stories" className="nav-link">View All Stories</Link>
        <Link to="/login" className="nav-link">Login/Profile</Link>
      </div> */}
    </div>
  );
};

export default HomePage;
