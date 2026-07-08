import React from 'react'
import hero2 from '../images/hero2.png'

const Hero2 = () => {
  return (
    <div class="flex-col justify-center p-6">
        <image src={hero2}/>
        <div>
            <button class="border-s-2 rounded-md"> </button>
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
