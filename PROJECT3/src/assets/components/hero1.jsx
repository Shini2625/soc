import logo1 from '../images/logo1.png'
import bgImage from '../images/bg.jpg'

const HERO1 = () => {
  return (
    <div
      className="flex h-[316px] w-screen justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <img className="mx-auto ml-[50px] h-20 w-35 pt-[30px]" src={logo1} alt="Logo" />
    </div>
  )
}

export default HERO1
