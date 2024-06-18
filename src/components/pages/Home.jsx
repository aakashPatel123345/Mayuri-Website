import React from 'react'
import '../../index.css'
import home_page_image from '../../assets/home-page-image.jpg'
import aakash_p from '../../assets/board_member_pictures/aakash_p.jpg'
import aditi_g from '../../assets/board_member_pictures/aditi_g.jpg'
import akash_m from '../../assets/board_member_pictures/akash_m.jpg'
import ishaan_b from '../../assets/board_member_pictures/ishaan_b.jpg'
import jayna_p from '../../assets/board_member_pictures/jayna_p.jpg'
import nitya_v from '../../assets/board_member_pictures/nitya_v.jpg'
import pratiksha_d from '../../assets/board_member_pictures/pratiksha_d.jpg'
import sakshi_s from '../../assets/board_member_pictures/sakshi_s.jpg'
import sanjana_c from '../../assets/board_member_pictures/sanjana_c.jpg'
import sanjana_s from '../../assets/board_member_pictures/sanjana_s.jpg'
import sashu_p from '../../assets/board_member_pictures/sashu_p.jpg'
import shreya_g from '../../assets/board_member_pictures/shreya_g.jpg'
import srinidhi_g from '../../assets/board_member_pictures/srinidhi_g.jpg'
import surya_u from '../../assets/board_member_pictures/surya_u.jpg'
import teja_n from '../../assets/board_member_pictures/teja_n.jpg'

import giridhar_s from '../../assets/board_member_pictures/person_placeholder.jpg'
import saathu_n from '../../assets/board_member_pictures/person_placeholder.jpg'
import arya_g from '../../assets/board_member_pictures/person_placeholder.jpg'
import mahathi_c from '../../assets/board_member_pictures/person_placeholder.jpg'
import dhruvi_k from '../../assets/board_member_pictures/person_placeholder.jpg'
import rushina_p from '../../assets/board_member_pictures/person_placeholder.jpg'
import riyanna_d from '../../assets/board_member_pictures/person_placeholder.jpg'
import jiya_a from '../../assets/board_member_pictures/person_placeholder.jpg'
import aditya_p from '../../assets/board_member_pictures/person_placeholder.jpg'

import tba from '../../assets/board_member_pictures/person_placeholder.jpg'
import peacock_image from '../../assets/peacock_icon.png'


const Home = () => {
  const handleSmoothScroll = () => {
    const bottomSection = document.querySelector('.bottom-section'); 
    bottomSection.scrollIntoView({ behavior: 'smooth' });
  }

  const boardMembers = [
    { name: "Aakash Patel", position: "Director", image: aakash_p },
    { name: "Pratiksha Das", position: "Director", image: pratiksha_d },
    { name: "Sanjana Chimaladinne", position: "Director", image: sanjana_c },

    { name: "Teja Nallagorla", position: "Event Ops", image: teja_n },
    { name: "Shreya Gavarapattu", position: "Event Ops", image: shreya_g },

    { name: "Giridhar Sawhney", position: "Registration", image: giridhar_s },
    { name: "Saathu Nagareddy", position: "Registration", image: saathu_n },


    { name: "Sakshi Shetty ", position: "Hospitality", image: sakshi_s },
    { name: "Nitya Venkatiagari", position: "Hospitality", image:  nitya_v },
    { name: "Arya Ghorpade", position: "Hospitality", image: arya_g },
    { name: "TBA", position: "Hospitality", image: tba },

    { name: "Sashu Prakash", position: "Technology", image: sashu_p },
    { name: "Mahathi Chintapalli", position: "Technology", image: mahathi_c },
    { name: "Ishaan Bhardvaj", position: "Technology", image: ishaan_b },

    { name: "Srinidhi Gubba", position: "Judging", image: srinidhi_g },
    { name: "TBA", position: "Judging", image: tba },

    { name: "Akash Marakath", position: "Sponsorship", image: akash_m },
    { name: "Sanjana Shankar", position: "Sponsorship", image: sanjana_s },
    { name: "Aditya Patel", position: "Sponsorship", image: aditya_p },
    { name: "Dhruvi Kadhiwala", position: "Sponsorship", image: dhruvi_k }, 

    { name: "Rushina Patel", position: "Public Relations", image: rushina_p }, 
    { name: "TBA", position: "Public Relations", image: tba }, 
    { name: "TBA", position: "Public Relations", image: tba }, 

    { name: "Jayna Patel", position: "Liaison Head", image: jayna_p }, 
    { name: "Riyanna Desai", position: "Liaison Head", image: riyanna_d }, 

    { name: "Jiya Amin", position: "Social Chair", image: jiya_a }, 

    { name: "Aditi Gubba", position: "Mixer", image: aditi_g }, 
    { name: "Surya UdayShankar", position: "Mixer", image: surya_u }
  ];

  
  return (
    <div>
      <div className='home-container'>
          <div className='heading-container'>
            <h1 className='homepage-heading'>Maryland Mayuri</h1>
              <div className="scroll-down">
                <img src={peacock_image} onClick={handleSmoothScroll} className="scroll-down-image"/>
              </div>
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

      <div className="classical-section">
        <div className="classical-section-content">
          <h1 className="classical-section-heading">Classical Dance</h1>
          <p className="classical-section-text">
            Classical Indian dance goes back thousands of years and is deeply rooted in Indian culture. 
            It is a form of storytelling that combines music, dance, and drama. 
            There are eight classical dance forms in India, each with its own unique style and technique. 
            Some of the most popular classical dance forms include Bharatanatyam, Kathak, Odissi, and Kuchipudi.
          </p>
        </div>
      </div>

    <div className="board_section">
      <div className="board_section_heading">
        <h1>Meet Our Board!</h1>
      </div>

      <div className="board_images">
          {boardMembers.map((member, index) => (
            <div className="board_card" key={index}>
              <img src={member.image} alt={member.name} className="board_image"/>
              <div className="board_member_info">
                <p className="board_member_name">{member.name}</p>
                <p className="board_member_position">{member.position}</p>
              </div>
            </div>
          ))}
      </div>
    </div>

    </div>

  )
}

export default Home