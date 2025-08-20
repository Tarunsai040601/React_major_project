import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosPeople } from "react-icons/io";
import { GiLovers } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillAndroid } from "react-icons/ai";
import { FcServices } from "react-icons/fc";
import { MdSupportAgent } from "react-icons/md";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { SlUserFollowing } from "react-icons/sl";
import './NavBar.css';

const Navbar = ({ role }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const loggedinuser = JSON.parse(localStorage.getItem("logginuser"));
  const loggedinadmin = JSON.parse(localStorage.getItem("logginadmin"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("logginuser");
    localStorage.removeItem("logginadmin");
    alert("Logged out successfully...!");
    navigate("/login");
  };

  const displayName = role === 'admin' && loggedinadmin
    ? loggedinadmin.user.displayName
    : loggedinuser?.user?.displayName;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>
          {role === 'admin' ? <>
              <span className="brand-name">Admin</span><span className="dot-com">pannel</span>
            </> : (
            <>
              <span className="brand-name">Svayamvaram</span><span className="dot-com">.com</span>
            </>
          )}
        </h2>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {role === 'admin' ? (
            <>
            <li><Link to="/AdminDashBoard/home"> Home <IoHomeOutline /></Link></li>
            <li><Link to="Events">Post_Events</Link></li>
             <li><Link to="JoinPeople">Join_Peoples <HiChatBubbleLeftRight /></Link></li>
             <li><Link to="MyProfile">My_Profile <SlUserFollowing /></Link></li>
            </> // Add admin links here if needed
          ) : (
            <>
              <li><Link to="/UserDashBoard"><IoHomeOutline /> Home</Link></li>
              <li><Link to="about"><AiFillAndroid /> About</Link></li>
              <li><Link to="stories"><GiLovers /> Stories</Link></li>
              <li><Link to="services"><FcServices /> Services</Link></li>
              <li><Link to="peoples"><IoIosPeople /> Peoples</Link></li>
              <li><Link to="support">Support <MdSupportAgent /></Link></li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-right">
        {displayName && (
          <span className="welcome-msg">Welcome: {displayName}<img src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png" alt="" style={{height:'60px',width:'60px',objectFit:'contain'}} /> </span>
        )}
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
