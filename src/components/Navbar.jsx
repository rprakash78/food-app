import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [authState, setAuthState] = useState('Login');

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={() => {
              authState === 'Login' ? setAuthState('Logout') : setAuthState('Login');
            }}>{authState}</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
