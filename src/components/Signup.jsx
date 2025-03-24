import React, { useState } from 'react'

function Signup() {
    const [isOpen,setIsOpen]=useState()
    
    function handleSubmit(event){
        event.preventDefault()
        const formData=new FormData(event.target)
        const data={}
        for(let pair of formData.entries){
            data[pair[0]]=pair[1]
        }

    }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Button to open popup */}
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        Open Popup
      </button>

      {/* Popup Box */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold">Signup</h2>
            <form onSubmit={handleSubmit(event)}>
                <ul>
                    <li><label htmlFor="Username">Username</label>
                    <input type="text" placeholder='Username' className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" id='Username'/></li>
                    <li> <label htmlFor="LabelName">Label Name</label>
                    <input type="text" placeholder='Label Name' className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" id='LabelName'/></li>
                    <li><label htmlFor="pass">Create Password</label>
                    <input type="text" placeholder='Create Password' className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" id='pass'/></li>
                </ul>
            <div className='flex flex-row justify-between'>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg "
              onClick={() => setIsOpen(false)}
            >
              Submit
           </button> 
            </div>
            </form>
          </div>
        </div>
      )}
    </div>

  )
}

export default Signup