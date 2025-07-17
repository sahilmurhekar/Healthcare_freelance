import React from 'react'
import Navbar from '../components/Navbar';
import BlurText from "../components/BlurText";
import ShinyText from '../components/ShinyText';
import Carousel from '../components/Carousal';
import Aurora from '../components/Aurora';
import CurvedLoop from '../components/CurvedLoop';
import Magnet from '../components/Magnet';
import TiltedCard from '../components/TiltedCard';
import Footer from '../components/Footer';
import aboutpic from '../assets/pic3.png';
import product1 from '../assets/Venticure_plus.png';
import product2 from '../assets/Babycure.jpg';

const Home = () => {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <div className='flex flex-col items-center justify-center'>
      
      <Aurora
  colorStops={["#111111", "#2BF338", "#111111"]}
  blend={0.4}
  amplitude={0.1}
  speed={0.5}
/>
    <Navbar />
   <div id='hero-section' className='flex flex-col lg:flex-row items-center lg:items-start lg:justify-start justify-center mt-60 lg:mt-72 z-10 px-[5%] lg:px-[10%] lg:gap-32'>
    <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start text-center lg:text-left gap-6 lg:mt-8' >
     <BlurText
  text="Empowering Breath Through Innovation"
  delay={150}
  animateBy="words"
  direction="top"
  className="items-center justify-center lg:items-start lg:justify-start text-4xl px-8 lg:px-0 font-black md:text-6xl lg:text-7xl"/>
      <h3 className='font-black text-center lg:text-left md:text-xl'>Engineering Every Breath</h3>
      <ShinyText text="Driven by clinical excellence and cutting-edge engineering, we craft intelligent ventilators and anaesthesia systems. Our mission is simple—deliver life-saving precision where every breath counts." disabled={false} speed={3} className='custom-class md:text-xl md:w-[560px]' />
    <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4'>
       <a className='btn bg-[#46C70098] w-[180px] h-[45px] text-md font-black hover:bg-[#46C70070] transition-all ease-in-out'>
      Explore Us!
    </a>
    <a className='btn w-[180px] h-[45px] text-md font-black'>
      Our Products
    </a>
    </div>
    </div>
    <div className='flex items-center justify-center mt-16 lg:mt-8'>
      <div>
        <Magnet padding={50} disabled={false} magnetStrength={5}>
  <Carousel  />
  </Magnet>
</div>
    </div>
    </div>

  <CurvedLoop className='opacity-50' marqueeText="Team ✦ Engineers ✦ Medical ✦" />

 <div id='about' className='flex flex-col items-center justify-center w-full lg:justify-between pt-16 md:pt-42 lg:pt-86 z-10 px-[5%] lg:px-[10%]'>
  <div>
   <h1 className='text-center text-4xl md:text-7xl font-black'>About Us</h1>
   <ShinyText text="At the heart of our innovation lies a powerful collaboration between seasoned experts and next-generation thinkers. Our team brings together decades of experience in clinical care, engineering design, and medical manufacturing—ensuring uncompromised safety, performance, and reliability in every device we build. But we don’t stop there. Our young innovators are actively integrating AI, IoT, and data-driven insights to elevate traditional systems into intelligent, responsive solutions. This unique synergy fuels a culture of continuous improvement, enabling us to meet today's critical care demands while shaping the medical technologies of tomorrow." disabled={false} speed={3} className='custom-class mt-8 md:text-xl text-center md:w-[720px] lg:w-[1080px]' />
  <h3 className='mt-4 font-black text-center md:text-xl'>Trust Through Experience. Powered by Innovation.</h3>
    </div>
    <div className='flex items-center justify-center p-8 mt-8'>
      <Magnet padding={50} disabled={false} magnetStrength={5}>
      <img className="rounded-xl shadow-md w-[60vw] lg:w-[30vw]" src={aboutpic} alt="" />
      </Magnet>
    </div>
 </div>

 <div id='products' className='flex flex-col items-center justify-center w-full pt-16 md:pt-32 lg:pt-48 z-10 px-[5%] lg:px-[10%]'>
  <div className='w-full'>
    <h1 className='text-center text-4xl md:text-7xl font-black'>Our Products</h1>
    <h3 className='mt-8 font-black text-center md:text-xl'>Let Our Products Speak – With Every Demo</h3>
  </div>
  <div className='flex flex-col items-center justify-center lg:justify-between gap-32 my-32'>
    <div className='flex flex-row flex-wrap lg:flex-nowrap items-start justify-center gap-16'>
    <TiltedCard
  imageSrc={product1}
  captionText="Venticure Plus - Advanced Ventilator"
  containerHeight="400px"
  containerWidth="300px"
  imageHeight="400px"
  imageWidth="300px"
  rotateAmplitude={20}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
/>
<div className='flex flex-col items-center lg:items-start justify-center gap-4 px-4 md:px-16 lg:py-16'>
  <h1 className='text-3xl md:text-5xl font-bold text-center lg:text-left'>Venticure Plus</h1>
  <p className='text-center md:text-2xl lg:text-left lg:w-[640px]'>Versatile ventilator for pediatric to adult care with control, assisted, support, dual, switch modes, and integrated HFNC.</p>
<a className='btn w-[180px] h-[45px] text-md font-black'>
      View More →
    </a>
</div>
</div>
<div className='flex flex-row-reverse flex-wrap lg:flex-nowrap items-start justify-center gap-16'>
    <TiltedCard
  imageSrc={product2}
  captionText="Babycure - Advanced Neonatal Ventilator"
  containerHeight="400px"
  containerWidth="300px"
  imageHeight="400px"
  imageWidth="300px"
  rotateAmplitude={20}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
/>
<div className='flex flex-col items-center lg:items-end justify-center gap-4 px-4 md:px-16 lg:py-16'>
  <h1 className='text-3xl md:text-5xl font-bold text-center lg:text-right'>Babycure</h1>
  <p className='text-center md:text-2xl lg:text-right lg:w-[640px]'>Advanced ventilator for neonatal to pediatric patients with control, assisted, support modes, HFOV, and HFNC support.</p>
<a className='btn w-[180px] h-[45px] text-md font-black'>
      View More →
    </a>
</div>
</div>
<div className=' rounded-4xl border bg-[#11111190] py-4 px-8'>
<ShinyText text="Anaesthesia Workstation: Coming Soon..!" disabled={false} speed={3} className='custom-class text-lg ' />
</div>
 </div>
</div>


<div id='contact' className='w-full flex flex-col items-center justify-center pt-16 md:pt-32 lg:pt-48 z-10 px-[5%] lg:px-[10%]'>
    <h1 className='text-center text-4xl md:text-7xl font-black'>Contact Us</h1>

    <form action='#' method='POST' className='flex flex-col items-center justify-center gap-4 mt-32 w-full max-w-2xl'>
      <input type="text" placeholder="Full Name" className="w-full bg-base-200 rounded-md py-4 px-8" />
      <input type="email" placeholder="Email" className="w-full bg-base-200 rounded-md py-4 px-8" />
      <input type="text" placeholder="Phone" className="w-full bg-base-200 rounded-md py-4 px-8" />
      <textarea className="w-full h-[180px] bg-base-200 rounded-md py-4 px-8" placeholder="Message"></textarea>
      <button type='submit' className='btn bg-[#46C70098] w-[180px] h-[45px] text-md font-black hover:bg-[#46C70070] transition-all ease-in-out'>Send Message</button>
    </form>
</div>

<Footer/>

 </div>
  )
}

export default Home