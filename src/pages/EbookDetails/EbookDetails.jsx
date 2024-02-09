import React, { useState } from 'react'
import './style.css'

const EbookDetails = () => {

    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');


    const handleSelectChange1 = (event) => {
      setSelectedOption1(event.target.value);
    };

    
    const handleSelectChange2 = (event) => {
      setSelectedOption2(event.target.value);
    };
  return (
    <div className='ebook-details-wrapper'>
        <div className='back-page'>
            <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="userIcon" width={28} height={28}/>
            <span>How to Bulk like a Beast</span>
        </div>
        <div className='main-wrapper'>
          <div className='ebook-left-wrapper'>
            <select id="selectOption1" value={selectedOption1} onChange={handleSelectChange1}>
              <option value="">Pages</option>
              <option value="page1">Page 1</option>
              <option value="page2">Page 2</option>
            </select>
            <select id="selectOption2" value={selectedOption2} onChange={handleSelectChange2}>
              <option value="">Bookmarks</option>
              <option value="bookmark1">Bookmark 1</option>
              <option value="bookmark2">Bookmark 2</option>
            </select>
          </div>
          <div className='ebook-right-wrapper'>
            <div className='header'>
                <span>Page 1-2</span>
                <div className='bookmark-wrapper'>
                  <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="userIcon" width={28} height={28}/>
                  <span>Bookmark</span>
                </div>
            </div>
            <div className='main-wrapper'>
              <img src="https://placehold.jp/1000x300.png" alt="ebooks" className='main-wrapper-img'/>
            </div>
            <div className='footer-wrapper'>
              <div className='zoom'>
                <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="userIcon" width={28} height={28}/>
                <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="userIcon" width={28} height={28}/>
              </div>
              <div className='slider-wrapper'>
                  <div>
                    <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="userIcon" width={28} height={28}/>
                    <span>Previous</span>
                  </div>
                  <div>
                    <span>Next</span>
                    <img src="https://placehold.jp/3d4070/ffffff/150x150.png" alt="userIcon" width={28} height={28}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EbookDetails