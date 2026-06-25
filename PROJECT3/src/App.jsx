import { useState } from 'react'
import { useForm } from 'react-hook-form'

import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
   async function submitFn(data){
    await new Promise((resolve)=>setTimeout(resolve, 5000))
    alert("you have submitted the form");
    console.log(data);
  }
  return (
    <>
     <p>hello this is to understand the react hook form</p>
     <form onSubmit={handleSubmit(submitFn)}>
      <div>
        <label>First Name:</label>
        <input {...register('name1')}/>
      </div>
      <br/>
      <div>
        <label>Second Name:</label>
        <input className={errors.name2 ? "iner" : ""}
        {...register('name2', {required:true, minLength:{value:5, message:"enter more than 5 chars"}, maxLength:{value:27, message:"enter less than 27 chars"}})}/>
        {errors.name2 && <p className="errmsg" >{errors.name2.message}</p>}
      </div>
     
     <button type="submit" disabled={isSubmitting}
     value={isSubmitting ? "submitting" : "submit"} >
       submit
     </button>
     </form>
    </>
  )
}

export default App
