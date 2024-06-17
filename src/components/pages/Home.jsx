import React from 'react'
import '../../index.css'
import home_page_image from '../../assets/home-page-image.jpg'

const Home = () => {
  const handleSmoothScroll = () => {
    const bottomSection = document.querySelector('.bottom-section'); 
    bottomSection.scrollIntoView({ behavior: 'smooth' });
  }

  const boardMembers = [
    { name: "Aakash Patel", position: "Director", image: "" },
    { name: "Pratiksha Das", position: "Director", image: "" },
    { name: "Sanjana Chimaladinne", position: "Director", image: "" },

    { name: "Teja Nallagorla", position: "Event Ops", image: "" },
    { name: "Shreya Gavarapattu", position: "Event Ops", image: "" },

    { name: "Giridhar Sawhney", position: "Registration", image: "" },
    { name: "Saathu Nagareddy", position: "Registration", image: "" },


    { name: "Sakshi Shetty ", position: "Hospitality", image: "" },
    { name: "Nitya Venkatiagari", position: "Hospitality", image: "" },
    { name: "Arya Ghorpade", position: "Hospitality", image: "" },
    { name: "TBA", position: "Hospitality", image: "" },

  ];

  
  return (
    <div>
      <div className='home-container'>
          <div>
            <h1 className='homepage_heading'>Maryland Mayuri</h1>
            <button onClick={handleSmoothScroll} className='explore_button'>Who Are We</button>
          </div>
      </div>

      
      <div className="bottom-section">
        <div className="bottom-section-content">
          <h1 className="bottom-section-heading">Who Are We</h1>
          <p className="bottom-section-text">
            Maryland Mayuri is a non-profit organization that aims to promote Indian culture through dance, music, and art. We host events, workshops, and classes to educate and entertain the community. Our goal is to provide a platform for artists to showcase their talent and for the community to come together and celebrate Indian culture.
          </p>
        </div>

        <img src={home_page_image} alt="Maryland Mayuri" className="home-page-image" />
      </div>

    <div className="board_section">
      <div className="board_section_heading">
        <h1>Meet Our Board!</h1>
      </div>

      <div className="board_images">
        <div className="board_image">
          <img src="https://via.placeholder.com/150" alt="Board Member" />
          <p>Board Member 1</p>
        </div>
        <div className="board_image">
          <img src="https://via.placeholder.com/150" alt="Board Member" />
          <p>Board Member 2</p>
        </div>
        <div className="board_image">
          <img src="https://via.placeholder.com/150" alt="Board Member" />
          <p>Board Member 3</p>
        </div>
        <div className="board_image">
          <img src="https://via.placeholder.com/150" alt="Board Member" />
          <p>Board Member 4</p>
        </div>
      </div>
    </div>

    </div>

  )
}

export default Home