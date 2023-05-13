import { useEffect, useState } from 'react'
import db from "../lib/firebase"

import Navbar from './Navbar'
import BigText from './Bigtext'
import Events from './EventBlock'
import submitButton from '../imgs/submitbutton.svg'
import Upcoming from './UpcomingEvent'
import NavDrop from './NavDrop'
import ContactForm from './ContactForm'
import Person from './AdaptPerson'

import { useMediaQuery } from 'react-responsive'

import Vivian from "../imgs/VivianZhu.jpg"
import Omar from "../imgs/OmarAmeen_Events.jpg"

const EventsPage = () => {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

    const portraits = [
      {image: Vivian, name: "Vivian Zhu", description: "Events Director", bio: "Penn CS & Finance '25", bio2: "Interested in DeFi"},
      {image: Omar, name :"Omar Ameen", description : "Events Director", bio : "Penn CS '25", bio2: "Intersted in Humanitarian Efforts x Crypto"},
    ]

    const [pastEvents, setPastEvents] = useState([])
    const [upcomingEvents, setUpcomingEvents] = useState([])

    // Retrieve firestore data
    useEffect(() => {
        db.collection("events-past")
            .orderBy("order")
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))

                setPastEvents(data)
            })

        db.collection("events-upcoming")
            .orderBy("order")
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))

                setUpcomingEvents(data)
            })
    }, [])

    return (
        <>
            {isTabletOrMobile &&
                <div className="flex flex-col h-screen text-white font-mono bg-background">
                    <div className="py-12 ">
                        <NavDrop />
                    </div>

                    <div className="flex flex-col mx-32 items-center">
                        <BigText name={"Events"} description={"Welcome to the Events Committee of the Penn Blockchain Club! Our mission is to connect University of Pennsylvania students with the broader Web3 industry and build a vibrant community in this exciting and rapidly evolving space. Through our speaker sessions, workshops, hackathons, and annual Penn Blockchain Conference, we provide opportunities for members to exchange ideas, explore new technologies, and network with industry leaders. We are dedicated to fostering innovation, collaboration, and career development, and we invite you to join us in shaping the future of the Web3 ecosystem."} />

                        <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} bio2={portraits[0].bio2} twitter="https://twitter.com/vivzhuu" linkedin="https://www.linkedin.com/in/vivianzhu88/" />
                        <Person image={portraits[1].image} name={portraits[1].name} description={portraits[1].description} bio={portraits[1].bio} bio2={portraits[1].bio2} linkedin="https://www.linkedin.com/in/omar-ameen02/"/>
                    </div>

                    <div className='flex flex-col justify-center items-center text-4xl font-semibold pb-28'>
                        Upcoming Events
                        {upcomingEvents.map(upcomingEvent => (
                            <Upcoming title={upcomingEvent.title} desc={upcomingEvent.desc}
                                month={upcomingEvent.month} day={upcomingEvent.day} image={upcomingEvent.image} />
                        ))}
                    </div>

                    <div className='flex flex-col justify-center items-center text-4xl font-semibold'>
                        Past Events
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        {pastEvents.map(pastEvent => (
                            <Events title={pastEvent.title} image={pastEvent.image} about={pastEvent.about} />
                        ))}
                    </div>


                    <div className="flex justify-center items-center h-scree mt-28">
                        <div className="flex flex-col items-center">
                            <div className="text-4xl">
                                Collaboration Form
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

                    <div className="flex flex-col mx-32 items-center">
                        <BigText name={"Events"} description={"Welcome to the Events Committee of the Penn Blockchain Club! Our mission is to connect University of Pennsylvania students with the broader Web3 industry and build a vibrant community in this exciting and rapidly evolving space. Through our speaker sessions, workshops, hackathons, and annual Penn Blockchain Conference, we provide opportunities for members to exchange ideas, explore new technologies, and network with industry leaders. We are dedicated to fostering innovation, collaboration, and career development, and we invite you to join us in shaping the future of the Web3 ecosystem."} />

                        <div className='flex flex-row '>
                          <div className="mx-5"> <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} bio2={portraits[0].bio2} twitter="https://twitter.com/vivzhuu" linkedin="https://www.linkedin.com/in/vivianzhu88/" /></div>
                          <div className="mx-5"> <Person image={portraits[1].image} name={portraits[1].name} description={portraits[1].description} bio={portraits[1].bio} bio2={portraits[1].bio2} linkedin="https://www.linkedin.com/in/omar-ameen02/"/></div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center text-4xl font-semibold pb-28'>
                        Upcoming Events
                        {upcomingEvents.map(upcomingEvent => (
                            <Upcoming title={upcomingEvent.title} desc={upcomingEvent.desc}
                                month={upcomingEvent.month} day={upcomingEvent.day} image={upcomingEvent.image} />
                        ))}
                    </div>
                    
                    <div className='flex flex-col justify-center items-center text-4xl font-semibold'>
                        Past Events
                    </div>

                    <div className='flex flex-row justify-center items-center'>
                        {pastEvents.map(pastEvent => (
                            <Events title={pastEvent.title} image={pastEvent.image} about={pastEvent.about}/>
                        ))}
                    </div>

                    <ContactForm title="Workshop/Collaboration Form" fkey="xnqyvqnj" />
                </div>
            }
        </>
    )

}
export default EventsPage