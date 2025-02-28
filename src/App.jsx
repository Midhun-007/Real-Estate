
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'


function App() {


  return (
    <>
      <div className='w-full overflow-hidden'>
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
