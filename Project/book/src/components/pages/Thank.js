import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import BackgroundImage from '../../assets/images/bggg.jpg';

export default function SignUpPage() {
  return (
      <header style={HeaderStyle}>
        <div style={PageStyle}>
        <div className="text-center m-auto"> {/* Center content horizontally */}
        <h2 className="bold-text">
            Keep exploring, keep reading,<br />
            and keep building your literary treasure trove.
          </h2>
          <br></br>
          <br></br>
          <br></br>
          <h5>Happy reading!</h5>
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