import React from 'react'
import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'
import './Studies.css'
const Studies = () => {
    return (
        <div>

            <div className="studies-container">
                <div className='studies-text'>
                    <h1 data-aos="fade-up" className='studies-text-h1'> A lot is happening,<br />
                        We are blogging about it.</h1>

                </div>
                <div data-aos="flip-left" className='studies-blog'>
                    <img data-aos="fade-up" src={blog01} width='400px' alt="" />
                    <div className="studies-blog-text">
                        <p data-aos="fade-up" className='blog-p'>25-sep-2023</p>
                        <h2 data-aos="fade-up" className='blog-h2'>GPT-3 and Open  AI is the future.<br /> Let us exlore how it is?</h2>
                        <p data-aos="fade-up" className='blog-p2'>Read Full Article</p>
                    </div>
                </div>
                <div className='bloges'>
                    <div data-aos="flip-left" className='blog-content'>
                        <img data-aos="fade-up" src={blog02} width='400px' alt="" />
                        <p className='blogs-p'>
                        Sep 26, 2021
                        </p>
                        <h2 data-aos="fade-up" className='blogs-h2'>
                        GPT-3 and Open  AI is the<br/> future. Let us exlore how it is?
                        </h2>
                        <p data-aos="fade-up" className='blogs-p2'>Read Full Article</p>
                    </div>
                   
                    <div data-aos="flip-left" className='blog-content'>
                        <img data-aos="fade-up" src={blog03} width='400px' alt="" />
                        <p className='blogs-p'>
                        Sep 26, 2021
                        </p>
                        <h2 data-aos="fade-up" className='blogs-h2'>
                        GPT-3 and Open  AI is the <br/>future. Let us exlore how it is?
                        </h2>
                        <p data-aos="fade-up" className='blogs-p2'>Read Full Article</p>
                    </div>
                   
                    <div data-aos="flip-left" className='blog-content'>
                        <img data-aos="fade-up" src={blog04} width='400px' alt="" />
                        <p data-aos="fade-up" className='blogs-p'>
                        Sep 26, 2021
                        </p>
                        <h2 data-aos="fade-up" className='blogs-h2'>
                        GPT-3 and Open  AI is the <br/>future. Let us exlore how it is?
                        </h2>
                        <p data-aos="fade-up" className='blogs-p2'>Read Full Article</p>
                    </div>
                   
                    <div data-aos="flip-left" className='blog-content'>
                        <img data-aos="fade-up" src={blog05} width='400px' alt="" />
                        <p data-aos="fade-right" className='blogs-p'>
                        Sep 26, 2021
                        </p>
                        <h2 data-aos="fade-left" className='blogs-h2'>
                        GPT-3 and Open  AI is the <br/>future. Let us exlore how it is?
                        </h2>
                        <p data-aos="fade-right" className='blogs-p2'>Read Full Article</p>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}

export default Studies