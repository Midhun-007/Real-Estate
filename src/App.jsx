import  {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import './App.css'

import Home from './components/pages/home'
import Profile from './components/profile'
import Header from './components/Header'

import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home></Home>}>
      <Route  index  element={<Header></Header>}></Route>
      <Route path="/About" element={<About></About>}></Route> 
      <Route path="/Projects" element={<Projects></Projects>}></Route>
      <Route path="/Testimonials" element={<Contact></Contact>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
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
