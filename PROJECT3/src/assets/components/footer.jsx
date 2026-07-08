import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <div class="flex w-full justify-between py-7 px-10">
                <div class="px-15" >
                    <h2 class="text-lg font-bold">Funiro.</h2>
                    <p class="text-gray-400 py-10">400 University Drive Suite 200 Coral Gables, FL 33134 USA </p>
                </div>
                <div class="px-10" >
                    <p class="text-gray-400 font-semibold ">Links</p>
                    <div class="py-2"/>
                    <p class="text-black  py-4">Home</p>
                    <p class="text-black  py-4">Shop</p>
                    <p class="text-black  py-4">About</p>
                    <p class="text-black  py-4">Contact</p>
                </div>
                <div class="px-10" >
                    <p class="text-gray-400 font-semibold">Help</p>
                    <div class="py-2"/>
                    <p class="text-black  py-4">Payment Options</p>
                    <p class="text-black py-4">Returns</p>
                    <p class="text-black  py-4">Privacy Policy</p>
                    
                </div>
                <div class="px-10">
                    <p class="text-gray-400 font-semibold">Newsletter</p>
                    <div class="py-2"/>
                    <div class="flex items-end border-b border-gray-300 pb-2">
                        <input class="w-full border-none bg-transparent outline-none" placeholder="Enter Your Email Address" />
                        <div class="px-2"/>
                        <p class="ml-2 cursor-pointer text-sm font-semibold text-black">SUBSCRIBE</p>
                    </div>
                </div>
            </div>
                  <div className="border-b-2 border-opacity-15 border-black px-10"/>
                  <p class="py-10 px-10">2023 furino. All rights reserved.</p>
        </footer>
      
    </div>
  )
}

export default Footer
