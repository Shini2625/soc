import './App.css'
import Header from './assets/components/header.jsx'
import HERO1 from './assets/components/hero1.jsx'
import Hero2 from './assets/components/hero2.jsx'
import Hero3 from './assets/components/hero3.jsx'
import Footer from './assets/components/footer.jsx'

function App() {
  return (
    <>
      <Header />
      < HERO1 />
      < Hero2/>
      <div className="py-8"/>
      < Hero3/>
      <div className="py-4"/>
      <div className="border-b-2 border-opacity-20 border-black"/>
     <Footer />
      <p>helloooooooo</p>
    </>
  )
}

export default App
