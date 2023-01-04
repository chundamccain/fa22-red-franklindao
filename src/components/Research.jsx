// imgs
import involveButton from '../imgs/involvebutton.svg'
import twitter from '../imgs/twitter.png'
import researchicon from '../imgs/research.png'

// components
import Navbar from './Navbar'
import Person from './Person'
import BigText from './Bigtext'
import MediaBlock from './MediaBlock'

import { useMediaQuery } from 'react-responsive'


import Kirill from "../imgs/KirillNaumov_Investments.jpg"
import Omar from "../imgs/OmarAmeen_Events.jpg"
import Sofia from "../imgs/SofiaWawrzyniak_UndergraduatePresident.jpg"

const Research = () => {


  const portraits = [
    {image: Sofia, name: "Sofia Wawrzyniak", description: "Undergraduate President", bio: "Insert Small Bio"},
    { image: Omar, name :"Omar Ameen", description : "Events Director", bio : "Insert Small Bio"},
    {image: Kirill, name : "Kirill Naumov", description : "Investments Director", bio :"Insert Small Bio"},
   
  ]


  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <>
    {isTabletOrMobile && 
      <div className="flex flex-col h-screen text-white font-mono bg-background">
        <div className="py-12 ">
          <Navbar />
        </div> 

        {/* Welcome section */}
        <div className="flex flex-col mx-32 items-center">

        <BigText name ={"Research"} description ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"}/>
          
          <div className='flex flex-row '>
            <Person />
            <Person />
            <Person />
          </div>
        </div>

        <div className="pt-24 pb-20 flex flex-col justify-center items-center">
          <span className="text-4xl font-semibold p-5">
            Spotlights
          </span>
          <span className="text-lg">
            Articles and past work done by operations
          </span>
          <span className="text-lg">
            commitee members
          </span>
        </div>

        <div className='flex flex-row pl-10'>
          <span className="flex flex-col justify-left text mx-32 text-4xl font-semibold pt-10">
            Twitter
          </span>
          <div className='flex flex-row pr-10 pl-40'>
            <div className='pr-10'>
              <img className="w-36 h-30" src={twitter} alt="" />
              <img className="w-36 h-30" src={twitter} alt="" />
              <img className="w-36 h-30" src={twitter} alt="" />
            </div>


            <div className='flex flex-col pr-20 pt-5'>
              <span className='pb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>

              <span className='pb-5 mt-12'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>

              <span className='pb-5 mt-12'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>
            </div>

          </div>
        </div>

        <div>
          <span className="flex flex-col justify-center items-center text-4xl font-semibold mt-40">
            Videos, Podcasts, Audio
            <div className='flex flex-row'>
            <MediaBlock name = {"TITLE"}/>
            <MediaBlock name = {"TITLE"}/>
            <MediaBlock name = {"TITLE"}/>
          </div>
          
          </span>

         
        </div>
        {/*Videos*/}
          
        <div className='flex flex-row pl-10'>
          <span className="flex flex-col justify-left text mx-32 text-4xl font-semibold pt-10">
            Long-form Research
          </span>
          <div className='flex flex-row pr-10'>
            <div className='pr-10'>
              <img className="w-32 h-26 py-6" src={researchicon} alt="" />
              <img className="w-32 h-26 py-6" src={researchicon} alt="" />
              <img className="w-32 h-26 py-6" src={researchicon} alt="" />
            </div>


            <div className='flex flex-col pr-20 pt-5'>
              <span className='pb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>

              <span className='pb-5 mt-24'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>

              <span className='pb-5 mt-20'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>
            </div>

          </div>
        </div>
      </div>
}
     {isDesktopOrLaptop && 
      <div className="flex flex-col h-screen text-white font-mono bg-background">
        <div className="py-12 ">
          <Navbar />
        </div> 

        {/* Welcome section */}
        <div className="flex flex-col mx-32 items-center">

        <BigText name ={"Research"} description ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"}/>
          
          <div className='flex flex-row '>
            <Person />
            <Person />
            <Person />
          </div>
        </div>

        <div className="pt-24 pb-20 flex flex-col justify-center items-center">
          <span className="text-4xl font-semibold p-5">
            Spotlights
          </span>
          <span className="text-lg">
            Articles and past work done by operations
          </span>
          <span className="text-lg">
            commitee members
          </span>
        </div>

        <div className='flex flex-row pl-10'>
          <span className="flex flex-col justify-left text mx-32 text-4xl font-semibold pt-10">
            Twitter
          </span>
          <div className='flex flex-row pr-10 pl-40'>
            <div className='pr-10'>
              <img className="w-36 h-30" src={twitter} alt="" />
              <img className="w-36 h-30" src={twitter} alt="" />
              <img className="w-36 h-30" src={twitter} alt="" />
            </div>


            <div className='flex flex-col pr-20 pt-5'>
              <span className='pb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>

              <span className='pb-5 mt-12'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>

              <span className='pb-5 mt-12'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>
            </div>

          </div>
        </div>

        <div>
          <span className="flex flex-col justify-center items-center text-4xl font-semibold mt-40">
            Videos, Podcasts, Audio
            <div className='flex flex-row'>
            <MediaBlock name = {"TITLE"}/>
            <MediaBlock name = {"TITLE"}/>
            <MediaBlock name = {"TITLE"}/>
          </div>
          
          </span>

         
        </div>
        {/*Videos*/}
          
        <div className='flex flex-row pl-10'>
          <span className="flex flex-col justify-left text mx-32 text-4xl font-semibold pt-10">
            Long-form Research
          </span>
          <div className='flex flex-row pr-10'>
            <div className='pr-10'>
              <img className="w-32 h-26 py-6" src={researchicon} alt="" />
              <img className="w-32 h-26 py-6" src={researchicon} alt="" />
              <img className="w-32 h-26 py-6" src={researchicon} alt="" />
            </div>


            <div className='flex flex-col pr-20 pt-5'>
              <span className='pb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>

              <span className='pb-5 mt-24'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>

              <span className='pb-5 mt-20'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>
            </div>

          </div>
        </div>
      </div>
}
    </>
  )
}

export default Research