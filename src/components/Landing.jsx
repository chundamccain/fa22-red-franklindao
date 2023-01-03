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
import { useMediaQuery } from 'react-responsive'
import Directors from './Carousel'
import CommitteeBlock from './CommitteeBlock'
import NavDrop from './NavDrop'



const Home = () => {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <>
    <div className= "content-center">


     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


     {isTabletOrMobile && 
      <div className="flex flex-col h-screen text-white font-mono overscroll-contain">
        <div className="py-12 ">
          <NavDrop />
        </div>



        {/* Welcome section */}
        <div className="flex flex-col mx-6">
          {/* Welcome Text */}
          <div className="mt-32 text-[2.5rem]  font-bold w-full">
            <span >
              Welcome to
            </span>
            <span className="ml-2 text-purple ">
              FranklinDAO
            </span>
          </div>

          {/* About text */}
          <div className="tracking-tight leading-5 text-[1.3rem] mt-8  w-full">
            FranklinDAO is part of the EduDAO initiative,
          </div>
          <div className="tracking-tight leading-5 text-[1.3rem] mt-2 mb-24 w-full">
          founded by students at the University of Pennsylvania.
          </div>

          {/* Get Involved Button */}
          <button className="w-52">
            <img src={involveButton} alt="involve button" className="hover:shadow-md" />
          </button>

          {/* Interest text */}
          <div className="mt-44 text-4xl font-bold w-full">
            <span className="text-purple">
              Join
            </span>
            <span className="ml-6">
              our efforts in shaping the industry.
            </span>
          </div>

          <div className="tracking-tight leading-5 text-base mt-8 text-[1.4rem]">
            FranklinDAO draws from broad networks of alumni founders and investors, seeking continued 
          </div>
          <div className="tracking-tight leading-5 text-base mt-2 text-[1.4rem] mb-28">
              collaboration with leading innovators and drivers in the space.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-80">
          <Directors/>
        </div>

        {/* Commitee Overviews Section */}
        <div className='flex flex-col justify-center items-center pb-40'>
          <span className='text-center text-4xl font-medium mt-60 mb-32'>
            Committee Overviews
          </span>

         
            <CommitteeBlock img={overview1} link={"/research"} name={"Research"} description={"Quantitative market analysis"}/>
            <CommitteeBlock img={overview2} link={"/investments"} name={"Investment"} description={"Portfolio management"}/>
            <CommitteeBlock img={overview3} link={"/"} name={"Governance"} description={"Vote and proposal generation"}/>
            <CommitteeBlock img={overview4} link={"/development"} name={"Development"} description={"Professional engineering experience"}/>
         
            <CommitteeBlock className img={overview5} link={"/events"} name={"Events"} description={"Ecosystem exposure and networking"}/>
            <CommitteeBlock img={overview6} link={"/operations"} name={"Operations"} description={"Internal DAO management"}/>
            <CommitteeBlock img={overview7} link={"/education"} name={"Education"} description={"Onboarding and onramping"}/>

        </div>
      </div>
      }


     {isDesktopOrLaptop && 
      <div className="flex flex-col h-screen text-white font-mono overscroll-contain">
        <div className="py-12 ">
          <Navbar />
        </div>

        {/* Graphics */}
        <div className="absolute right-0 top-24 w-96">
          <img src={graphics} className="h-screen" alt="" />
        </div>


        {/* Welcome section */}
        <div className="flex flex-col mx-32">
          {/* Welcome Text */}
          <div className="mt-32 text-6xl font-bold w-full">
            <span >
              Welcome to
            </span>
            <span className="ml-6 text-purple ">
              FranklinDAO
            </span>
          </div>

          {/* About text */}
          <div className="tracking-tight leading-5 text-[1.3rem] mt-8  w-full">
            FranklinDAO is part of the EduDAO initiative,
          </div>
          <div className="tracking-tight leading-5 text-[1.3rem] mt-2 mb-24 w-full">
          founded by students at the University of Pennsylvania.
          </div>

          {/* Get Involved Button */}
          <button className="w-52">
            <img src={involveButton} alt="involve button" className="hover:shadow-md" />
          </button>

          {/* Interest text */}
          <div className="mt-44 text-4xl font-bold w-full">
            <span className="text-purple">
              Join
            </span>
            <span className="ml-6">
              our efforts in shaping the industry.
            </span>
          </div>

          <div className="tracking-tight leading-5 text-base mt-8 text-[1.4rem]">
            FranklinDAO draws from broad networks of alumni founders and investors, seeking continued 
          </div>
          <div className="tracking-tight leading-5 text-base mt-2 text-[1.4rem] mb-28">
              collaboration with leading innovators and drivers in the space.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-80">
          <Directors/>
        </div>

        {/* Commitee Overviews Section */}
        <div className='flex flex-col justify-center items-center pb-40'>
          <div className='text-4xl font-medium mt-60 mb-32'>
            Committee Overviews
          </div>

          <div className='grid grid-cols-4 gap-10 mb-28 m-3'>
            <CommitteeBlock img={overview1} link={"/research"} name={"Research"} description={"Quantitative market analysis"}/>
            <CommitteeBlock img={overview2} link={"/investments"} name={"Investment"} description={"Portfolio management"}/>
            <CommitteeBlock img={overview3} link={"/"} name={"Governance"} description={"Vote and proposal generation"}/>
            <CommitteeBlock img={overview4} link={"/development"} name={"Development"} description={"Professional engineering experience"}/>
          </div>

          <div className='grid grid-cols-3 gap-10 m-3'>
            <CommitteeBlock className img={overview5} link={"/events"} name={"Events"} description={"Ecosystem exposure and networking"}/>
            <CommitteeBlock img={overview6} link={"/operations"} name={"Operations"} description={"Internal DAO management"}/>
            <CommitteeBlock img={overview7} link={"/education"} name={"Education"} description={"Onboarding and onramping"}/>
          </div>
        </div>
      </div>
      }
    </div>
    </>
  )
}

export default Home