import React from 'react'
import "./nav.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='nav'>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </div>
      <div
        onClick={() => {
          navigate("/puppPage");
        }}
      >
        PappyPage
      </div>
      <div
        onClick={() => {
          navigate("/search");
        }}
      >
        Search
      </div>
    </div>
  )
}

export default Navbar
