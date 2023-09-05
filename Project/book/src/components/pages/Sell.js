import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import BackgroundImage from '../../assets/images/bggg.jpg';

export default function SignUpPage() {
  return (
    <div style={BackgroundWrapperStyle}>
      <header style={HeaderStyle}>
        <div className="text-center m-5-auto">
          <h2>Seller</h2>
          <h5>Enter the details</h5>
          <form action="/home">
            <p>
              <label>id</label><br />
              <input type="text" name="id" required />
            </p>
            <p>
              <label>Title</label><br />
              <input type="text" name="title" required />
            </p>
            <p>
              <label>Author</label><br />
              <input type="text" name="Author" required />
            </p>
            <p>
              <label>Email</label><br />
              <input type="email" name="email" required />
            </p>
            <p>
              <label>Price</label><br />
              <input type="number" name="price" required />
            </p>
            <p>
              <Link to="/last">
                <button className="primary-button">Sell</button>
              </Link>
            </p>
          </form>
          <footer>
            <p><Link to="/">Back to Homepage</Link>.</p>
          </footer>
        </div>
      </header>
    </div>
  );
}

const BackgroundWrapperStyle = {
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100vh",
  position: "fixed",
  zIndex: -1,
};

const HeaderStyle = {
  width: "100%",
  maxWidth: "400px", 
  margin: "0 auto",  
  padding: "15px",   
  backgroundColor: "rgba(255, 255, 255, 0.8)", 
  borderRadius: "10px", 
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
  color: "#333",     
};