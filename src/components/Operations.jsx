import { useEffect, useState } from 'react'
import db from "../lib/firebase"

// imgs
import involveButton from '../imgs/involvebutton.svg'
import Person from './AdaptPerson'
import Project from './Projects'
import BigText from './Bigtext'
import Events from './EventBlock'
// components
import Navbar from './Navbar'
import NavDrop from './NavDrop'


import { useMediaQuery } from 'react-responsive'


import Evan from "../imgs/EvanFenster_Operations.jpg"

const Development = () => {

  const portraits = [
    { image: Evan, name: "Evan Fenster", description: "Director of Operations", bio: "CS & Biz Analytics", bio2: "Product @ Celo, DAO Research @ Wharton" },
  ]

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const [spotlights, setSpotlights] = useState([]);

  // Retrieve firestore data
  useEffect(() => {
    db.collection("operations-spotlights")
      .orderBy("order")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setSpotlights(data)
      })
  }, [])


  return (
    <>
      {isTabletOrMobile &&
        <div className="flex flex-col h-screen text-white font-mono bg-background ">
          <div className="py-12 ">
            <NavDrop />
          </div>

          {/* Welcome section */}
          <div className="flex flex-col mx-32 items-center">
            <BigText name={"Operations"} description={"The Operations Committee of FranklinDAO is a group of highly skilled individuals dedicated to the growth and success of the DAO. The team is responsible for several key functions, including organizing and sending members to relevant conferences and events, developing relationships and partnerships with protocols and companies in the space, establishing and maintaining brand guidelines, and facilitating connections between members and full-time opportunities with protocols."} size={"940px"} />

            <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} bio2={portraits[0].bio2} linkedin="https://www.linkedin.com/in/evanfen/" twitter="https://twitter.com/evanfenster" />

            {/* <BigText name={"Spotlights"} description={"Articles and past work done by operations committee members"} size={"100px"} />

            {spotlights.map(spotlight => (
              <Events title={spotlight.title} image={spotlight.image} />
            ))} */}
          </div>
        </div>
      }

      {isDesktopOrLaptop &&
        <div className="flex flex-col h-screen text-white font-mono bg-background ">
          <div className="py-12 ">
            <Navbar />
          </div>

          {/* Welcome section */}
          <div className="flex flex-col mx-32 items-center">
            <BigText name={"Operations"} description={"The Operations Committee of FranklinDAO is a group of highly skilled individuals dedicated to the growth and success of the DAO. The team is responsible for several key functions, including organizing and sending members to relevant conferences and events, developing relationships and partnerships with protocols and companies in the space, establishing and maintaining brand guidelines, and facilitating connections between members and full-time opportunities with protocols."} size={"940px"} />
            <div className='flex flex-row '>
              <div className="mx-5"> <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} bio2={portraits[0].bio2} linkedin="https://www.linkedin.com/in/evanfen/" twitter="https://twitter.com/evanfenster" /></div>
            </div>
            {/* <BigText name={"Spotlights"} description={"Articles and past work done by operations committee members"} size={"100px"} />

            <div className='flex flex-row pb-60' >
              {spotlights.map(spotlight => (
                <Events title={spotlight.title} image={spotlight.image} />
              ))}
            </div> */}

          </div>
        </div>
      }
    </>
  )
}

export default Development