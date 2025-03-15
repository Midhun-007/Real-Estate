
import { useState } from 'react'

function Profile() {
    
    const [popup,setPopup]=useState("my-20  hidden fixed left-20 w-3/4    inset-0  items-center justify-center")
    function Popup(){
      setPopup("my-20   fixed left-20 w-3/4    inset-0  items-center justify-center") 
    }
    function closePop(){
      setPopup("my-20  hidden fixed left-20 w-3/4    inset-0  items-center justify")
    }
    /*const [showMobileMenu,setShowMobileMenu]=useState("md:hidden w-0 h-0 right-0 top-0 botton-0 overflow-hidden bg-red transition-all")
    const mobilecss="md:hidden fixed w-full  right-0 top-0 botton-0 overflow-hidden bg-red transition-all"
    const [openclose,setOpenClose]=useState(0)
    function showMMobileMenu(){
      setShowMobileMenu(mobilecss)
      setOpenClose(1)
    }
    function closeMobileMenu(){
      setShowMobileMenu("md:hidden w-0 h-0 right-0 top-0 botton-0 overflow-hidden bg-red transition-all")
      setOpenClose(0)
    }*/
    
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
     bg-cover bg-center  overflow-hidden">
      
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