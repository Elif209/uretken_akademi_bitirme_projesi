import { useState } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './components/SiteRoutes'

import './App.css'


function App() {
  
  return (
    <>
      <Navbar/>
      
      <div className='container' >
    <div className='col-sm-12 '>

      
     <SiteRoutes />

    </div>
    </div>
    </>
  )
}

export default App
