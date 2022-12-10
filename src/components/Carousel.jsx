import React, { useState } from "react"
import Person from './AdaptPerson'

const portraits = [
  <Person name = {"Sofia Wawrzyniak"} description = {"Undergraduate President"} bio = {"Insert Small Bio"}/>,
  <Person name = {"Omar Ameen"} description = {"Events Director"} bio = {"Insert Small Bio"}/>,
  <Person name = {"Kirill Naumov"} description = {"Investments Director"} bio = {"Insert Small Bio"}/>,
  <Person name = {"Jun Sun"} description = {"Governance Director"} bio = {"Insert Small Bio"}/>,
  <Person name = {"Julianna Cimillo"} description = {"Events Director"} bio = {"Insert Small Bio"}/>,
  <Person name = {"Jonah Burian"} description = {"Development Director"} bio = {"Insert Small Bio"}/>,
  <Person name = {"Even Fenster"} description = {"Operations Director"} bio = {"Insert Small Bio"}/>,
  <Person name = {"Erik Zhang"} description = {"Research Director"} bio = {"Insert Small Bio"}/>,
  <Person name = {"Chunda McCain"} description = {"Undergraduate President"} bio = {"Insert Small Bio"}/>,
  <Person name = {"Bo Cui"} description = {"Treasurer"} bio = {"Insert Small Bio"}/>,
  <Person name = {"Alejandro Safdie"} description = {"MBA President"} bio = {"Insert Small Bio"}/>,

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
    <div className="carousel-container flex flex-row">
      <button className="carousel-button" onClick={handlePrevious}>
        Previous
      </button>

      {/* <img
        className="carousel-item"
        src={portraits[index]}
        alt="portrait"
        width="100%"
      /> */}
      {/* style the first and third one such that there is a purple overlay */}
      {portraits[prevIndex]}
      {portraits[index]}
      {portraits[nextIndex]}

      
      <button className="carousel-button" onClick={handleNext}>
        Next
      </button>
    </div>
  )
}

export default Carousel