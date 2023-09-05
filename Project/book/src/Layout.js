import React from 'react';
import './Layout.css';// Create a corresponding CSS file for styling
import Sidebar from './Sidebar';


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="centered-text">
       
      </div>
      
        <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;