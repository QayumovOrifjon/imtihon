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
import Vopros from '../../components/Hero/Vopros'
import Email from '../../components/Email/Email'
import Footer from '../../components/Footer.jsx/Footer'

const Glavnaya = () => {
  return (
    <div className='bg-[#F8F7F3]'>
<Header/>    
<Slider/> 
<div className='mb-[150px]'><Category/></div>
<Kabinet/>
<Section/>
<Tovar/>
<Marquee/>
<Brends/>
<Accordion text='Информация о компании'/>
<Kompaniye/>
<Vopros/>
<Email/>
<Footer/>
    </div>
  )
}

export default Glavnaya