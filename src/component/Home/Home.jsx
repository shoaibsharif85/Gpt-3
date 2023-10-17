import React, { useEffect } from 'react'
import './Home.css'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'
import  google from '../../assets/google.png'
import  slack from '../../assets/slack.png'
import  shopify from '../../assets/shopify.png'
import  dropbox from '../../assets/dropbox.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
 

useEffect(()=>{
    Aos.init({duration: 2000})
},[])


  return (
    <div>
<div data-aos="fade-down" className="image">
    <img src={ai}  width='80%' height='80%' />
</div>

<div className="home-container">

<div className="text">

<h1 data-aos="fade-down" className='Home-heading'>Let’s Build Something<br/>
amazing with GPT-3 <br/>
OpenAI</h1>
<p data-aos="fade-down" className='Home-para'>
Yet bed any for travelling assistance indulgence unpleasing.<br/>
 Not thoughts all exercise blessing. Indulgence way<br/>
  everything joy alteration boisterous the attachment.<br/>
   Party we years to order allow asked of.
</p>

<div className="home-input">
       <input type="text"  placeholder='type something' />
    <div className="home-btninput">
        
        <button data-aos="fade-down" className='home-btn'>Get Started</button>
    </div>
</div>
    <div className="people">
        <img data-aos="fade-right" src={people} alt="" />
        <p className='people-p'>1,600 people requested access vists last 24 hours.....</p>
    </div>



</div>


</div>
<div className="brands">
    <div className="brands-images">
        <img data-aos="fade-down" src={google} alt="" />
    </div>
    <div className="brands-images">
        <img data-aos="fade-down" src={dropbox} alt="" />
    </div>
    <div className="brands-images">
        <img data-aos="fade-down" src={shopify} alt="" />
    </div>
    <div className="brands-images">
        <img data-aos="fade-down" src={slack} alt="" />
    </div>
</div>

    </div>
  )
}

export default Home