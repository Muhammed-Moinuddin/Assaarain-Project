import React from 'react';
import backgroundImage from '../assets/hero-background.png';
import icon from '../assets/warehouse-play.png';
import { PlayIcon } from '@heroicons/react/24/solid';

function HeroSection() {
  return (
    <section 
      className="bg-cover bg-center bg-no-repeat flex h-screen" 
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      <div className="hidden sm:block container text-white">
      <div className="h-full flex justify-center lg-justify-end items-center"> 
        <div className='flex bg-customLightblue ' style={{width: '95%', height: '65%'}}>
           <div className='w-4/6 bg-white flex justify-center items-center'>
                <div className='px-8'>
                    <p className="font-medium text-customLightblue font-cabin text-2xl mb-4">
                        Assarain Food Products L.L.C.
                    </p>
                    <h1 className='font-bold font-cabin text-4xl text-customDarkblue leading-10 mb-10'>
                        Oman Best Food Distributor Natural, Organic, Specialty, And Fresh.
                    </h1>
                    <button className='bg-customBlue font-openSans font-bold px-10 py-3'>
                        REQUEST A QUOTE
                    </button>
                </div>
           </div>
           <div className='w-2/6 flex justify-center items-center' style={{backgroundColor: 'rgba(0, 174, 239, 0.5)'}}>
               <div className='px-10'>
                <img src={icon} className=' mb-4'/>
                <p className="text-base font-cabin mb-4 ">
                    Video of a Warehouse How Our Distribution Process Work…
                </p>
                <p className='underline underline-offset-8 decoration-white font-openSans font-bold text-customDarkblue cursor-pointer'>Read More</p>
               </div>
           </div>
        </div>
        </div>
      </div>
      <div className="hidden lg:block container mx-auto">
      </div>
      <div className='block sm:hidden h-full w-full flex flex-col bg-customDarkblue/50 '>
        <div className='h-1/3'>
        </div>
        <div className='h-2/3 pl-6 pr-14'>
            <p className='text-white font-medium font-cabin text-xl mb-4'>Assarain Food Products L.L.C.</p>
            <h1 className='text-white text-4xl font-cabin font-bold mb-6'>Oman Best Food Distributor Natural, Organic, Specialty, And Fresh.</h1>
            <button className='font-openSans font-bold text-sm text-white bg-customLightblue px-10 py-3 mb-4'>REQUEST A QUOTE</button>
            <div className='flex w-[95%] mt-12'>
                <PlayIcon className='h-10 w-10 text-white mx-2'/>
                <p className='text-white font-cabin font-medium text-base'>Video of a Warehouse How Our Distribution Process Work…</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;