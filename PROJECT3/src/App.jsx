import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

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
     <p>hello</p>
    </>
  )
}

export default App
