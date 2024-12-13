import React, { useState } from 'react';
import '../App.css';
import DropdownMenu from './DropdownMenu';
import logo from '../Images/logo.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";



const Navbar = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
    // document.body.classList.toggle('no-scroll', !click);
    // document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

    

  }

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling

  };


  const [activeNav, setActiveNav] = useState('/')



  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className='bars' onClick={handleClick}>
          {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
        </div>

        <ul className={click ? 'active' : 'menu'}>
          <Link to='/' onClick={closeMenuBar}><li onClick={closeMenuBar}>Home</li></Link>
          {/* <div className="dropdown"> */}
          {/* <li onClick={toggleDropdown} className="dropbtn">Program <MdKeyboardArrowDown/></li> */}
          {/* {isDropdownOpen && <DropdownMenu />} */}
          {/* </div> */}
          {/* <a href='https://harvoxx.com'><li> Harvoxx School</li></a> */}
          {/* <li>News</li> */}

          <Link to='/dsp300' onClick={closeMenuBar}><li>DSP-300</li></Link>

          <Link to='/dsp100' onClick={closeMenuBar}><li>DSP-100</li></Link>
          <a href='https://harvoxx.com'><li>Paid Training</li></a>
          <a href='#contact' onClick={closeMenuBar}><li>Contact Us</li></a>

        </ul>




      </nav>
      <div className={click ? 'cover' : 'cover active'}></div>


    </div>
  )
}

export default Navbar