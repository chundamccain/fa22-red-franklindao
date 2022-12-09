// imgs
import graphics from '../imgs/graphics.svg'
import involveButton from '../imgs/involvebutton.svg'

// components
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-white font-mono overscroll-contain">
        <div className="py-12 ">
          <Navbar />
        </div>

        {/* Graphics */}
        <div className="absolute right-0 top-24">
          <img src={graphics} className="h-screen" alt=""  />
        </div>


        {/* Welcome section */}
        <div className="flex flex-col mx-32">
          {/* Welcome Text */}
          <div className="mt-32 text-6xl font-bold w-1/2">
            <span >
              Welcome to
            </span>
            <span className="ml-9 text-purple"> 
              FranklinDAO
            </span>
          </div>

          {/* About text */}
          <div className="tracking-tight leading-5 text-[19px] mt-8 mb-24 w-[34rem]">
            FranklinDAO is part of the EduDAO initiative, founded by students at the University of Pennsylvania.
          </div>

          {/* Get Involved Button */}
          <button className="w-52">
            <img src={involveButton} alt="involve button" className="hover:shadow-md"/>
          </button>

          {/* Interest text */}
          <div className="mt-44 text-4xl font-bold w-1/2">
            <span className="text-purple"> 
              Join
            </span>
            <span className="ml-6">
              our efforts in shaping the industry.
            </span>
          </div>

          <div className="tracking-tight leading-5 text-base mt-8 text-[18px] w-1/2">
            FranklinDAO draws from broad networks of alumni founders and investors, seeking continued collaboration with leading innovators and drivers in the space. 
          </div>
        </div>

        {/* Profile Carousel */}
        <div>

        </div>

        {/* Commitee Overviews Section */}
        <div>
          
        </div>
      </div>
    </>
  )
}

export default Home