import React from 'react'
import './style.css'
const NavBar = ({lang, details}) => {
  return (
    <div className="navbar-main-container">
        <div className="navbar-lang">
            <span>{lang}</span>
        </div>
        <div className='navbar-websiteDetails'>
            <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="logo" width={80} height={80}/>
            <div className="navbar-userWrapper">
                <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="userIcon" width={40} height={40}/>
                <span>Hello, User</span>
            </div>
        </div>
        <div className='navbar-routes-details'>
            <div className='link-details'>
                {details.map((detail, idx) => (
                    <span className="navbar-route">{detail}</span>
                ))}
            </div>
            <div className="navbar-cart">
                <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="userIcon" width={40} height={40}/>
                <span>Cart</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar