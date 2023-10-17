import React from 'react'

import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import Gpt from './component/Gpt/Gpt'
import Library from './component/Liberary/Library'
import OpenAi from './component/Open AI/OpenAi'
import Studies from './component/Studies/Studies'
import Footer from './component/footer/Footer'

function App() {


  return (
    <>
     <Navbar/> 
     <Home/>
     <Gpt/>
     <Library/>
     <OpenAi/>
     <Studies/>
     <Footer/>
    </>
  )
}

export default App
