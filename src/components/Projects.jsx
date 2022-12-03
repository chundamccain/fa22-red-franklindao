// imgs
import involveButton from '../imgs/involvebutton.svg'

// components
import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'



const Projects = ({myCollection}) => {

    const [scrollWidth, setScrollWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setScrollWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
      }, [myCollection])

  return (
    <>
      <div className="m-10 mt-8 flex justify-center ">
        <motion.div ref={carousel} className="carousel cursor-grab overflow-hidden">
          <motion.div drag="x" dragConstraints={{ right: 0, left: -scrollWidth }} className="inner-carousel flex">
            {myCollection.map(img => (
              <motion.div className="item pr-16" key={uuidv4()}>
                <img src={img} alt="" className="drop-shadow shadow-md min-h-[26rem] h-[26rem] min-w-[36rem] w-[36rem] object-cover rounded-sm pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Projects