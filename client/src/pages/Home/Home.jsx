import React from 'react'
import Slider1 from '../../components/Slider/Slider1.jsx'
import './Home.scss'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx'
import Categories from '../../components/Categories/Categories.jsx'
import Contact from '../../components/Contact/Contact.jsx'


const  Home = () => {

  return (
    <div className='home'>
      <Slider1/>
      <FeaturedProducts type = "Productos destacados"/>
      <Categories/>
      <FeaturedProducts type = "Lo último"/>
      <Contact/>
     </div> 
  )
}

export default Home