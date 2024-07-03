import React from 'react'
import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import Category from '../../components/Hero/Category'
import Kabinet from '../../components/Hero/Kabinet'
import Section from '../../components/Hero/Section'
import Tovar from '../../components/Hero/Tovar'
import Marquee from '../../components/Hero/Marquee'
import Brends from '../../components/Hero/Brends'
import Accordion from '../../components/Hero/Accordion'
import Kompaniye from '../../components/Hero/Kompaniye'

const Glavnaya = () => {
  return (
    <div className='bg-[#F8F7F3]'>
<Header/>    
<Slider/> 
<Category/>
<Kabinet/>
<Section/>
<Tovar/>
<Marquee/>
<Brends/>
<Accordion/>
<Kompaniye/>
    </div>
  )
}

export default Glavnaya