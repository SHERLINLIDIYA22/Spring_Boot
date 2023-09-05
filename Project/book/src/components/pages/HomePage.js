import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/bggg.jpg'
export default function HomePage() {
    return (
        <header style={ HeaderStyle }>
        <div className="text-center">
            <h1 className="main-title home-page-title">Welcome</h1>
            <p className="bold-text">"Every book has its own journey, and today, it found its new home with you. <br/>
            May the words within these pages inspire, educate, and transport you to places unknown.<br/>
            Thank you for choosing this book, and may it be the beginning of a beautiful adventure."</p>
                <Link to ="/sell">
                <button className="primary-button">Sell</button>
                </Link>
                <Link to="/buy">
                <button className="primary-button">Buy</button>
                </Link>
                <Link to="/">
                <button className="primary-button bottom-right-button">Log out</button>
            </Link>
        </div>
        </header>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}