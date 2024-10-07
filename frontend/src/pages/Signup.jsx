import React, { useState } from 'react'
import signupImg from '../assets/images/signup.gif';
import avatar from "../assets/images/doctor-img01.png"
import { Link } from "react-router-dom"


const Signup = () => {

  const [selectedFile, setSelectedFile] = useState(null)
  const [previewURL, setPreviewURL] = useState("")

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    photo:selectedFile,
    gender:"",
    role:"patient"
  })

  const handleInputChange = e =>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleFileInputChange = async event => {
    const file = event.target.files[0]
    //later we will use cloudinary to upload images

  }

  const submitHandler = async event =>{
    event.preventDefault()
  }

  return (
    <section className="px-2 xl:px-0">
      <div className="max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ============== img box =============== */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className='w-full h-[400px] rounded-l-lg' />
            </figure>
          </div>

          {/* ============= sign up form =================== */}
          <div className="rounded-lg lg:pl-8 py-5">
            <h3 className="text-headingColor text-[18px] leading-7 font-bold mb-5">
              Create an <span className='text-primaryColor'>account</span>
            </h3>

            <form action="" onChange={submitHandler}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-2 py-2 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[14px] leading-6 text-headingColor placeholder:text-textColor cursor-pointer "
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-2 py-2 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[14px] leading-6 text-headingColor placeholder:text-textColor cursor-pointer "
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  name='password'
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-2 py-2 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[14px] leading-6 text-headingColor placeholder:text-textColor cursor-pointer "
                  required
                />
              </div>

              <div className="mb-4 flex items-center justify-between">
                <label
                  className='text-headingColor font-bold text-[14px] leading-6'>
                  Are you a:
                  <select 
                  name="role" 
                  value={formData.role}
                  onChange={handleInputChange}
                  className='text-textColor font-semibold text-[13px] leading-6 px-2 py-2 focus:outline-none'>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label
                  className='text-headingColor font-bold text-[14px] leading-6'>
                  Gender:
                  <select 
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange} 
                  className='text-textColor font-semibold text-[13px] leading-6 px-2 py-2 focus:outline-none'>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <figure className="w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={avatar} alt="" className='w-full rounded-full' />
                </figure>

                <div className='relative w-[110px] h-[40px]'>
                  <input 
                  type="file" 
                  name='photo'
                  id='customFile'
                  onChange={handleFileInputChange}
                  accept='.jpg, .png'
                  className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  />

                  <label 
                  htmlFor="customFile"
                  className='absolute top-0 left-0 w-full h-full flex items-center px-[0.5rem] py-[0.25rem] text-[13px] leading-5 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'
                  >
                    Upload Photo</label>
                </div>
              </div>

              <div className="mt-5">
                <button type="submit" className="w-full bg-primaryColor text-white text-[16px] leading-[26px] rounded-lg px-2 py-2">
                  Sign Up 
                </button>
              </div>

              <p className="mt-3 text-textColor text-center">
                Already have an account? <Link to= '/login' className="text-primaryColor font-medium ml-1">Login</Link>
              </p>

            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup
