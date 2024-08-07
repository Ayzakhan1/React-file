import React from 'react'
import logo from './../../accests/images/main-logo.svg';
import searchicon from './../../accests/images/search.svg';
import hearticon from './../../accests/images/heart.svg';
import bagicon from './../../accests/images/shopping-bag.svg';
import crownicon from './../../accests/images/crown-icon.svg'

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="Herader_container">
            <div className="menu">
              <div className="logo">
                <img src={logo} />
              </div>
              <div className="nav">
                <ul>
                  <li className='active_class'>Home</li>
                  <li>About Us</li>
                  <li>Explore</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="user">
              <ul>
                <li>
                  <img src={searchicon}></img>
                </li>
                <li>
                  <img src={hearticon}></img>
                </li>
                <li>
                  <img src={bagicon}></img>
                </li>
                <li>
                  <button className='upgrade_btn'>
                  <img src={crownicon}></img>
                  <span>Upgrade Pro</span>
                  </button>
                </li>
                <li>
                  <button className='signin_btn'>
                    Sign In
                    </button>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}





export default Header
