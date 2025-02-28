import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
function Projects() {

    const [currentIndex,setCurrentIndex]=useState(0)
    const [cardsToShow,setCardsToShow]=useState(4)
    useEffect(()=>{
        const upateCards=()=>{
            if(window.innerWidth>=1024){
                setCardsToShow(projectsData.length)
            }
            else{
                setCardsToShow(1)
            }}
            upateCards();
            window.addEventListener('resize',upateCards);
            return()=>{
                window.removeEventListener('resize',upateCards);
            }
        
    },[])
    function nextProject(){
        
        setCurrentIndex((prevIndex)=>(prevIndex+1)%projectsData.length)
    }
    function prevProject(){
        setCurrentIndex((prevIndex)=>prevIndex===0?projectsData.length-1:prevIndex-1)}
  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20
    lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Crafting Spaces,Building Legacies</p>

        <div>
            <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                <img src={assets.left_arrow} alt="Previous" />
            </button>
            <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                <img src={assets.right_arrow} alt="Previous" />
            </button>
        </div>
        
        <div className="overflow-hidden">
  <div className="flex gap-8 transition-transform duration-500 ease-in-out" 
  style={{transform:`translateX(-${(currentIndex*100)/cardsToShow}%)`}}>
    {projectsData.map((project, index) => (
      <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
        {/* Project Image */}
        <img src={project.image} alt={`Project ${index}`} className="w-full h-auto mb-14" />

        {/* Project Details */}
        <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2 bg-white w-3/4 px-4 py-2 shadow-md text-center">
          <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
          <p className="text-gray-500 text-sm">
            {project.price} <span className="mx-2">|</span> {project.location}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}


export default Projects