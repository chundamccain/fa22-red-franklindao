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


const Investments = () => {


  const portraits = [
    { image: Kirill, name: "Kirill Naumov", description: "Director of Governance", bio: "Junior at Penn", bio2: "Galaxy Digital" },

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
            <BigText name={"Governance"} description={""} />

            <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} bio2={portraits[0].bio2} twitter="https://twitter.com/kinaumov?s=20" linkedin="https://www.linkedin.com/in/kirillnaumov/" />
            

          </div>

          <div className="flex flex-col mt-20">
            <Company company={"LayerZero"} image="https://cdn-images-1.medium.com/max/1200/1*Iz7ZjBiBzQXhqWF8o1X9vw.png" />
            <Company company={"Reserve Protocol"} image="https://media.licdn.com/dms/image/C560BAQE6rozMjjH-UA/company-logo_200_200/0/1619710110243?e=2147483647&v=beta&t=r3gyGpCif69v1MhnBd6tXk_S951SX2WcJapAI56keTk" />
            {/* <Company company={""} image="" /> */}
            <Company className="col-span-3" company={"More coming soon..."} />
          </div>

          <div className="flex justify-center items-center h-scree mt-28">
            <div className="flex flex-col items-center">
              <div className="text-4xl">
                Contact
              </div>

              <input className="w-full shadow border rounded-lg py-5 px-3 mt-14 text-center text-black text-lg leading-tight focus:outline-none focus:shadow-outline focus:border-purple " type="text" placeholder="Email" />
              <input className="w-full shadow border rounded-lg py-5 px-3 mt-10 text-center text-black text-lg leading-tight focus:outline-none focus:shadow-outline focus:border-purple " type="text" placeholder="Name" />
              <input className="w-full shadow border rounded-lg py-5 px-3 mt-10 text-center text-black text-lg leading-tight focus:outline-none focus:shadow-outline focus:border-purple " type="text" placeholder="Question" />

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
            <BigText name={"Governance"} description={""} />

            <div className='flex flex-row '>
              <div className="mx-5"> <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} bio2={portraits[0].bio2} twitter="https://twitter.com/kinaumov?s=20" linkedin="https://www.linkedin.com/in/kirillnaumov/" /></div>
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

          <div className="flex flex-row mt-28">
            {/*Partnerships*/}
            <div className="flex flex-col items-center basis-1/2">
              <div className="mt-80 text-5xl font-bold text-white">
                Partnerships
              </div>

              <div className="tracking-tight leading-5 mt-8 w-50 text-[18px]">
                Our partners who make our projects
              </div>
              <div className="tracking-tight leading-5 w-50 text-[18px]">
                possible
              </div>

              {/* <div className="mt-6 tracking-tight leading-5 text-[18px]">
                Click here to learn more about our potential
              </div> */}
              {/* <div className="tracking-tight leading-5 w-50 text-[18px]">
                partnerships
              </div> */}
            </div>

            <div className="mr-20 grid grid-cols-3 basis-1/2">
              <div/>
              <Company company={"LayerZero"} image="https://cdn-images-1.medium.com/max/1200/1*Iz7ZjBiBzQXhqWF8o1X9vw.png" />
              <div/>

              <Company company={"Reserve Protocol"} image="https://media.licdn.com/dms/image/C560BAQE6rozMjjH-UA/company-logo_200_200/0/1619710110243?e=2147483647&v=beta&t=r3gyGpCif69v1MhnBd6tXk_S951SX2WcJapAI56keTk" />
              <Company className="col-span-3" company={"More coming soon..."} image="https://t3.ftcdn.net/jpg/03/08/33/46/360_F_308334660_uHmbiG3XBfIYBJhocWnPIEjnfvWAznLk.jpg"/>
              {/* <Company company={""} image="" />
              <Company company={""} image=""/> */}
              
              <div/>
              {/* <Company className="col-span-3" company={"More coming soon..."} image="https://t3.ftcdn.net/jpg/03/08/33/46/360_F_308334660_uHmbiG3XBfIYBJhocWnPIEjnfvWAznLk.jpg"/> */}
              <div/>
            </div>
          </div>

          <ContactForm title="Contact" fkey="mlekvbvw"/>

        </div>
      }



    </>
  )
}

export default Investments