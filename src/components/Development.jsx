// imgs
import involveButton from '../imgs/involvebutton.svg'
import Person from './AdaptPerson'
import Project from './Projects'
import BigText from './Bigtext'
import NavDrop from './NavDrop'
import { useMediaQuery } from 'react-responsive'


// components
import Navbar from './Navbar'

import Kirill from "../imgs/KirillNaumov_Investments.jpg"
import Omar from "../imgs/OmarAmeen_Events.jpg"
import Sofia from "../imgs/SofiaWawrzyniak_UndergraduatePresident.jpg"


const Development = () => {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const portraits = [
    {image: Sofia, name: "Sofia Wawrzyniak", description: "Undergraduate President", bio: "Insert Small Bio"},
    { image: Omar, name :"Omar Ameen", description : "Events Director", bio : "Insert Small Bio"},
    {image: Kirill, name : "Kirill Naumov", description : "Investments Director", bio :"Insert Small Bio"},
   
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
          <BigText name={"Development"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />

          
          <Person image = {portraits[0].image} name = {portraits[0].name} description = {portraits[0].description} bio = {portraits[0].bio}/>
          <Person image = {portraits[1].image} name = {portraits[1].name} description = {portraits[1].description} bio = {portraits[1].bio}/>
          <Person image = {portraits[2].image} name = {portraits[2].name} description = {portraits[2].description} bio = {portraits[2].bio}/>
          
          <div className='pt-20 pb-20'>
            <div className='flex flex-col justify-center items-center'>
              <span className='text-4xl font-semibold pb-5'>
                Projects
              </span>
           
            </div>
            <Project />
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
          <BigText name={"Development"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} />

          <div className='flex flex-row mx-8'>
           <div className = "mx-5"> <Person image = {portraits[0].image} name = {portraits[0].name} description = {portraits[0].description} bio = {portraits[0].bio}/></div>
          <div className = "mx-5"><Person image = {portraits[1].image} name = {portraits[1].name} description = {portraits[1].description} bio = {portraits[1].bio}/></div>
          <div className = "mx-5"><Person image = {portraits[2].image} name = {portraits[2].name} description = {portraits[2].description} bio = {portraits[2].bio}/></div>
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

        <Project />
      </div>
    }
    </>
  )
}

export default Development