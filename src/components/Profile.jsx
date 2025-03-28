
import { useEffect, useState } from 'react'



function Profile() {
  const [userCreadValue,setUserCread]=useState(["trial","trial","trial","trnsd"])
  const userCread=["Username","Phone","Email","Address"]
    useEffect(()=>{
      async function profilePreData() {
        const response= await fetch("http://localhost:3000/api/profile",{
          method:"GET",
          credentials: "include",
        })
        if(!response.ok){
          throw new Error('Http error')

        }
        const result =await response.json()
        console.log(`result${result.data}`)
        setUserCread([result.data.Username,result.data.Phone,result.data.Email,result.data.Address])
      }
      profilePreData()
    },[])



    const [popup,setPopup]=useState("my-20  hidden fixed left-20 w-3/4    inset-0  items-center justify-center")
    function Popup(){
      setPopup("my-20   fixed left-20 w-3/4    inset-0  items-center justify-center") 
    }
    function closePop(){
      setPopup("my-20  hidden fixed left-20 w-3/4    inset-0  items-center justify")
    }
   /*const [image,setImage]=useState('')
    function handleSubmitChange(event){
      const reader=new FileReader()
      const file=event.target.files[0]
      reader.onloadend=()=>{
        setImage(reader.result)
    }
    reader.readAsDataURL(file)
    }*/

    
    
    

    async function onSubmit(event){
      event.preventDefault()
      const formData=new FormData(event.target)
      const data={}
      const dummy=[];
      let i=0;
      for(let pair of formData.entries()){
        data[pair[0]]=pair[1]
        dummy[i]=pair[1]
        i=i+1
      }
      console.log(`dummy:${dummy}`)
      setUserCread(dummy)
     
      closePop()
      try{
        const response =await fetch("http://localhost:3000/api/profile",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({data:data}),
          credentials:"include"
        })
      }
      catch(err){
        console.log(err)
      }

    }

  return (<>
  <div style={{backgroundImage:"url('/header_img.png')"}}  className="bg-gray-200 w-full h-screen flex flex-col items-center justify-center min-h-screen mb-4
     bg-cover bg-center gap-2 overflow-hidden">
      
      
  <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[500px]">
        {userCread.map((item, index) => (
          <div key={index} className="flex flex-col mb-3">
            <h1 className="text-lg font-bold text-gray-800">{item}</h1>
            <p className="text-gray-600 border-b border-gray-300 pb-1">{userCreadValue[index]}</p>
          </div>
        ))}
      </div>

      {/* Change Credentials Button */}
      
      <button onClick={Popup} className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Update Profile
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