import React from 'react'
import logo from '../images/amazon_logo.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <button className='btn-top' >Back To Top</button>
        </div>
       
        <div className="footer-middle">
           <div className='item'>
            <h3>Get To Know Us</h3>
            <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Devices</li>
                <li>Amazon Science</li>
            </ul>
           </div>
           <div className='item'>
            <h3>Get To Know Us</h3>
            <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Devices</li>
                <li>Amazon Science</li>
            </ul>
           </div>
           <div className='item'>
            <h3>Get To Know Us</h3>
            <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Devices</li>
                <li>Amazon Science</li>
            </ul>
           </div>
           <div className='item'>
            <h3>Get To Know Us</h3>
            <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Devices</li>
                <li>Amazon Science</li>
            </ul>
           </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <div className="footer-logo">
            <img src={logo} alt="" />
            </div>
            <div className='footer-buttons'>
            <button className='btn'>English</button>
            <button className='btn'>$ USD- U.S Dollar</button>
            <button className='btn'>United States</button>
            </div>
            
        </div>
    </div>
  )
}

export default Footer