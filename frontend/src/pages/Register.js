import React from 'react'
import { useEffect, useState } from 'react'

export default function Register() {
  const [formData, setFormData] =  useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })
  const {name,email,password,password2} = formData;
  return (
    <div>Register</div>
  )
}