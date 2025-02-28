import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
    const [result, setResult] = React.useState("");
    

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1d07622d-fe92-46be-80e4-02fd9d32409f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        toast("Your message is recieved");
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden
    ' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold'>Contact <span 
        className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Ready to make a Move .Lets Build Together!</p>

        <form className='max-w-2xl mx-auto text-gray-600 pt-8'onSubmit={onSubmit} >
        
            <div className='flex flex-wrap'>

                <div className='w-full md:w-1/2 text-left'>
                    Your Name
                    <input  className="w-full border border-gray-300 rounded py-3 px-4 mt-2"type="text" name='Name' placeholder='Your Name' required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input  className="w-full border border-gray-300 rounded py-3 px-4 mt-2"type="email" name='Email' placeholder='Your Email' required/>
                </div>

            </div>
            <div className='text-left my-6'>
                Message 
                <textarea className='w-full border rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
            </div>
            <button type='submit'  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Send Message</button>
            <span>{result}</span>
            
            <ToastContainer></ToastContainer>
        </form>
    </div>
  )
}

export default Contact