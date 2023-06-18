import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar_style.css"
import { HambergerMenu } from "iconsax-react";
import { CloseCircle } from "iconsax-react";


export default function Navbar() {
  const Come_forward = ()=>{
    document.getElementById("sidebar").style.right = "0vw"
  }
  const Go_backward = ()=>{
    document.getElementById("sidebar").style.right = "-120vw"
  }
  const Reload =()=>{
    setTimeout(() => {
      window.location.reload()
    }, 1000);

  }
  return (
    <div className='navbar'>
        <Link className="title">PrideHUB</Link>
        <div className="items">
            <Link className='nav_item' to="/">Home</Link>
            <Link className='nav_item' to="/campaign">Campaign</Link>
            <Link className='nav_item' to="/blog">Blog</Link>
            <Link className='nav_item' to="/profile">Profile</Link>
        </div>
        <HambergerMenu  onClick={Come_forward} className="button" size="50"/>
        <div id="sidebar" className="sidebar">
          <CloseCircle onClick={Go_backward} className='close' size="60"/>
          <div className="side_item_bar">
            <Link className='side_item' onClick={Go_backward} to="/">Home</Link>
            <Link className='side_item' onClick={Go_backward} to="/tutor">Campaign</Link>
            <Link className='side_item' onClick={Go_backward} to="/blog">Blog</Link>
            <Link className='side_item' onClick={Go_backward} to="/profile">Profile</Link>

          </div>
        </div>
    </div>
  )
}
