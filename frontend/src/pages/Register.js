import React from 'react'
import { useEffect, useState } from 'react'
import {FaUser} from 'react-icons/fa'

export default function Register() {
  const [formData, setFormData] =  useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })
  const {name,email,password,password2} = formData;
  const onChange = ()=>{

  }
  return (
    <> 
    <section className='heading'>
      <h1>
        <FaUser/>
      </h1>
      <p>Please create an account</p>
    </section>

    <section className='form'>
    <div className='form-group'>
    <form>
      <input type="text" className='form-control' id="name" value={name} placeholder="enter your name" onChange={onChange}/>
    </form>
    </div>

    <div className='form-group'>
    <form>
      <input type="email" className='form-control' id="email" value={email} placeholder="enter your email" onChange={onChange}/>
    </form>
    </div>

    <div className='form-group'>
    <form>
      <input type="password" className='form-control' id="password" value={password} placeholder="enter your password" onChange={onChange}/>
    </form>
    </div>

    <div className='form-group'>
    <form>
      <input type="password" className='form-control' id="password2" value={password2} placeholder="confirm your password" onChange={onChange}/>
    </form>
    </div>

    </section>
    
    </>
  )
}
