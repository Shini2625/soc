import logo from '../images/logo.png'
import userImage from '../images/login.png'
import searchImage from '../images/search.png'
import favImage from '../images/fav.png'
import cartImage from '../images/cart.png'

const H = () => {
  return (
    <header class="flex items-center justify-between bg-white">
  
        <img class="h-20 w-35"src={logo} alt="Logo" />
       
  

      <nav>
        <ul class="flex items-center gap-6 text-sm font-medium">
          <li class="hover:text-amber-900 cursor-pointer">Home</li>
          <li class="hover:text-amber-900 cursor-pointer">Shop</li>
          <li class="hover:text-amber-900 cursor-pointer">About</li>
          <li class="hover:text-amber-900 cursor-pointer">Contact</li>
        </ul>
      </nav>

      <div class="flex items-center gap-3 group">
        <img  class="h-6 w-6 "  src={userImage}/>
        <img  class="h-6 w-6" src={searchImage}/>
        <img class="mt-[-4px] h-6 w-6" src={favImage}/>
        <img  class="h-6 w-6" src={cartImage}/>
      </div>
    </header>
  )
}

export default H
