import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import './style.css';

const Home = () => {
  return (
    <div className="home">
        <div className="slider">
            <p></p>
            <img src="https://placehold.jp/500x300.png" alt="slider"/>
        </div>
        <div className="latest-news">
            <h2>LATEST NEWS</h2>
            <img src="https://placehold.jp/500x300.png" alt="news"/>
        </div>
        <div className="explore-our-courses">
            <h2>EXPLORE OUR COURSES
            </h2>
            <img src="https://placehold.jp/500x300.png" alt="courses"/>
        </div>
        <div className="explore-our-ebooks">
            <h2>EXPLORE OUR E-BOOKS
            </h2>
            <img src="https://placehold.jp/500x300.png" alt="ebooks"/>
        </div>
        <div className="our-advantages">
            <h2>OUR ADVANTAGES
            </h2>
            <img src="https://placehold.jp/500x300.png" alt="advantages"/>
        </div>
        <div className="contact-us">
            <h2>ABOUT US
            </h2>
            <img src="https://placehold.jp/500x300.png" alt="contact"/>
        </div>
    </div>
  )
}

export default Home