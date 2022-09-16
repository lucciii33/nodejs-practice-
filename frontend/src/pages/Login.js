// import e from 'express';
import React from 'react'
import { useEffect, useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password, } = formData;
  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
const onSubmit = (e) => {
    e.preventDefault()
}

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt />
        </h1>
        <p>Please Login</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <form onSubmit={onSubmit}>
           
            <div className='form-group'>
              <input type="email" className='form-control' id="email" value={email} placeholder="enter your email" onChange={onChange} />
            </div>
            <div className='form-group'>
              <input type="password" className='form-control' id="password" value={password} placeholder="enter your password" onChange={onChange} />
            </div>
    
            <div className='form-group'>
              <button type="submit" className='form-control btn btn-block'>submit</button>
            </div>
          </form>
        </div>




      </section>

    </>
  )
}

