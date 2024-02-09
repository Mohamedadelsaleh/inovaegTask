import React from 'react';
import './style.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='join-news'>
                <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="logo" width={80} height={80}/>
                <p>Join our Newsetter</p>
                <div className='subscribe'>
                    <input type='text' placeholder='what you are looking for ?'/>
                    <button>subscribe</button>
                </div>
            </div>
            <hr />
            <div className='footer-details'>
                <div className='social'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesett ing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <h5>Follow us on</h5>
                    <div className='social-icons'>
                        <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="userIcon" width={40} height={40}/>
                        <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="userIcon" width={40} height={40}/>
                        <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="userIcon" width={40} height={40}/>
                    </div>
                </div>
                <div className='links'>
                    <div className='links-1'>
                        <span>News</span>
                        <span>News</span>
                        <span>News</span>
                        <span>News</span>
                    </div>
                    <div className='links-2'>
                        <span>Privacy policies</span>
                        <span>Privacy policies</span>
                        <span>Privacy policies</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='copyRights'>
            <p>2024 LOGO. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer