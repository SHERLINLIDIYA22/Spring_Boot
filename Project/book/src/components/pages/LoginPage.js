import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.jpg'
export default function SignInPage() {
    return (
        <header style={ HeaderStyle }>
        <div className="text-center m-5-auto">
            <br></br><br></br> <br></br><br></br> <br></br><br></br> <br></br><br></br>
            <h2 className="bold-text">Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Customer id</label><br/>
                    <input type="text" name="id" required />
                </p>
                <p>
                    <label>Email_id</label>
                   
                    <br/>
                    <input type="emailid" name="emailid" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </header>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    backgroundSize: "cover"
}