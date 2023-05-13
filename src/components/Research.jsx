import { useEffect, useState } from 'react'
import db from "../lib/firebase"

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

import Erik from "../imgs/ErikZhang_Research.jpg"

const Research = () => {


  const portraits = [
    { image: Erik, name: "Erik Zhang", description: "Director of Research", bio: "CS & Finance,'24", bio2:"ex-Slate Path Capital Analyst" }
  ]

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

  const [tweets, setTweets] = useState([])
  const [media, setMedia] = useState([])
  const [longform, setLongform] = useState([])


  useEffect(() => {
    db.collection("research-tweets")
      .orderBy("order")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setTweets(data)
      })

    db.collection("research-media")
      .orderBy("order")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setMedia(data)
      })

    db.collection("research-longform")
      .orderBy("order")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setLongform(data)
      })
  }, [])

  return (
    <>
      {isTabletOrMobile &&
        <div className="flex flex-col h-screen text-white font-mono bg-background">
          <div className="py-12 ">
            <NavDrop />
          </div>

          {/* Welcome section */}
          <div className="flex flex-col mx-32 items-center">

            <BigText name={"Research"} description={"Research writes thesis driven, evidence backed and stress tested industry level research. We work with protocols, VCs, and Hedge Funds, fulfilling various research needs. Reach out to either of the directors if you are interested!"} />

            <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} bio2={portraits[0].bio2} twitter="https://twitter.com/erikbzhang" linkedin = "https://www.linkedin.com/in/erik-zhang/" />

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

            {tweets.map(tweet => (
              <span className='  mt-10 mx-4 text-center text-[20px] leading-[22px]'>
                <div className="content" dangerouslySetInnerHTML={{ __html: tweet.content }} />
              </span>
            ))}
          </div>

          <div>
            <span className="flex flex-col justify-center text-center items-center text-4xl font-semibold mt-40">
              Videos, Podcasts, Audio
              <div className='flex flex-col'>
                {media.map(m => (
                  <MediaBlock name={m.title} image={m.image} />
                ))}
              </div>

            </span>


          </div>
          {/*Videos*/}

          <div className='flex flex-col text-4xl items-center'>
            <span className=" text-center mx-32  font-semibold pt-10">
              Long-form Research
            </span>

            <img className="w-32 h-26 py-6" src={researchicon} alt="" />

            {longform.map(l => (
              <span className='mb-10 mt-10 mx-4 text-center text-[20px] leading-[22px]'>
                {l.content}
              </span>
            ))}
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

            <BigText name={"Research"} description={"Research writes thesis driven, evidence backed and stress tested industry level research. We work with protocols, VCs, and Hedge Funds, fulfilling various research needs. Reach out to either of the directors if you are interested!"} />

            <div className='flex flex-row '>
              <div className="mx-5"> <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} bio2={portraits[0].bio2} twitter="https://twitter.com/erikbzhang" linkedin = "https://www.linkedin.com/in/erik-zhang/" /></div>
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
              {tweets.map(tweet => (
                <div className='flex flex-row'>
                  <img className="w-40 py-6" src={twitter} alt="" />
                  {/* Injects html code from tweet embed */}
                  <div className="mt-12 content" dangerouslySetInnerHTML={{ __html: tweet.content }} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="flex flex-col justify-center items-center text-4xl font-semibold mt-28">
              Videos, Podcasts, Audio
              <div className='flex flex-row'>
                {media.map(m => (
                  <MediaBlock name={m.title} image={m.image} link={m.link} />
                ))}
              </div>

            </span>


          </div>
          {/*Videos*/}

          <div className='flex flex-row pl-10 mt-16'>
            <span className="flex flex-col justify-left text ml-32 text-4xl font-semibold pt-10">
              Long-form Research
            </span>

            {/* Populate Research Data Inside*/}
            <div className='mb-10 flex flex-col pr-10 pl-20'>
              {longform.map(l => (
                <div className='flex flex-row'>
                  <img className="w-32 py-6" src={researchicon} alt="" />
                  <div className="ml-6 pt-6">
                    {l.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Research