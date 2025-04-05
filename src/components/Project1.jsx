import React from 'react'
const projectsData=[
  
    {
      "project_name": "Lodha Bellissimo",
      "city": "Mumbai",
      "location": "Mahalaxmi",
      "price": "₹12,00,00,000",
      "image": "https://source.unsplash.com/400x300/?luxury,apartment"
    },
    {
      "project_name": "DLF Camellias",
      "city": "Gurgaon",
      "location": "Golf Course Road",
      "price": "₹25,00,00,000",
      "image": "https://source.unsplash.com/400x300/?villa,mansion"
    },
    {
      "project_name": "Prestige Lakeside Habitat",
      "city": "Bangalore",
      "location": "Varthur",
      "price": "₹2,50,00,000",
      "image": "https://source.unsplash.com/400x300/?lakeview,house"
    },
    {
      "project_name": "Sobha City",
      "city": "Chennai",
      "location": "OMR",
      "price": "₹1,50,00,000",
      "image": "https://source.unsplash.com/400x300/?realestate,home"
    },
    {
      "project_name": "Godrej Infinity",
      "city": "Pune",
      "location": "Keshav Nagar",
      "price": "₹2,00,00,000",
      "image": "https://source.unsplash.com/400x300/?architecture,building"
    },
    {
      "project_name": "Hiranandani Estate",
      "city": "Thane",
      "location": "Ghodbunder Road",
      "price": "₹1,80,00,000",
      "image": "https://source.unsplash.com/400x300/?skyscraper,balcony"
    },
    {
      "project_name": "Urbana",
      "city": "Kolkata",
      "location": "EM Bypass",
      "price": "₹2,20,00,000",
      "image": "https://source.unsplash.com/400x300/?house,interior"
    },
    {
      "project_name": "L&T Raintree Boulevard",
      "city": "Hyderabad",
      "location": "Gachibowli",
      "price": "₹2,50,00,000",
      "image": "https://source.unsplash.com/400x300/?luxury,house"
    },
    {
      "project_name": "The Palm Springs",
      "city": "Gurgaon",
      "location": "Golf Course Road",
      "price": "₹4,00,00,000",
      "image": "https://source.unsplash.com/400x300/?penthouse,apartment"
    },
    {
      "project_name": "Runwal Bliss",
      "city": "Mumbai",
      "location": "Kanjurmarg",
      "price": "₹1,20,00,000",
      "image": "https://source.unsplash.com/400x300/?villa,garden"
    },
    {
      "project_name": "Brigade Exotica",
      "city": "Bangalore",
      "location": "Old Madras Road",
      "price": "₹3,20,00,000",
      "image": "https://source.unsplash.com/400x300/?modern,architecture"
    },
    {
      "project_name": "Lodha Amara",
      "city": "Thane",
      "location": "Kolshet Road",
      "price": "₹1,50,00,000",
      "image": "https://source.unsplash.com/400x300/?urban,apartment"
    },
    {
      "project_name": "Sobha Dream Acres",
      "city": "Bangalore",
      "location": "Panathur",
      "price": "₹85,00,000",
      "image": "https://source.unsplash.com/400x300/?dream,home"
    },
    {
      "project_name": "Lodha Fiorenza",
      "city": "Mumbai",
      "location": "Goregaon",
      "price": "₹7,50,00,000",
      "image": "https://source.unsplash.com/400x300/?luxury,interior"
    },
    {
      "project_name": "Emaar Palm Hills",
      "city": "Gurgaon",
      "location": "Sector 77",
      "price": "₹1,40,00,000",
      "image": "https://source.unsplash.com/400x300/?nature,villa"
    },
    {
      "project_name": "Raheja Vistas",
      "city": "Pune",
      "location": "NIBM",
      "price": "₹1,20,00,000",
      "image": "https://source.unsplash.com/400x300/?modern,home"
    },
    {
      "project_name": "Runwal Forests",
      "city": "Mumbai",
      "location": "Kanjurmarg",
      "price": "₹1,60,00,000",
      "image": "https://source.unsplash.com/400x300/?forest,villa"
    },
    {
      "project_name": "Mantri Espana",
      "city": "Bangalore",
      "location": "Bellandur",
      "price": "₹4,80,00,000",
      "image": "https://source.unsplash.com/400x300/?highrise,building"
    },
    {
      "project_name": "Oberoi Esquire",
      "city": "Mumbai",
      "location": "Goregaon East",
      "price": "₹10,00,00,000",
      "image": "https://source.unsplash.com/400x300/?mansion,luxury"
    },
    {
      "project_name": "Tata Eureka Park",
      "city": "Noida",
      "location": "Sector 150",
      "price": "₹1,05,00,000",
      "image": "https://source.unsplash.com/400x300/?greenery,apartment"
    }
  ]
  



/*{
      title: "Skyline Haven",
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },*/
function Project1() {
    function clicked(property){
        console.log(property)
        async function sendProperty() {
            const response=await fetch("http://localhost:3000/api/cart",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                  },
                  body:JSON.stringify({data:property}),
                  credentials:"include"
            })
            const result=await response.json()
            console.log(result)
        }
        sendProperty()
    }
  return (
    <div className=' h-screen flex flex-col overflow-y-auto scrollbar-hide no-scrollbar'>
    <div className="mt-28 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 overflow-y-auto   scrollbar-hide no-scrollbar" >
      {projectsData.map((element,index) =>(
        <div key={index} className='m-3 bg-slate-100 w-full rounded shadow-lg flex flex-col "text-indigo-600  pb-2 pr-2 border-b-2 border-indigo-600 uppercase'>
        <img src="src\assets\project_img_2.jpg" className='overflow-hidden h-[350px]'></img>
        <h3 className='text-3xl font-bold p-3'>{element.project_name}</h3>
        <h4 className='text-2xl font-bold p-3'>{element.location}</h4>
        <h5 className='text-2xl font-bold p-3'>{element.price} </h5>
        <button className=' font-bold text-xl bg-white px-6 py-1 rounded-xl border w-3/5 m-3 
      transform-gpu
      hover:rotate-[1deg] hover:scale-105
      hover:skew-x-1
      transition-all duration-300
      shadow-lg hover:shadow-xl' 
      onClick={()=>{clicked(element)}}
      >Add</button>
    </div>
      ))}  
        
        

    </div>
    </div>
  )
}

export default Project1