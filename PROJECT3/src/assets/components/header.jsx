import logo from '../images/logo.png'
import userImage from '../images/login.png'
import searchImage from '../images/search.png'
import favImage from '../images/fav.png'
import cartImage from '../images/cart.png'

const H = () => {
  return (
    <header className="flex items-center justify-between bg-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-8 w-8" />
       
      </div>

      <nav>
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="flex gap-3">
        <img src={userImage} alt="User" className="h-6 w-6" />
        <img src={searchImage} alt="Search" className="h-6 w-6" />
        <img src={favImage} alt="Favorite" className="h-6 w-6" />
        <img src={cartImage} alt="Cart" className="h-6 w-6" />
      </div>
    </header>
  )
}

export default H
