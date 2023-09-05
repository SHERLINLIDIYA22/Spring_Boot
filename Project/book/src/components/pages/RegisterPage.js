import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import BackgroundImage from '../../assets/images/bg.jpg';



export default function SignUpPage() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    gender: '',
    email: '',
    address: '',
    city: '',
    phonenumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const prodata = {
      id: formData.id,
      name: formData.name,
      gender: formData.gender,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      phonenumber: formData.phonenumber,
    };

    axios.post('http://localhost:8080/addBookcust', prodata);
    

  };

  return (
    <header style={HeaderStyle}>
      <div className="text-center m-5-auto">
       
        <h2>Join us</h2>
        <h5>Create your personal account</h5>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Customer id</label><br />
            <input
              type='number'
              name='id'
              value={formData.id}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <label>Name</label><br />
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label>Gender</label><br />
            <input
              type='text'
              name='gender'
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label>Email address</label><br />
            <input
              type='text'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label>Address</label><br />
            <input
              type='text'
              name='address'
              value={formData.address}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label>City</label><br />
            <input
              type='text'
              name='city'
              value={formData.city}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            <label>Phonenumber</label><br />
            <input
              type='text'
              name='phonenumber'
              value={formData.phonenumber}
              onChange={handleChange}
              required
            />
          </p>
          
          <p>
            <button id="sub_btn" type="submit">Register</button>
          </p>
        </form>
        <Link to="/Update">
                    <button className="primary-button bottom-right-button2" id="reg_btn"><span>Update </span></button>
                </Link>
                <Link to="/Delete">
                    <button className="primary-button bottom-right-button" id="reg_btn"><span>Delete </span></button>
                </Link>
        <footer>
          <p><Link to="/">Back to Homepage</Link>.</p>
        </footer>
      </div>
    </header>
          
  );
}

const HeaderStyle = {
  width: '100%',
  height: '100vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
};