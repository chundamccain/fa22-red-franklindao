import React from 'react'

import Landing from './components/Landing'
import Investments from './components/Investments'
import Directors from './components/Directors'
import Development from './components/Development'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Landing />}></Route>
        <Route path = "/development" element = {<Development />}></Route>
        <Route path = "/investments" element = {<Investments />}></Route>
        <Route path = "/directors" element = {<Directors />}></Route>

      </Routes>

    </BrowserRouter>
    // Import react-router-dom later for routing to different pages (components)
  )
}

export default App