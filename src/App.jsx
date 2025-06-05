import React,{useEffect, useState} from 'react'
import Navbar from './components/Navbar';


function App() {
  const [size, setSize] = useState(window.innerWidth)
  const [menuOpen, setMenuOpen] = useState(false)


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
    <div>
      <Navbar size={size} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </div>
  )
}

export default App;