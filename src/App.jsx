import  {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import './App.css'

import Home from './components/pages/home'
import Profile from './components/profile'
import Header from './components/Header'

import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Signup from './components/signup'
import Login from "./components/login"
import ProtectedRoute from './components/ProtectedRoute'

import Project1 from './components/Project1'
import Dummy from './components/dummy'
import ProjectCarousel from './components/dummy'


function App() {

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home></Home>}>
      <Route  index  element={<Header></Header>}></Route>
      <Route path="/About" element={<About></About>}></Route> 
      <Route path="/Projects" element={<Project1></Project1>}></Route>
      <Route path="/Testimonials" element={<Contact></Contact>}></Route>
      
      <Route path='/Signup' element={<Signup></Signup>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path='/Cart' element={<ProjectCarousel></ProjectCarousel>}/>
      <Route element={<ProtectedRoute></ProtectedRoute>}>
          <Route path='/profile' element={<Profile></Profile>}/>
      </Route>
    </Route>
    
  )
)
  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
