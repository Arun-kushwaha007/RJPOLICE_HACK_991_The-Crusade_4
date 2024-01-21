import './Home.css';
import React from 'react';
import Hero from '../components/Hero/hero';
import AboutSection from '../components/About/about';
import Faqs from '../components/Faq/faq';
import Footer from '../components/Footer/footer';
import Challenges from '../components/Challenges/Challenges';
import SpeakersNew from '../components/Speaker/speaker';
import Prizes from '../components/Prizes/Prizes';
import Prize from '../components/Prizes/Prizes'
 
import Timeline from '../components/Timeline/Timeline';

import Organising_team from '../components/Organising_Team/Organising_team';
import Theme from '../components/Themes/Theme';
 
import Carousel from '../components/carousel/carousel';
import Why_sponser from '../components/why_sponser/Why_sponser';
import StarsCanvas from '../canvas/Star';
import Navbar from "../components/Navbar/Navbar"
 
 
import Disclaimer from '../components/Footer/Disclaimer';
 
 
function Home() {
  return (
   <>
    <div className="relative z-0 bg-primary">
      <div className="bg-black bg-cover 
      bg-no-repeat bg-center">
   <Navbar/>
   <div className='relative z-0'>
    <StarsCanvas/>
    <Hero/> 
    </div>
 
 
    <AboutSection/>
    <Prize/>
    <Timeline/>
    <Why_sponser/>
    <Theme/>
    <Organising_team/>
    <Carousel/>
 
    <Challenges/>
    <SpeakersNew/>
    <Faqs/>
    <Footer/> 
 
    <Disclaimer/>
 
    </div>
    </div>
    
   </>
  );
}

export default Home;
