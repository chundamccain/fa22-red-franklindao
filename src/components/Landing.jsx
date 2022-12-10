// imgs
import graphics from '../imgs/graphics.svg'
import involveButton from '../imgs/involvebutton.svg'
import overview1 from '../imgs/overview1.svg'
import overview2 from '../imgs/overview2.svg'
import overview3 from '../imgs/overview3.svg'
import overview4 from '../imgs/overview4.svg'
import overview5 from '../imgs/overview5.svg'
import overview6 from '../imgs/overview6.svg'
import overview7 from '../imgs/overview7.svg'

// components
import Navbar from './Navbar'
import MediaBlock from './MediaBlock'
import { Carousel } from 'react-bootstrap'
import Directors from './Carousel'

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-white font-mono overscroll-contain">
        <div className="py-12 ">
          <Navbar />
        </div>

        {/* Graphics */}
        <div className="absolute right-0 top-24">
          <img src={graphics} className="h-screen" alt="" />
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
            <img src={involveButton} alt="involve button" className="hover:shadow-md" />
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

        <Directors/>
        <div>

        </div>

        {/* Commitee Overviews Section */}
        <div className='flex flex-col justify-center items-center pb-40'>

          <span className='text-4xl font-semibold pt-60 pb-40'>
            Commitee Overviews
          </span>

          <div className='flex flex-row pb-36'>
            <img src={overview1} alt="" className="pr-40">
            </img>
            <img src={overview2} alt="" className="pr-20 pl-8">
            </img>
            <img src={overview3} alt="" className="pl-20 pr-8">
            </img>
            <img src={overview4} alt="" className="pl-40">
            </img>
          </div>

          <div className='flex flex-row'>
            <img src={overview5} alt="" className="pr-24">
            </img>
            <img src={overview6} alt="" className="pr-20 pl-20">
            </img>
            <img src={overview7} alt="" className="pl-24">
            </img>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home