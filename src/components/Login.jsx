import React, { useState } from 'react'

function Login() {
  const [ispopup,setpopup]=useState(false)
  
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
        body:JSON.stringify({data:data})
      })
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const result=await response.json();
      console.log(result)
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <div style={{backgroundImage:"url('/header_img.png')"}}  className="bg-gray-200 w-full h-screen flex flex-col items-center justify-center min-h-screen mb-4
     bg-cover bg-center gap-2 overflow-hidden">
      <div className="flex items-center justify-center h-screen bg-gray-100">
        {!ispopup&&
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-xl font-semibold">Login</h2>
                    <form onSubmit={handleSubmit} >
                            <ul className="space-y-4">
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
                                    
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                      </div>
                      </div>
         }
      </div>
     </div>
    </>
  )
}

export default Login