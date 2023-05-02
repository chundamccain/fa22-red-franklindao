import React, { useState } from "react"
import Person from './AdaptPerson'
import Shadow from './ShadowPerson'

import leftarr from '../imgs/Vector52.png';
import rightarr from '../imgs/Vector51.png';

import Chunda from "../imgs/ChundaMcCain_UndergraduatePresident.jpg"
import Erik from "../imgs/ErikZhang_Research.jpg"
import Evan from "../imgs/EvanFenster_Operations.jpg"
import Kirill from "../imgs/KirillNaumov_Investments.jpg"
import Omar from "../imgs/OmarAmeen_Events.jpg"
import Sofia from "../imgs/SofiaWawrzyniak_UndergraduatePresident.jpg"
import Zile from "../imgs/ZileCao.jpg"
import Vince from "../imgs/VinceTiu.jpg"
import Paavnee from "../imgs/Paavnee.jpg"
import Vivian from "../imgs/VivianZhu.jpg"
import Alexander from "../imgs/Alexander_Education.jpg"

const portraits = [
  {image: Sofia, name: "Sofia Wawrzyniak", description: "Managing Director", bio: "Summer Analyst @ Morgan Stanley"},
  {image: Chunda, name : "Chunda McCain",  description : "Managing Director",  bio : "Ex-Research Scholar @ Blockchain Capital"},
  {image: Vivian, name: "Vivian Zhu", description: "Events Director", bio: "Penn CS & Finance '25", bio2: "Interested in DeFi"},
  {image: Omar, name :"Omar Ameen", description : "Events Director", bio : "Penn CS '25", bio2: "Intersted in Humanitarian Efforts x Crypto"},
  {image: Kirill, name: "Kirill Naumov", description: "Managing Director", bio: "Junior at Penn & Galaxy Digital", },
  {image: Evan, name : "Even Fenster", description : "Operations Director", bio : "CS & Biz Analytics"},
  {image: Erik, name : "Erik Zhang", description : "Research Director",  bio : "CS & Finance,'24"},
  { image: Zile, name :"Zile Cao", description : "Deputy Director of Development", bio : "Ambassador @ Solana | PM @ Weave"},
  {image: Vince, name : "Vince Tiu", description : "Deputy Director of Development", bio :"Previously @ Infura, ConsenSys"},
  { image: Paavnee, name: "Paavnee Chauhan", description: "Director of Investments", bio: "PM @ Gemini" },
  {image: Alexander, name: "Alexander Narvaez-Duckworth", description: "Managing Director of Education", bio: ""}

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
    <div className = "items-center">
      <div className="text-center text-[3rem] font-bold mb-4">
        Board of Directors
      </div>

      <div className="carousel-container flex flex-row m-16">
       

        {/* <img
          className="carousel-item"
          src={portraits[index]}
          alt="portrait"
          width="100%"
        /> */}
        {/* style the first and third one such that there is a purple overlay */}

        <button className="relative top-28 h-20 carousel-button mr-5 text-6xl hover:drop-shadow-md hover:text-purple" onClick={handlePrevious}>
          &lt;
        </button>

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
        
        <button className="relative top-28 h-20 carousel-button ml-5 text-6xl hover:drop-shadow-md hover:text-purple" onClick={handleNext}>
          &gt;
        </button>
      </div>
      </div>
    </>
  )
}

export default Carousel