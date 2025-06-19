import React,{useEffect, useState} from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BodyHeader from './components/BodyHeader';
import Counters from './components/Counters';
import About from './components/About';
import BackProject from './components/BackProject';
import ConfirmationModal from './components/ConfirmationModal';


function App() {
  const [size, setSize] = useState(window.innerWidth)
  const [menuOpen, setMenuOpen] = useState(false)
  const [backProject, setBackProject] = useState(false)
  const [confirm, setConfirm] = useState(true)


  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
      if(size > 640){
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  },[size])

  return (
    <div className='relative'>
      <Navbar size={size} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Hero size={size}/>
      <div className='-mt-14 z-50 absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px]'>
        <BodyHeader />
        <Counters />
        <About />
      </div>
      {backProject && < BackProject />}
      {confirm && < ConfirmationModal/>}
    </div>
  )
}

export default App;