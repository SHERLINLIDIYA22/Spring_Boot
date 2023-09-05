import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import BackgroundImage from '../../assets/images/bgg.jpeg';

export default function SignUpPage() {
  return (
      <header style={HeaderStyle}>
        <div style={PageStyle}>
        <div className="text-center m-auto"> {/* Center content horizontally */}
        <h2 className="bold-text">
        You've passed the torch of knowledge, imagination<br />
        and inspiration to another soul.<br/>
        Your journey as both reader and seller is a testament <br/>to the power of storytelling. 
          </h2>
          <br></br>
          <br></br>
          <br></br>
          <h5 className="custom-font">Thanks for Selling</h5>
          <footer>
            <p><Link to="/">Back to Homepage</Link>.</p>
          </footer>
          </div>
        </div>
      </header>
  );
}

const PageStyle = {
  display: 'flex',
  justifyContent: 'center', // Center content horizontally
  alignItems: 'center',     // Center content vertically
  height: '100vh',          // Full viewport height
};

const HeaderStyle = {
  width: '100%',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'repeat',
  backgroundSize: 'cover',
};