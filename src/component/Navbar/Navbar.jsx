import React from 'react'
import './Navbar.css'
const Navbar = () => {
   



    return (
        <div>
              <div className='icon'>
            <i className='cross' class="fa-solid fa-bars-staggered"></i>
        </div>
            <h2 className='logo'>GPT-3</h2>

            <div className="navbar-container">

                <div data-aos="fade-up" className="navbar">

                    <ul>

                        <li>Home</li>
                        <li>What is GPT?</li>
                        <li>Open AI</li>
                        <li>Case Studies</li>
                        <li>Liberary</li>
                        <div className='nav-btn'>
                            <button className='navbar-btn'>LOg IN</button>
                            <button className='navbar-btn2'>SIgN Up</button>
                        </div>
                    </ul>

                </div>

            </div>





        </div>
    )
}

export default Navbar