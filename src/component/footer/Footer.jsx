import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div>

            <div className="footer-container">
                <div className="footer-content">
                    <h1 data-aos="fade-up" className='Footer-text'>
                        Do you want to step in to the <br />future before others
                    </h1>
                    <button data-aos="fade-up" className='footer-btn'>Request Early Access</button>
              

                    <div className="footer-nav">
                        <h2 data-aos="fade-up" className='footer-h2'>
                            GPT-3
                        </h2>
                        <div className="navlinks">
                           <h4 data-aos="fade-up-right">Links</h4>
                           <h5 data-aos="fade-up-right">Oversens</h5>
                           <h5 data-aos="fade-up-right">Counter</h5>
                           <h5 data-aos="fade-up-right">Contct</h5>
                           <h5 data-aos="fade-up-right">Social Media</h5>

                           
                        </div>
                        
                        <div data-aos="fade-up-right" className="navlinks2">
                           <h4>Company</h4>
                           <h5>Terms & Condition</h5>
                           <h5>privcy & Policy</h5>
                           <h5>Contact</h5>
                         

                           
                        </div>
                        <div data-aos="fade-up-right" className="navlinks3">
                           <h4>Get in touch</h4>
                           <h5>Crechterwoord K12 182<br/> DK Alknjkcb</h5>
                           <h5>085-132567</h5>
                           <h5>info@payme.net</h5>
                         

                           
                        </div>
                    </div>
                </div>


            </div>
           
        </div>
    )
}

export default Footer