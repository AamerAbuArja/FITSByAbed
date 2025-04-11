import React from 'react'
import Main from './Main'
import About from './About'
import Process from './Process'
import Choose from './Choose'
import Trusted from './Trusted'
import Footer from '../Footer/Footer'
import Blog from './Blog'
import Map from './Map'

const Home = () => {
  return (
    <div>
     
        <Main/>
       <About />
       <Process/>
       <Choose/>
       <Trusted/>
        <Blog/> 
       <Map/>
       <Footer />
    </div>
  )
}

export default Home