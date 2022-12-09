// imgs
import involveButton from '../imgs/involvebutton.svg'
import twitter from '../imgs/twitter.png'


// components
import Navbar from './Navbar'
import Person from './Person'
import BigText from './Bigtext'
import MediaBlock from './MediaBlock'

const Research = () => {
  return (
    <>
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
          {/* Welcome Text */}
          <div className="mt-32 text-6xl font-semibold w-3/4">
            <span >
              Welcome to the
            </span>
            <span className="ml-9 mr-9 text-purple">
              Research
            </span>
            <span >
              page
            </span>
          </div>
        </div>

        <div className="pt-60 pb-20">
          <span className="flex flex-col justify-center items-center text-4xl font-semibold p-5">
            Spotlights
          </span>
          <span className="flex flex-col justify-center items-center">
            Articles and past work done by operations
          </span>
          <span className="flex flex-col justify-center items-center">
            commitee members
          </span>
        </div>

        <div>
          <div className='flex flex-row pl-10'>
            <span className="flex flex-col justify-left text mx-32 text-4xl font-semibold pt-10">
              Twitter
            </span>
            <div className='flex flex-row pr-10 pl-40'>
              <div className='pr-10'>
                <img className="w-36 h-24" src={twitter} alt="" />
                <img className="w-36 h-24" src={twitter} alt="" />
                <img className="w-36 h-24" src={twitter} alt="" />
              </div>


              <div className='flex flex-col pr-20 pt-5'>

                <span className='pb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </span>

                <span className='pb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </span>

                <span className='pb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="flex flex-col justify-center items-center text-4xl font-semibold pt-60">
            Videos, Podcasts, Audio

            <div className='flex flex-row'>
            <MediaBlock name = {"TITLE"}/>
            <MediaBlock name = {"TITLE"}/>
            <MediaBlock name = {"TITLE"}/>
          </div>
          
          </span>

         
        </div>
        {/*Videos*/}
          
        <div>

        </div>

        <div>
          <div className='flex flex-row pl-10'>
            <span className="flex flex-col justify-left text mx-32 text-4xl font-semibold pt-10">
              Long-form Research
            </span>



            <div className='flex flex-col pr-20 pt-5 pl-48'>

              <span className='pb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>

              <span className='pb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>

              <span className='pb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              </span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Research