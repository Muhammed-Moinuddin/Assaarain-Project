import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import img1 from '../assets/image-16.png';
import img2 from '../assets/Layer-1.png';
import img3 from '../assets/Lutosa-2.png';
import img4 from '../assets/image-17.png';
import img5 from '../assets/Foreground.png';
import img6 from '../assets/fonterra-mobile-white-logo.png';
import img7 from '../assets/Group.png';
import img8 from '../assets/LFC-logo.png';
import img9 from '../assets/image-19.png';
import img10 from '../assets/image-16.png';
import img12 from '../assets/image-22.png';
import img13 from '../assets/image-21.png';
import img14 from '../assets/image-2.png';
import img15 from '../assets/image-23.png';




import CustomLine from './CustomLine';

// const stats=[
//     number
// ];

const AboutUsSection = () => {
    return (
        <div className="bg-customlightestBlue py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mx-auto max-w-6xl lg:text-center">
              <h2 className="text-4xl md:text-5xl font-semibold text-customBlue font-cabin mb-3 text-center">Our Brands</h2>
              <CustomLine className="mx-auto w-1"/>
              <p className="text-base text-center text-black-600 font-openSans my-12 md:px-20">
              Our way forward strategy is to work with more international brands and leverage our sales expertise and marketing skills in the market for the development of the brand & gain market share.  Below are some of our brand partners in the Retail & Foodservices sectors.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-0 md:grid-cols-5 '>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2' src={img1} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2' src={img2} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2' src={img3} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2' src={img4} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2' src={img5} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2' src={img6} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2' src={img7} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2' src={img8} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2' src={img9} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/3' src={img12} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2' src={img13} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2' src={img15} alt="" />
              </div>
              <div className='border border-blue-200 p-4 flex justify-center items-center'>
                <img className='m-auto w-1/2 ' src={img14} alt="" />
              </div>
            </div>
          </div>
        </div>
      )
};

export default AboutUsSection;