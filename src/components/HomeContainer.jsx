import React from 'react';
import ImageSlider, { Slide } from "react-auto-image-slider";
import Delivery from '../Images/delivery.png';
import Blacksoap from '../Images/blacksoap.jpg';
import Lightsoap from '../Images/lightsoap.jpg';
import Extglow from '../Images/extglow.jpg';
import Superwhite from '../Images/superwhite.jpg';
import Facecleanser from '../Images/facecleanser.jpg';
import Whitelotion from '../Images/whitelotion.jpg';

const HomeContainer = () => {
  return (
    <section id='home' className='flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-0 w-full'>
     
      <div className='py-2 flex-1 flex flex-col items-start md:items-start justify-start gap-4'>
        <div className='flex items-center gap-2 justify-center drop-shadow-md bg-pink-100 rounded-full px-2 py-1'>
          <p className='text-base text-pink-400 font-semibold'>Bike Delivery</p>
          <div className='w-7 h-7 bg-white rounded-full overflow-hidden drop-shadow-md'>
            <img 
              src={Delivery} 
              className='w-full h-full object-contain border-full border-pink-500'
              alt="delivery" 
            />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[3.5rem] md:w-[90%] font-bold tracking-wide text-headingColor'>
            Transform Your Skin with<span className='text-[3rem] lg:text-[4rem] text-pink-600'> Reign's Skincare</span>
        </p>
        <p className='text-base md:w-[90%] text-textColor text-center md:text-left'>
            Unleash the Radiant and Confident You with <span className='text-pink-600 font-semibold'>Reign's Skincare </span> 
            Range of Premium Skincare Products, Specially Formulated to Nourish, Protect and Revitalize Your Skin.
        </p>
        <button 
          type='button'
          className='px-4 py-2 mt-2 md:w-[35%] bg-pink-500 w-full text-white rounded-md hover:shadow-lg 
          transition-all ease-in-out duration-100'
          >
            Order Now
        </button>
      </div>


      <div className='w-full h-[100%] flex lg:mr-4 relative overflow-hidden '>
        <div className='absolute top-0 left-0 w-[900px] h-[900px] bg-rose-300 rounded-full z-30'></div>
        <div className='absolute bottom-10 left-10 w-[800px] h-[800px] bg-pink-200 backdrop-opacity-30 rounded-full z-30'></div>
        <div className='absolute w-full flex object-cover z-50'>
          <ImageSlider className="w-full md:h-[70%] overflow-hidden " effectDelay={500} autoPlayDelay={2000}>
            <Slide>
              <img className='object-contain w-full h-full ' alt="img1" src={Blacksoap} />
            </Slide>
            <Slide>
              <img className='object-contain w-full h-full' alt="img2" src={Lightsoap} />
            </Slide>
            <Slide>
              <img className='object-contain w-full h-full' alt="img2" src={Extglow} />
            </Slide>
            <Slide>
              <img className='object-contain w-full h-full' alt="img2" src={Superwhite} />
            </Slide>
            <Slide>
              <img className='object-contain w-full h-full' alt="img2" src={Facecleanser} />
            </Slide>
            <Slide>
              <img className='object-contain w-full h-full' alt="img2" src={Whitelotion} />
            </Slide>
          </ImageSlider>
        </div>
      </div>  

    </section>
  )
}

export default HomeContainer