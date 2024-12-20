import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import CustomLine from './CustomLine';

// const stats=[
//     number
// ];

const AboutUsSection = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-6xl lg:text-center">
              <h2 className="text-5xl font-semibold text-customBlue font-cabin mb-3">About Us</h2>
              <CustomLine className="mx-auto"/>
              <p className="mt-6 text-base text-gray-600 font-openSans mt-8">
                In acknowledgement of the basic premise that good food leads to good health and well-being, Assarain Food Products LLC, occupies a place of pride among the market leaders in the Omani industry of Fast Moving Consumer Goods (FMCG), founded on a reputation built over four decades of excellence in food products and operations. Setting high benchmarks for other local competitors, we are the first FMCG sales and distribution company to acquire ISO 22000:2005 Certification for Food Safety Management Systems within the Sultanate.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {/* {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-gray-900">
                      <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                  </div>
                ))} */}
              </dl>
            </div>
          </div>
        </div>
      )
};

export default AboutUsSection;