import React from 'react'
import hero2 from '../images/hero2.png'
import searchImage from '../images/search.png'
const Hero2 = () => {
  return (
    <div class="flex justify-center p-6 py-20">
        <img class="h-31.25rem w-43rem px-24 " src={hero2}/>
        <div >
            <button class="border-2 border-slate-400 rounded-md justify-end"> <img class="h-0.5rem w-0.5rem justify-end" src={searchImage} /> </button>
            <h2 class="text-xl font-bold">Categories</h2>
            <div class="table-row-group text-justify text-gray-400">
               <p>Crafts</p> 
               <p>2</p>
               <p>Design</p>
               <p>8</p>
               <p>Handmade</p>
               <p>7</p>
               <p>Interior</p>
               <p>1</p>
               <p>Wood</p>
               <p>6</p>
            </div> 
        </div>
      
    </div>
  )
}

export default Hero2
