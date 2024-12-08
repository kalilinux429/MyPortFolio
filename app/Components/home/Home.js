
import React from 'react';
import "./Home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
   <section className='home container' id='home'>
   <div className='intro'>
    <img src= "./protfoli.jpg" height={145} width={160} alt='' className='home__img'/>
    <h1 className='home__name'>Suchit Kapale</h1>
    <span className='home__education'>
    I<b> I am a Full-Stack Web Developer</b>
    </span>

    <HeaderSocials/>

    <a href='#contact' className='btn'>Hire Me</a>
    <ScrollDown/>
   </div>

   {/* <Shapes/>  this is background shapes*/} 

   </section> 
  )
}

export default Home

