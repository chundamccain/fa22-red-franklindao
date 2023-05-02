// imgs
import involveButton from '../imgs/involvebutton.svg'
import Person from './AdaptPerson'
import Projects from './Projects'
import BigText from './Bigtext'
import NavDrop from './NavDrop'
import { useMediaQuery } from 'react-responsive'


// components
import Navbar from './Navbar'

import Zile from "../imgs/ZileCao.jpg"
import Vince from "../imgs/VinceTiu.jpg"


const Development = () => {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const portraits = [
    { image: Zile, name :"Zile Cao", description : "Deputy Director of Development", bio : "Ambassador @ Solana | PM @ Weave"},
    {image: Vince, name : "Vince Tiu", description : "Deputy Director of Development", bio :"Previously @ Infura, ConsenSys"},
  ]

  return (
    
    <> 
      {isTabletOrMobile && 
        <div className="flex flex-col h-screen text-white font-mono bg-background ">
        <div className="py-12 ">
          <NavDrop />
        </div>

        {/* Welcome section */}
        <div className="flex flex-col mx-32 items-center">
          <BigText name={"Development"} description={"The FranklinDAO development team is a collective of exceptional student software engineers focused on mastering and advancing Web3 development. Collaborating with leading protocols, securing grants for innovative software projects, and competing in hackathons, we strive to facilitate students' entry into Web3 careers. We also host an internal semester-long Web3 development course to onboard talented Web2 developers. Our students are available for part-time, full-time and project-based roles."} />

          
          <Person image = {portraits[0].image} name = {portraits[0].name} description = {portraits[0].description} bio = {portraits[0].bio} twitter="https://twitter.com/zile_cao"linkedin="https://www.linkedin.com/in/zilecao/"/>
          <Person image = {portraits[1].image} name = {portraits[1].name} description = {portraits[1].description} bio = {portraits[1].bio} twitter="https://twitter.com/vincetiu8" linkedin="https://www.linkedin.com/in/vincetiu8/"/>
          
          <div className='pt-20 pb-20'>
            <div className='flex flex-col justify-center items-center'>
              <span className='text-4xl font-semibold pb-5'>
                Projects
              </span>
           
            </div>
            <Projects />
          </div>
        </div>
      </div>
      }

      {isDesktopOrLaptop && 
      <div className="flex flex-col h-screen text-white font-mono bg-background ">
        <div className="py-12 ">
          <Navbar />
        </div>

        {/* Welcome section */}
        <div className="flex flex-col mx-32 items-center">
          <BigText name={"Development"} description={"The FranklinDAO development team is a collective of exceptional student software engineers focused on mastering and advancing Web3 development. Collaborating with leading protocols, securing grants for innovative software projects, and competing in hackathons, we strive to facilitate students' entry into Web3 careers. We also host an internal semester-long Web3 development course to onboard talented Web2 developers. Our students are available for part-time, full-time and project-based roles."} />

          <div className='flex flex-row mx-8'>
          <div className = "mx-5"><Person image = {portraits[0].image} name = {portraits[0].name} description = {portraits[0].description} bio = {portraits[0].bio} twitter="https://twitter.com/zile_cao" linkedin="https://www.linkedin.com/in/zilecao/"/></div>
          <div className = "mx-5"><Person image = {portraits[1].image} name = {portraits[1].name} description = {portraits[1].description} bio = {portraits[1].bio} twitter="https://twitter.com/vincetiu8"linkedin="https://www.linkedin.com/in/vincetiu8/"/></div>
          </div>
          <div className='pt-20 pb-20'>
            <div className='flex flex-col justify-center items-center'>
              <span className='text-4xl font-semibold pb-5'>
                Projects
              </span>
              <span className="text-xl">
                These are some of the projects and
              </span>
              <span className="text-xl">
                clients that we have been working with
              </span>
            </div>
          </div>
        </div>
        
        <div>
          <Projects />
        </div>
      </div>
    }
    </>
  )
}

export default Development