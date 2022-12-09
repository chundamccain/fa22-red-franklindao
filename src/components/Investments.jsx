// imgs
import involveButton from '../imgs/involvebutton.svg'
import submitButton from '../imgs/submitbutton.svg'
import Project from './Projects'
import BigText from './Bigtext'

// components
import Navbar from './Navbar'
import Person from './Person'

import Company from './Company'

const Investments = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-white font-mono bg-background">
        <div className="py-12 ">
          <Navbar />
        </div>

        {/* Welcome section */}
        <div className="flex flex-col mx-32 items-center">
          {/* Welcome Text */}
          <BigText name ={"Investments"} description ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"}/>
          
          <div className='flex flex-row '>
            <Person />
            <Person />
            <Person />
          </div>

          <Project />
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
        
        <div className="flex flex-row mt-40">
          {/*Partnerships*/}
          <div className="flex flex-col items-center basis-1/2">
            <div className="mt-72 text-5xl font-bold text-white">
              Partnerships
            </div>

            <div className="tracking-tight leading-5 mt-8 w-50 text-[18px]">
              Our partners who make our projects
            </div>
            <div className="tracking-tight leading-5 w-50 text-[18px]">
              possible
            </div>

            <div className="mt-6 tracking-tight leading-5 text-[18px]">
              Click here to learn more about our potential 
            </div>
            <div className="tracking-tight leading-5 w-50 text-[18px]">
              partnerships
            </div>
          </div>
          
          <div className="mr-20 grid grid-cols-3 basis-1/2">
            <div className="col-span-3">
              <Company company={"Company1"} />
            </div>
            
            <Company company={"Company2"} />
            <Company company={"Company3"} />
            <Company company={"Company4"} />

            <div className="col-span-3">
              <Company className="col-span-3" company={"Company5"} />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-scree mt-28">
          <div className="flex flex-col items-center">
            <div className="text-4xl">
              Contact
            </div>

            <input className="w-[45rem] shadow border rounded-lg py-5 px-3 mt-14 text-center text-black text-lg leading-tight focus:outline-none focus:shadow-outline focus:border-purple " type="text" placeholder="Email" />
            <input className="w-[45rem] shadow border rounded-lg py-5 px-3 mt-10 text-center text-black text-lg leading-tight focus:outline-none focus:shadow-outline focus:border-purple " type="text" placeholder="Name" />
            <input className="w-[45rem] shadow border rounded-lg py-5 px-3 mt-10 text-center text-black text-lg leading-tight focus:outline-none focus:shadow-outline focus:border-purple " type="text" placeholder="Question" />
          
            <button className="w-52 mt-10 mb-14">
              <img src={submitButton} alt="submit button" className="hover:shadow-md"/>
            </button>
          </div>
        </div>

      </div>



    </>
  )
}

export default Investments