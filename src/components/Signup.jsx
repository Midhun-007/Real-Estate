import  { useContext, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import AuthContext from './AuthContext';

function Signup() {
    const [isOpen, setIsOpen] = useState(true);
    const {isSignedUp,setIsSignedUp}=useContext(AuthContext)
    const [responsedata,setresponsedata]=useState(null)
    const navigate=useNavigate();
    
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};

        for (let pair of formData.entries()) {
            data[pair[0]] = pair[1];
        }


        console.log('Form Data:', data);
        
        
            try{
              const response= await fetch("http://localhost:3000/api/data",{
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
              setresponsedata(result)
              if(result.message==="Data received successfully"){
                  toast("Signup succes now login")
                  
                  setIsOpen(false);
                  console.log("Before signup:", isSignedUp); 
                    setIsSignedUp(true); 
                    console.log("After signup:", isSignedUp);
                
                 navigate("/")
                 
                 
              }
              if(result.message==="Fill the data"){
                  toast("Fill the Details")
                  
              }
              
      
            }
            catch(error){
              console.log(error)
            }
            
          
          
         // Close the popup after submission
    }

    return (
       
        <div className="flex items-center justify-center h-screen bg-gray-100">
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold">Signup</h2>
                        <form onSubmit={handleSubmit}>
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
                                    onClick={() => setIsOpen(false)}
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
            )}
            <ToastContainer />
        </div>
                
    );
}
export default Signup;
