// imgs
import involveButton from '../imgs/involvebutton.svg'
import purplesquare from '../imgs/purplesquare.svg'


// components
import Navbar from './Navbar'

const Investments = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-white font-mono bg-background">
        <div className="py-12 ">
          <Navbar />
        </div>

        {/* Welcome section */}
        <div className="flex flex-col mx-32">
          {/* Welcome Text */}
          <div className="mt-32 text-6xl font-semibold w-3/4">
            <span >
              Welcome to the
            </span>
            <span className="ml-9 mr-9 text-purple">
              Investments
            </span>
            <span >
              page
            </span>
          </div>
        </div>
        {/*Partnerships*/}
        <div className="flex flex-col mx-44">
          <div className="mt-44 text-4xl font-bold w-1/2">
            <span className="text-white">
              Partnerships
            </span>
          </div>

        </div>

        <div className="flex flex-col mx-32">
          <div className="tracking-tight leading-5 text-base mt-8 text-[18px] w-1/2">
            Our partners who make our projects
          </div>

          <div className="flex flex-col mx-32">
            <div className="tracking-tight leading-5 text-base mt-8 text-[18px] w-1/2">
              possible
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-24">
          <div className="tracking-tight leading-5 text-base mt-8 text-[18px] w-1/2">
            Click here to learn more about our potential
          </div>

          <div className="flex flex-col mx-36">
            <div className="tracking-tight leading-5 text-base mt-8 text-[18px] w-1/2">
              partnerships
            </div>
          </div>
        </div>

        <div className="grid">
          <div>
            <img className="float-right" src={purplesquare} alt="">
            </img>
          </div>


          <div>
            <img className="float-right" src={purplesquare} alt="">
            </img>
            <img className="float-right" src={purplesquare} alt="">
            </img>
            <img className="float-right" src={purplesquare} alt="">
            </img>
          </div>

          <div>
            <img className="float-right" src={purplesquare} alt="">
            </img>
          </div>

        </div>

        <div className="snap-center">
          Contact
        </div>
      </div>



    </>
  )
}

export default Investments