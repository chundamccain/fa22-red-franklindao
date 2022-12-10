import React, { useState } from "react"
import Person from './AdaptPerson'
import Shadow from './ShadowPerson'

import leftarr from '../imgs/Vector52.png';
import rightarr from '../imgs/Vector51.png';

import Alejandro from "../imgs/AlejandroSafdie_MBAPresident.jpg"
import Bo from "../imgs/BoCui_Treasurer.jpg"
import Chunda from "../imgs/ChundaMcCain_UndergraduatePresident.jpg"
import Erik from "../imgs/ErikZhang_Research.jpg"
import Evan from "../imgs/EvanFenster_Operations.jpg"
import Jonah from "../imgs/JonahBurian_Development.jpg"
import Julianna from "../imgs/JuliannaCimillo_Events.jpg"
import Jun from "../imgs/JunSun_Governance.JPEG"
import Kirill from "../imgs/KirillNaumov_Investments.jpg"
import Omar from "../imgs/OmarAmeen_Events.jpg"
import Sofia from "../imgs/SofiaWawrzyniak_UndergraduatePresident.jpg"

const portraits = [
  {image: Sofia, name: "Sofia Wawrzyniak", description: "Undergraduate President", bio: "Insert Small Bio"},
  { image: Omar, name :"Omar Ameen", description : "Events Director", bio : "Insert Small Bio"},
  {image: Kirill, name : "Kirill Naumov", description : "Investments Director", bio :"Insert Small Bio"},
  {image: Jun, name : "Jun Sun", description : "Governance Director", bio : "Insert Small Bio"},
  {image: Julianna,  name : "Julianna Cimillo", description : "Events Director", bio : "Insert Small Bio"},
  {image: Jonah, name : "Jonah Burian", description : "Development Director", bio : "Insert Small Bio"},
  {image: Evan, name : "Even Fenster", description : "Operations Director", bio : "Insert Small Bio"},
  {image: Erik, name : "Erik Zhang", description : "Research Director",  bio : "Insert Small Bio"},
  {image: Chunda, name : "Chunda McCain",  description : "Undergraduate President",  bio : "Insert Small Bio"},
  {image: Bo, name : "Bo Cui", description : "Treasurer", bio : "Insert Small Bio"},
  {image: Alejandro, name : "Alejandro Safdie",  description : "MBA President",  bio : "Insert Small Bio"},

]

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(portraits.length - 1)
  const [nextIndex, setNextIndex] = useState(1)

  const handlePrevious = () => {
    let newIndex = index - 1
    if (newIndex < 0) {
      newIndex = portraits.length - 1
    }
    setIndex(newIndex)

    if (prevIndex - 1 < 0) {
      setPrevIndex(portraits.length - 1)
    } else {
      setPrevIndex(prevIndex - 1)
    }

    if (nextIndex - 1 < 0) {
      setNextIndex(portraits.length - 1)
    } else {
      setNextIndex(nextIndex - 1)
    }
  }

  const handleNext = () => {
    let newIndex = index + 1
    if (newIndex > portraits.length - 1) {
      newIndex = 0
    }
    setIndex(newIndex)

    if (prevIndex + 1 > portraits.length - 1) {
      setPrevIndex(0)
    } else {
      setPrevIndex(prevIndex + 1)
    }

    if (nextIndex + 1 > portraits.length - 1) {
      setNextIndex(0)
    } else {
      setNextIndex(nextIndex + 1)
    }
  }

  return (
    <>
      <div className="text-4xl font-bold mb-4">
        Board of Directors
      </div>

      <div className="carousel-container flex flex-ro m-16">
        <button className="relative top-28 h-20 carousel-button mr-10 text-6xl hover:drop-shadow-md hover:text-purple" onClick={handlePrevious}>
          &lt;
        </button>

        {/* <img
          className="carousel-item"
          src={portraits[index]}
          alt="portrait"
          width="100%"
        /> */}
        {/* style the first and third one such that there is a purple overlay */}

        <div className = "flex flex-row" >
          <div className="relative left-14 -z-10 opacity-40">
            <Shadow image = {portraits[prevIndex].image} />
          </div> 

          <div className="z-10">
            <Person image = {portraits[index].image} name = {portraits[index].name} description = {portraits[index].description} bio = {portraits[index].bio}/>
          </div>

          <div className="relative right-14 -z-10 opacity-40">
            <Shadow image = {portraits[nextIndex].image} />
          </div>
        </div>
        
        <button className="relative top-28 h-20 carousel-button mr-10 text-6xl hover:drop-shadow-md hover:text-purple" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </>
  )
}

export default Carousel