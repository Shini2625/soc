import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [quote, setQuote] = useState([])
  const [no , setNo]=useState()
  const handleinput=(e)=>{
    setNo(e.target.value);
  };

  useEffect(()=>{
    axios.get(`/api/quote/${no}`)
      .then(res => setQuote(res.data))
      .catch(err => console.log(err));
  }, [no]);

  return (
    <>
      <h1>hello this is an example to retrieve an item from the array</h1> 
      <p>QUOTES: {quote.length}</p>
      <input value={no} onChange={handleinput} placeholder='enter the id of quote u want to see'/>

      {
        quote.map((quote, index)=>{
          <div key={quote.id}>
             <p>{quote.text}</p>
          </div>
        })
      }
    </>
  )
}

export default App
