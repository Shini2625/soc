import React from 'react'
import hero2 from '../images/hero2.png'
import searchImage from '../images/search.png'
import hero21 from '../images/hero21.png'   
import hero23 from '../images/hero23.png'
import rp1 from '../images/rp1.png'
import rp2 from '../images/rp2.png'
import rp3 from '../images/rp3.png'
import rp4 from '../images/rp4.png'
import rp5 from '../images/rp5.png'

const Hero2 = () => {
  return (
    <>
    <div className="flex justify-center p-6 py-20">
        <div className="px-15">
         <div>
          <img className="h-80 w-10/12 object-cover" src={hero2} alt="Hero 2"/>
          <h2 className="text-xl font-medium py-4">Going all-in with millenial design</h2>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.</p>
          <p className="w-fit py-2 pb-2 text-lg border-b border-black">Read more</p>
          <div className="py-4"/>
         </div>
         <div>
            <img className="h-80 w-10/12 object-cover" src={hero21}/>
            <h2 className="text-xl font-medium py-4">Exploring new ways of decorating</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.</p>
            <p className="w-fit py-2 pb-2 text-lg border-b border-black">Read more</p>
            <div className="py-4"/>
         </div>
         <div>
            <img className="h-80 w-10/12 object-cover" src={hero23}/>
            <h2 className="text-xl font-medium py-4">Handmade pieces that took time to make</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Sed euismod, nunc ut aliquam lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.</p>
            <p className="w-fit py-2 pb-2 text-lg border-b border-black">Read more</p>
            <div className="py-4"/>
         </div>
        </div>
        <div className="px-10"> 
            <button className="border-2 border-slate-300 rounded-md px-3 py-2">  <input className="outline-none" /> <img className="h-4 w-4 inline" src={searchImage} alt="Search" /> </button>
            <h2 className="text-xl font-semibold py-4">Categories</h2>
            <div className=" text-gray-400 content-center">
               <div className="flex justify-between p-2">
                <p>Crafts</p> 
                <p>2</p>
               </div>
               <div className="flex justify-between p-2">
                <p>Design</p>
                <p>8</p>
               </div>
               <div className="flex justify-between p-2">
                <p>Handmade</p>
                <p>7</p>
               </div>
               <div className="flex justify-between p-2">
                <p>Interior</p>
                <p>1</p>
               </div>
               <div className="flex justify-between p-2">
                <p>Wood</p>
                <p>6</p>
               </div> 
            </div> 
           <div className="py-2"/>
              <h2 className="text-xl font-semibold py-4">Recent posts</h2>
              <div className="gap-4 py-2">
               <div className="flex ">
                 <img className="h-20 w-20 object-cover" src={rp1}/>
                 <div>
                    <p class="text-lg font-medium px-2">Going all-in with millenial design</p>
                    <p class="text-gray-400 px-2 text-sm">03 Aug 2022</p>
                 </div>
                </div>
                <div className="flex py-2">
                 <img className="h-20 w-20 object-cover" src={rp2}/>
                 <div>
                    <p class="text-lg font-medium px-2">Exploring new ways of decorating</p>
                    <p class="text-gray-400 px-2 text-sm">03 Aug 2022</p>
                 </div>
                </div>
                <div className="flex py-2">
                 <img className="h-20 w-20 object-cover" src={rp3}/>
                 <div>
                    <p class="text-lg font-medium px-2">Handmade pieces that took time to make</p>
                    <p class="text-gray-400 px-2 text-sm">03 Aug 2022</p>
                 </div>
                </div>
                <div className="flex py-2">
                 <img className="h-20 w-20 object-cover" src={rp4}/>
                 <div>
                    <p class="text-lg font-medium px-2">Modern home in Milan</p>
                    <p class="text-gray-400 px-2 text-sm">03 Aug 2022</p>
                 </div>
                </div>
                <div className="flex py-2">
                 <img className="h-20 w-20 object-cover" src={rp5}/>
                 <div>
                    <p class="text-lg font-medium px-2">Colourful office redesign</p>
                    <p class="text-gray-400 px-2 text-sm">03 Aug 2022</p>
                 </div>
                </div>

            </div>
           
           
        </div>

      
      
    </div>
     <div className="flex justify-items-end gap-9 px-12">
        <button className="rounded-md bg-amber-300 bg-opacity-60 px-3 py-2 text-slate-800 transition hover:bg-amber-950 hover:text-white">1</button>
        <button className="rounded-md bg-amber-300 bg-opacity-60 px-3 py-2 text-slate-800 transition hover:bg-amber-950 hover:text-white">2</button>
        <button className="rounded-md bg-amber-300 bg-opacity-60 px-3 py-2 text-slate-800 transition hover:bg-amber-950 hover:text-white">3</button>
        <button className="rounded-md bg-amber-300 bg-opacity-60 px-3 py-2 text-slate-800 transition hover:bg-amber-950 hover:text-white">Next</button>
    </div>
    
    </>
  )
}

export default Hero2
