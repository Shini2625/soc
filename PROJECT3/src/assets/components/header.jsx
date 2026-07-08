import React from 'react'
import logo from './images/logo.png'
import userImage from './images/user.png'
import searchImage from './images/search.png'
import favImage from './images/fav.png'
import cartImage from './images/cart.png'


const H= () => {
  return (
    <div>
      <header class="bg-white flex justify between ">
        <nav>
          <ul>
            <li><image src={logo} alt="Logo"/></li>
              <div class="mx-auto flex justify-between w-1/2">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </div>
            
            <li><image src={userImage} alt="User"/></li>
            <li><image src={searchImage} alt="Search"/></li>
            <li><image src={favImage} alt="Favorite"/></li>
            <li><image src={cartImage} alt="Cart"/></li>
            
          </ul>
        </nav>
      </header>
      
    </div>
  )
}

export default H
