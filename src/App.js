import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './themeComponents/About'
import Booking from './themeComponents/Booking'
import Footer from './themeComponents/Footer'
import Home from './themeComponents/Home'
import Items from './themeComponents/Items'

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Items/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/booking' element={<Booking/>} />
        </Routes>

        <Footer/>

      </Router>
    </div>
  )
}

export default App