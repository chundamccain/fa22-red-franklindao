// imgs
import involveButton from '../imgs/involvebutton.svg'
import twitter from '../imgs/twitter.png'
import researchicon from '../imgs/research.png'

// components
import Navbar from './Navbar'
import Person from './AdaptPerson'
import BigText from './Bigtext'
import MediaBlock from './MediaBlock'
import NavDrop from './NavDrop'


import { useMediaQuery } from 'react-responsive'


import Kirill from "../imgs/KirillNaumov_Investments.jpg"
import Omar from "../imgs/OmarAmeen_Events.jpg"
import Sofia from "../imgs/SofiaWawrzyniak_UndergraduatePresident.jpg"

const Research = () => {


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

            <BigText name={"Research"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"} />

            <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} />
            <Person image={portraits[1].image} name={portraits[1].name} description={portraits[1].description} bio={portraits[1].bio} />
            <Person image={portraits[2].image} name={portraits[2].name} description={portraits[2].description} bio={portraits[2].bio} />


          </div>

          <div className="pt-24 pb-20 flex flex-col justify-center items-center">
            <span className="text-4xl font-semibold p-5">
              Spotlights
            </span>
            <span className="text-lg text-center">
              Articles and past work done by operations commitee members
            </span>

          </div>

          <div className='flex flex-col text-4xl items-center'>
            <span className=" text-center mx-32  font-semibold pt-10">
              Twitter
            </span>
            <img className="w-36 h-30 " src={twitter} alt="" />

            <span className='  mt-10 mx-4 text-center text-[20px] leading-[22px]'>
              Lorem ipsum
            </span>

            <span className=' mt-10 mx-4 text-center text-[20px] leading-[22px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </span>

            <span className=' mt-10 mx-4 text-center text-[20px] leading-[22px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </span>
          </div>

          <div>
            <span className="flex flex-col justify-center text-center items-center text-4xl font-semibold mt-40">
              Videos, Podcasts, Audio
              <div className='flex flex-col'>
                <MediaBlock name={"TITLE"} />
                <MediaBlock name={"TITLE"} />
                <MediaBlock name={"TITLE"} />
              </div>

            </span>


          </div>
          {/*Videos*/}

          <div className='flex flex-col text-4xl items-center'>
            <span className=" text-center mx-32  font-semibold pt-10">
              Long-form Research
            </span>
            <img className="w-32 h-26 py-6" src={researchicon} alt="" />

            <span className='  mt-10 mx-4 text-center text-[20px] leading-[22px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </span>

            <span className=' mt-10 mx-4 text-center text-[20px] leading-[22px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </span>

            <span className=' mt-10 mx-4 text-center text-[20px] leading-[22px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </span>
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

            <BigText name={"Research"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"} />

            <div className='flex flex-row '>
              <div className="mx-5"> <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} /></div>
              <div className="mx-5"><Person image={portraits[1].image} name={portraits[1].name} description={portraits[1].description} bio={portraits[1].bio} /></div>
              <div className="mx-5"><Person image={portraits[2].image} name={portraits[2].name} description={portraits[2].description} bio={portraits[2].bio} /></div>
            </div>
          </div>

          <div className="pt-24 pb-20 flex flex-col justify-center items-center">
            <span className="text-4xl font-semibold p-5">
              Spotlights
            </span>
            <span className="text-lg">
              Articles and past work done by operations
            </span>
            <span className="text-lg">
              commitee members
            </span>
          </div>

          <div className='flex flex-row pl-10'>
            <span className="flex flex-col justify-left text mx-32 text-4xl font-semibold pt-10">
              Twitter
            </span>

            {/* Populate Tweet Data Inside*/}
            <div className='flex flex-col pr-10 pl-28'>
                <div className='flex flex-row'>
                  <img className="w-40 py-6" src={twitter} alt="" />
                  <blockquote class="twitter-tweet ml-6 pt-12"><p lang="en" dir="ltr">Research member <a href="https://twitter.com/0xPhoreal?ref_src=twsrc%5Etfw">@0xPhoreal</a> explains the importance of zkEVMs with zkSync. Check out his helpful thread! <a href="https://twitter.com/hashtag/L222?src=hash&amp;ref_src=twsrc%5Etfw">#L222</a> <a href="https://twitter.com/hashtag/ZkEVM?src=hash&amp;ref_src=twsrc%5Etfw">#ZkEVM</a> <a href="https://twitter.com/hashtag/ZKP?src=hash&amp;ref_src=twsrc%5Etfw">#ZKP</a> <a href="https://twitter.com/hashtag/Polygon?src=hash&amp;ref_src=twsrc%5Etfw">#Polygon</a> <a href="https://t.co/H7Up043vNe">https://t.co/H7Up043vNe</a></p>&mdash; FranklinDAO (@franklin_dao) <a href="https://twitter.com/franklin_dao/status/1610351542519083009?ref_src=twsrc%5Etfw">January 3, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>

                <div className='flex flex-row'>
                  <img className="w-40 py-6" src={twitter} alt="" />
                  <blockquote class="twitter-tweet ml-6 pt-12" data-theme="dark"><p lang="en" dir="ltr">We take a look at undercollateralized/RWA lending protocols and why they&#39;re attractive from a TradFi framework:<a href="https://t.co/OEQvtbM9IK">https://t.co/OEQvtbM9IK</a></p>&mdash; FranklinDAO (@franklin_dao) <a href="https://twitter.com/franklin_dao/status/1606541337951899650?ref_src=twsrc%5Etfw">December 24, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>

                <div className='flex flex-row'>
                  <img className="w-40 py-6" src={twitter} alt="" />
                  <blockquote class="twitter-tweet ml-6 pt-12"><p lang="en" dir="ltr">We take a look at undercollateralized/RWA lending protocols and why they&#39;re attractive from a TradFi framework:<a href="https://t.co/OEQvtbM9IK">https://t.co/OEQvtbM9IK</a></p>&mdash; FranklinDAO (@franklin_dao) <a href="https://twitter.com/franklin_dao/status/1606541337951899650?ref_src=twsrc%5Etfw">December 24, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
            </div>
          </div>

          <div>
            <span className="flex flex-col justify-center items-center text-4xl font-semibold mt-28">
              Videos, Podcasts, Audio
              <div className='flex flex-row'>
                <MediaBlock name={"TITLE"} />
                <MediaBlock name={"TITLE"} />
                <MediaBlock name={"TITLE"} />
              </div>

            </span>


          </div>
          {/*Videos*/}

          <div className='flex flex-row pl-10 mt-16'>
            <span className="flex flex-col justify-left text ml-32 text-4xl font-semibold pt-10">
              Long-form Research
            </span>

            {/* Populate Research Data Inside*/}
            <div className='flex flex-col pr-10 pl-20'>
              <div className='flex flex-row'>
                <img className="w-32 py-6" src={researchicon} alt="" />
                <div className="ml-6 pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </div>
              </div>

              <div className='flex flex-row'>
                <img className="w-32 py-6" src={researchicon} alt="" />
                <div className="ml-6 pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </div>
              </div>

              <div className='flex flex-row'>
                <img className="w-32 py-6" src={researchicon} alt="" />
                <div className="ml-6 pt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Research