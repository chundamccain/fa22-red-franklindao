import { useEffect, useState } from 'react'
import db from "../lib/firebase"

import Navbar from './Navbar'
import BigText from './Bigtext'
import Events from './EventBlock'
import submitButton from '../imgs/submitbutton.svg'
import Upcoming from './UpcomingEvent'
import NavDrop from './NavDrop'
import ContactForm from './ContactForm'

import { useMediaQuery } from 'react-responsive'

import Vivian from "../imgs/Vivia.jpg"
import Omar from "../imgs/OmarAmeen_Events.jpg"

const EventsPage = () => {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

    const portraits = [
      {image: Vivian, name: "Vivian Zhu", description: "Development Director", bio: "Insert Small Bio"},
      { image: Omar, name :"Omar Ameen", description : "Events Director", bio : "Insert Small Bio"},
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
                        <BigText name={"Events"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"} />
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
                            <Events title={pastEvent.title} image={pastEvent.image} />
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
                        <BigText name={"Events"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"} />
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
                            <Events title={pastEvent.title} image={pastEvent.image} />
                        ))}
                    </div>

                    <ContactForm title="Workshop/Collaboration Form" />
                </div>
            }
        </>
    )

}
export default EventsPage