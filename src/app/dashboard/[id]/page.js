"use client"

import React, { useState } from 'react'

export default function SingleID({params}){
  const [name, setName] =  useState("") 
  const [time, setTime] =  useState("") 
  const handleSubmit = () =>{
      console.log(name, time, params.id)
      
  }
  
  
  return (
    
  <div className='flex flex-col w-fit '>
   <label htmlFor='name'>Jméno</label>
  <input className='bg-black text-white' value={name} onChange={(e) => setName(e.target.value) }></input>
  <label htmlFor='time'>Time</label>
  <input className='bg-black text-white' onChange={(e) => setTime(e.target.value) }></input>
  <button className='rounded-full bg-black text-white px-3 py-3' onClick={handleSubmit}>Potvrdit</button>

  </div>
  )
}
