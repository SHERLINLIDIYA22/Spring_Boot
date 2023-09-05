import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bgggg.jpg'
export default function SellPage() {

    return (
        <div style={BackgroundWrapperStyle}>
        <header style={ HeaderStyle }>
        <div className="text-center m-5-auto">
            <h2 className='bold-text'>Buyer</h2>
            <h5>Enter the details</h5>
            <form action="/home">
                <p>
                    <label>id</label><br/>
                    <input type="text" name="id" required />
                </p>
                <p>
                    <label>Title</label><br/>
                    <input type="title" name="title" required />
                </p>
                <p>
                    <label>Author</label><br/>
                    <input type="Author" name="Author" requiredc />
                </p>
                <p>
                    <label>Address</label><br/>
                    <input type="Address" name="Address" requiredc />
                </p>
                <p>
                    <label>email</label><br/>
                    <input type="email" name="email" requiredc />
                </p>
                <p>
                    <label>paymentmode</label><br/>
                    <input type="paymentmode" name="paymentmode" requiredc />
                </p>
                <p>
                    <label>phonenumber</label><br/>
                    <input type="phonenumber" name="phonenumber" requiredc />
                </p>
                <Link to="/thank">
                <button className="primary-button">Buy</button>
                </Link>
                
            </form>
           
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </header>
        </div>
    )
}
const BackgroundWrapperStyle = {
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    position: "fixed",

  };
  
  const HeaderStyle = {
    width: "60%",
    maxWidth: "400px", // Set a maximum width for the content container
    margin: "0 auto",  // Center the content container horizontally
    padding: "10px",   // Add padding to create a smaller content area
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Add a semi-transparent background color to the content container
    borderRadius: "10px", // Add border radius for a rounded appearance
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add a box shadow for a subtle effect
    color: "#333",     // Set text color
  };