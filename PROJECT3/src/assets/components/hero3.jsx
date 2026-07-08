import React from 'react'
import hq from '../images/hq.png'
import wp from '../images/wp.png'
import fs from '../images/fs.png'
import su from '../images/su.png'

const Hero3 = () => {
  return (
    <div className="bg-amber-600/10 px-6 py-8 sm:px-10 lg:px-16">
      <div className="flex flex-wrap items-start justify-between gap-8">
        <div className="flex items-start gap-3">
          <img className="mt-1 h-6 w-6" src={hq} alt="High Quality" />
          <div>
            <p className="text-lg font-medium">High Quality</p>
            <p className="text-sm text-gray-500">Crafted from top materials</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <img className="mt-1 h-6 w-6" src={wp} alt="Warranty Protection" />
          <div>
            <p className="text-lg font-medium">Warranty Protection</p>
            <p className="text-sm text-gray-500">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <img className="mt-1 h-6 w-6" src={fs} alt="Free Shipping" />
          <div>
            <p className="text-lg font-medium">Free Shipping</p>
            <p className="text-sm text-gray-500">Order over 150$</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <img className="mt-1 h-6 w-6" src={su} alt="24/7 Support" />
          <div>
            <p className="text-lg font-medium">24 / 7 Support</p>
            <p className="text-sm text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero3
