import React from 'react'
import logo1 from '../images/logo1.png'
import bgImage from '../images/bg.png'

const HERO1 = () => {
  return (
    <div
      className="relative h-[316px] w-screen overflow-hidden font-thin"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/20" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3">
        <img className="h-10 w-25" src={logo1} alt="Logo" />
        <h1 className="text-4xl font-medium text-black tracking-wide">Blog</h1>
        <div className="flex items-center gap-4">
            <h3 className="font-small text-sm text-black font-normal">Home {">"}</h3>
            <h3 className="font-small text-sm text-gray-900 font-normal">Blog</h3>
        </div>
        
      </div>
    </div>
  )
}

export default HERO1
