import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import AuthContext from './AuthContext';

function Login() {
  const [ispopup,setpopup]=useState(false)
  const {setLogin}=useContext(AuthContext)
  const navigate=useNavigate()
  async function handleSubmit(event){
    event.preventDefault();
    const formData=new FormData(event.target)
    console.log(formData)
    const data={}
    for(let pair of formData.entries()){
      data[pair[0]]=pair[1]
    }
    try{
      const response=await fetch("http://localhost:3000/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",

        },
        body:JSON.stringify({data:data}),
        credentials: "include",
      })
      if(!response.ok){
        toast("Invalid Creadentials")
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const result=await response.json();
      console.log(result)
      toast("Success")
      setpopup(true)
      setLogin(true)
      navigate('/')
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <div style={{backgroundImage:"url('/header_img.png')"}}  className=" w-full h-screen flex flex-col items-center justify-center min-h-screen mb-4
     bg-cover bg-center gap-2 overflow-hidden">
      <div className="flex items-center justify-center h-screen">
        {!ispopup&&
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    
                    <form onSubmit={handleSubmit} >
                            {/*<ul className="space-y-4">
                                <li>
                                    <label htmlFor="Username" className="block font-medium">Username</label>
                                    <input
                                        type="text"
                                        name="Username"
                                        placeholder="Username"
                                        className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        id="Username"
                                        required
                                    />
                                </li>
                                <li>
                                    <label htmlFor="LabelName" className="block font-medium">Label Name</label>
                                    <input
                                        type="text"
                                        name="LabelName"
                                        placeholder="Label Name"
                                        className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        id="LabelName"
                                        required
                                    />
                                </li>
                                <li>
                                    <label htmlFor="pass" className="block font-medium">Create Password</label>
                                    <input
                                        type="password"
                                        name="Password"
                                        placeholder="Create Password"
                                        className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        id="pass"
                                        required
                                    />
                                </li>
                            </ul>
                            <div className="flex justify-between mt-4">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                                    onClick={()=>setpopup(false)}
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                                >
                                    Submit
                                </button>
                            </div>*/}
                            <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
  
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">Login</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input  id="Username" name="Username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username " />
                <label htmlFor="Username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
              </div>
              <div className="relative">
                <input  id="pass" name="Password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                <label htmlFor="pass" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
              </div>
              <div className="relative">
              <div className="flex justify-between mt-4">
              <button
                                    type="button"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600 transition-all"
                                    onClick={()=>setpopup(false)}
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-green-600 transition-all"
                                >
                                    Submit
                                </button>
              </div>
              
            </div>
          </div>
        </div>
  
        
  
      </div>
    </div>
  </div></div>
                        </form>
                      </div>
                     
         }
      </div>
      <ToastContainer></ToastContainer>
     </div>
    </>
  )
}

export default Login