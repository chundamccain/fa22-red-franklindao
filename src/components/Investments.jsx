// imgs
import involveButton from '../imgs/involvebutton.svg'
import submitButton from '../imgs/submitbutton.svg'
import Project from './Projects'
import BigText from './Bigtext'
import { useMediaQuery } from 'react-responsive'

// components
import Navbar from './Navbar'
import Person from './AdaptPerson'
import NavDrop from './NavDrop'
import ContactForm from './ContactForm'


import Company from './Company'


import Kirill from "../imgs/KirillNaumov_Investments.jpg"
import Omar from "../imgs/OmarAmeen_Events.jpg"
import Sofia from "../imgs/SofiaWawrzyniak_UndergraduatePresident.jpg"


const Investments = () => {


  const portraits = [
    { image: Sofia, name: "Sofia Wawrzyniak", description: "Undergraduate President", bio: "Insert Small Bio" },
    { image: Omar, name: "Omar Ameen", description: "Events Director", bio: "Insert Small Bio" },
    { image: Kirill, name: "Kirill Naumov", description: "Investments Director", bio: "Insert Small Bio" },

  ]

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800px)' })
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

          {/* Welcome section */}
          <div className="flex flex-col mx-32 items-center">
            {/* Welcome Text */}
            <BigText name={"Investments"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"} />

            <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} />
            <Person image={portraits[1].image} name={portraits[1].name} description={portraits[1].description} bio={portraits[1].bio} />
            <Person image={portraits[2].image} name={portraits[2].name} description={portraits[2].description} bio={portraits[2].bio} />

          </div>

          <div className="flex flex-col mt-20">
            <Company company={"Company1"} />
            <Company company={"Company2"} />
            <Company company={"Company3"} />
            <Company company={"Company4"} />
            <Company className="col-span-3" company={"Company5"} />
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
                <img src={submitButton} alt="submit button" className="hover:shadow-md" />
              </button>
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
            {/* Welcome Text */}
            <BigText name={"Investments"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"} />

            <div className='flex flex-row '>
              <div className="mx-5"> <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} /></div>
              <div className="mx-5"><Person image={portraits[1].image} name={portraits[1].name} description={portraits[1].description} bio={portraits[1].bio} /></div>
              <div className="mx-5"><Person image={portraits[2].image} name={portraits[2].name} description={portraits[2].description} bio={portraits[2].bio} /></div>
            </div>

            {/*<div className="mt-32 text-6xl font-semibold w-3/4">
            <span >
              Welcome to the
            </span>
            <span className="ml-9 mr-9 text-purple">
              Investments
            </span>
            <span >
              page
            </span>
          </div>*/}
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

          <ContactForm title="Contact" />

        </div>
      }



    </>
  )
}

export default Investments