import React from 'react'

import Landing from './components/Landing'
import Investments from './components/Investments'
import Directors from './components/Directors'
import Development from './components/Development'
import Research from './components/Research'
import Projects from './components/DevProjs'
import Operations from './components/Operations'
import EventsPage from './components/EventsPage'
import Education from './components/Education'


import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Landing />}></Route>
        <Route path = "/development" element = {<Development />}></Route>
        <Route path = "/investments" element = {<Investments />}></Route>
        <Route path = "/directors" element = {<Directors />}></Route>
        <Route path = "/operations" element = {<Operations />}></Route>
        <Route path = "/projects" element = {<Projects/>}></Route>
        <Route path = "/research" element = {<Research />}></Route>
        <Route path = "/events" element = {<EventsPage/>}></Route>
        <Route path = "/education" element = {<Education/>}></Route>

      </Routes>

    </BrowserRouter>
    // Import react-router-dom later for routing to different pages (components)
  )
}

export default App