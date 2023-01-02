// imgs
import involveButton from '../imgs/involvebutton.svg'
import Person from './Person'
import Project from './Projects'
import BigText from './Bigtext'

// components
import Navbar from './Navbar'

const Development = () => {
  return (
    
    <>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <div className="flex flex-col h-screen text-white font-mono bg-background ">
        <div className="py-12 ">
          <Navbar />
        </div>

        {/* Welcome section */}
        <div className="flex flex-col mx-32 items-center">
          <BigText name={"Development"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"} />

          <div className='flex flex-row '>
            <Person />
            <Person />
            <Person />
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
            <Project />
          </div>
        </div>
      </div>
    </>
  )
}

export default Development