import React from 'react'
import openai from '../../assets/possibility.png'
import "./OpenAi.css"
const OpenAi = () => {
    return (
        <div>
            <div className="container-ai">

                <div className='openai-image'>
                    <img data-aos="fade-up" src={openai} width='30%' alt="" />
                </div>


                <div className='openai-content'>

                    <p data-aos="fade-up" className='p1'>Request Early Access to Get Started</p>
                    <h1 data-aos="fade-right" className='open-h1'>The possibilities are<br /> your imagination Is</h1>
                    <p data-aos="fade-left" className='p2'>Yet bed any for travelling assistance indulgence unpleasing.
                        <br />thoughts all exercise blessing. way everything joy not not
                        <br />  the attachment. Party we years to order  asked of atributes.</p>
                    <p className='p3'>Request Early Access to Get Started</p>
                </div>



                {/* <div className="buton-text1">
                    <p className='buton-p'>
                        Request Early Access to Get Started
                    </p>
                    <h1 className='buton-h1'>
                        Register today & start exploring the endless possiblities.
                    </h1>
                    <div className='buton-btnn'>
                        <button className='buton-btn'>Get Started</button>
                    </div>

                </div> */}

            </div>



        </div>
    )
}

export default OpenAi