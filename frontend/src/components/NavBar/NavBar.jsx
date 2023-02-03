import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";


const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="site-title"><Link to="/" >
        PicklePlay
      </Link></div>
      <ul>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/">Tournaments</Link></li>
        {/* <li><Link to="/shop">Shop</Link></li> */}
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/profilepage">Profile</Link></li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
            ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </nav>
    

  );
};

export default Navbar;
