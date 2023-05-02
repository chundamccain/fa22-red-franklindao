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
import Paavnee from "../imgs/Paavnee.jpg"


const Investments = () => {


  const portraits = [
    // { image: Kirill, name: "Kirill Naumov", description: "Managing Director", bio: "Junior at Penn", bio2: "Galaxy Digital" },
    { image: Paavnee, name: "Paavnee Chauhan", description: "Director of Investments", bio: "PM @ Gemini" },

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
            <BigText name={"Investments"} description={"The Investments Committee partners with Web3 VCs to provide high-quality research, analytics, and sourcing. Our deep roots in the industry gives us an edge in finding the best founders early-on and to help connect them with the best resources."} />

            {/* <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} bio2={portraits[0].bio2} twitter="https://twitter.com/kinaumov?s=20" linkedin="https://www.linkedin.com/in/kirillnaumov/" /> */}
            <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} bio2={portraits[0].bio2} twitter="" linkedin="https://www.linkedin.com/in/paavneechauhan/" />

          </div>

          <div className="flex flex-col mt-20">
            <Company company={"Big Brain"} image="https://img.api.cryptorank.io/funds/big_brain_holdings1658319721910.png" />
            <Company company={"Matchbox DAO"} image="https://mirror-media.imgix.net/publication-images/grP0SlzOL8EYTTibNFwbk.jpg?h=2134&w=2134" />
            <Company company={"Zellic"} image="data:image/jpeg;base64,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" />
            <Company company={"Evernew"} image="https://pbs.twimg.com/profile_images/1526934258019110912/eYAQVWqT_400x400.jpg" />
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
            <BigText name={"Investments"} description={"The Investments Committee partners with Web3 VCs to provide high-quality research, analytics, and sourcing. Our deep roots in the industry gives us an edge in finding the best founders early-on and to help connect them with the best resources."} />

            <div className='flex flex-row '>
              <div className="mx-5"> <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} bio2={portraits[0].bio2} twitter="" linkedin="https://www.linkedin.com/in/paavneechauhan/" /></div>
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
              <Company company={"Big Brain"} image="https://img.api.cryptorank.io/funds/big_brain_holdings1658319721910.png" />
              <div/>

              <Company company={"Matchbox DAO"} image="https://mirror-media.imgix.net/publication-images/grP0SlzOL8EYTTibNFwbk.jpg?h=2134&w=2134" />
              <Company company={"Zellic"} image="data:image/jpeg;base64,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" />
              <Company company={"Evernew"} image="https://pbs.twimg.com/profile_images/1526934258019110912/eYAQVWqT_400x400.jpg"/>
              
              <div/>
              <Company className="col-span-3" company={"More coming soon..."} image="https://t3.ftcdn.net/jpg/03/08/33/46/360_F_308334660_uHmbiG3XBfIYBJhocWnPIEjnfvWAznLk.jpg"/>
              <div/>
            </div>
          </div>

          <ContactForm title="Contact" />

        </div>
      }



    </>
  )
}

export default Investments