import Navbar from './Navbar'
import BigText from './Bigtext'
import Events from './EventBlock'
import submitButton from '../imgs/submitbutton.svg'

const EventsPage = () => {
    return (
        <>
            <div className="flex flex-col h-screen text-white font-mono bg-background">

                <div className="py-12 ">
                    <Navbar />
                </div>

                <div className="flex flex-col mx-32 items-center">

                    <BigText name={"Events"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"} />

                </div>

                <div className='flex flex-col justify-center items-center text-4xl font-semibold pb-60'>
                    Upcoming Events
                </div>

                <div className='flex flex-col justify-center items-center text-4xl font-semibold'>
                    Past Events
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row pb-60' >
                        <Events title={"TITLE"} />
                        <Events title={"TITLE"} />
                        <Events title={"TITLE"} />
                    </div>
                </div>


                <div className="flex justify-center items-center h-scree mt-28">
                    <div className="flex flex-col items-center">
                        <div className="text-4xl">
                            Workshop/Collaboration Form
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
        </>
    )

}
export default EventsPage