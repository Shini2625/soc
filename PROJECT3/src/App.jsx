import { useState } from 'react'
import { useForm } from 'react-hook-form'

import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
     <p>hello this is to understand the react hook form</p>
     <form onSubmit={handleSubmit((data)=>console.log(data))}>
      <div>
        <label>First Name:</label>
        <input {...register('1name')}/>
      </div>
      <br/>
      <div>
        <label>Second Name:</label>
        <input {...register('2name')}/>
      </div>
     </form>
     <button onClick={handleSubmit}>
       submit
     </button>
    </>
  )
}

export default App
