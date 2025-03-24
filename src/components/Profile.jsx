
import { useState } from 'react'



function Profile() {
    
    const [popup,setPopup]=useState("my-20  hidden fixed left-20 w-3/4    inset-0  items-center justify-center")
    function Popup(){
      setPopup("my-20   fixed left-20 w-3/4    inset-0  items-center justify-center") 
    }
    function closePop(){
      setPopup("my-20  hidden fixed left-20 w-3/4    inset-0  items-center justify")
    }
   const [image,setImage]=useState('')
    function handleSubmitChange(event){
      const reader=new FileReader()
      const file=event.target.files[0]
      reader.onloadend=()=>{
        setImage(reader.result)
    }
    reader.readAsDataURL(file)
    }
    
    const userCread=['Username','Phone','Email','Address']
    const [userCreadValue,setUserCreadValue]=useState(['Midhun','9945XXXXX','mi@email.com','nit garnet b'])

    function onSubmit(event){
      event.preventDefault()
      const formData=new FormData(event.target)
      const data={}
      for(let pair of formData.entries()){
        data[pair[0]]=pair[1]
      }
      setUserCreadValue([data.Username,data.Phone,data.Email,data.Address])
      closePop()
    }

  return (<>
  <div style={{backgroundImage:"url('/header_img.png')"}}  className="bg-gray-200 w-full h-screen flex flex-col items-center justify-center min-h-screen mb-4
     bg-cover bg-center gap-2 overflow-hidden">
      
      <div id='profilepic' className='flex flex-col gap-4'>
        <div className='rounded-full w-32 h-32 '>
          <img src={image} alt=""  className='rounded-full w-32 h-32 mb-3'/>
        </div>
        <div>
          <input type="file" onChange={handleSubmitChange} id='fileinput' className='hidden' />
          <label htmlFor="fileinput" className='text-white  ml-4 bg-blue-700 p-2 rounded-md mt-3'>Profile Pic</label>
        </div>
      </div>
  <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[500px]">
        {userCread.map((item, index) => (
          <div key={index} className="flex flex-col mb-3">
            <h1 className="text-lg font-bold text-gray-800">{item}</h1>
            <p className="text-gray-600 border-b border-gray-300 pb-1">{userCreadValue[index]}</p>
          </div>
        ))}
      </div>

      {/* Change Credentials Button */}
      <button
        onClick={Popup}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Change Credentials
      </button>

      {/* Popup Modal */}
      <form onSubmit={onSubmit}>
      <div className={`${popup} fixed inset-0 flex items-center justify-center bg-opacity-50`}>
        <div className="bg-white w-96 md:w-[500px] rounded-lg shadow-lg p-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center">Profile</h1>

          

          <ul className="text-gray-600 mt-6 space-y-4">
          {userCread.map((item, index) => (
             <li key={index}>
             <label className="block font-medium">{item}</label>
             <input name={item} className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" required />
           </li>
          ))}
           
          </ul>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={closePop}
              className="px-5 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition-all"
            >
              Close
            </button>
            <button
              className="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-all"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      </form>
    </div>
    
  
    
    </>

  )
}

export default Profile