import Navbar from './Navbar'
import BigText from './Bigtext'
import Person from './AdaptPerson'
import EventBlock from './EventBlock'

import NavDrop from './NavDrop'


import { useMediaQuery } from 'react-responsive'


import Kirill from "../imgs/KirillNaumov_Investments.jpg"
import Omar from "../imgs/OmarAmeen_Events.jpg"
import Sofia from "../imgs/SofiaWawrzyniak_UndergraduatePresident.jpg"

const Education = () => {

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
                    <NavDrop />
                </div>

                <div className="flex flex-col mx-32 items-center">

                    <BigText name={"Education"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"} />

                </div>


                <div className='flex flex-col justify-center items-center text-4xl font-semibold mb-12'>
                    Instructors
                </div>

               
                    
            <Person image = {portraits[0].image} name = {portraits[0].name} description = {portraits[0].description} bio = {portraits[0].bio}/>
          <Person image = {portraits[1].image} name = {portraits[1].name} description = {portraits[1].description} bio = {portraits[1].bio}/>
          <Person image = {portraits[2].image} name = {portraits[2].name} description = {portraits[2].description} bio = {portraits[2].bio}/>


                <div className='flex flex-col justify-center items-center text-4xl font-semibold pt-20 pb-20 text-center'>
                    Past Guest Speakers
                </div>

              

                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />



                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />


            </div>
}


        {isDesktopOrLaptop && 
            <div className="flex flex-col h-screen text-white font-mono bg-background">

                <div className="py-12 ">
                    <Navbar />
                </div>

                <div className="flex flex-col mx-32 items-center">

                    <BigText name={"Education"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"} />

                </div>


                <div className='flex flex-col justify-center items-center text-4xl font-semibold'>
                    Instructors
                </div>

                <div className='flex flex-row justify-center items-center mt-12'>
                <div className = "mx-5"> <Person image = {portraits[0].image} name = {portraits[0].name} description = {portraits[0].description} bio = {portraits[0].bio}/></div>
          <div className = "mx-5"><Person image = {portraits[1].image} name = {portraits[1].name} description = {portraits[1].description} bio = {portraits[1].bio}/></div>
          <div className = "mx-5"><Person image = {portraits[2].image} name = {portraits[2].name} description = {portraits[2].description} bio = {portraits[2].bio}/></div>
                </div>

                <div className='flex flex-col justify-center items-center text-4xl font-semibold pt-20 pb-20'>
                    Past Guest Speakers
                </div>

                <div className='flex flex-row justify-center items center'>

                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />

                </div>

                <div className='flex flex-row justify-center items center'>

                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />

                </div>

            </div>
}

        </>
    )
}
export default Education