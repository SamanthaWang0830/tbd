import React from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
import './Navbar.scss'
import { useContext } from 'react';
import { ModeContext } from '../../context/modeContext';
import { AuthContext } from '../../context/authContext';
const Navbar = () => {
  const {darkMode,toggle}=useContext(ModeContext)
  const {currentUser}=useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        
      </div>

      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <div className="user">
          <img
            src=''
            alt=""
          />
          <span>hi</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar