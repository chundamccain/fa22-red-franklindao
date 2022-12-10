import Navbar from './Navbar'
import BigText from './Bigtext'
import Person from './Person'
import EventBlock from './EventBlock'

const Education = () => {
    return (
        <>
            <div className="flex flex-col h-screen text-white font-mono bg-background">

                <div className="py-12 ">
                    <Navbar />
                </div>

                <div className="flex flex-col mx-32 items-center">

                    <BigText name={"Education"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol"} />

                </div>


                <div className='flex flex-col justify-center items-center text-4xl font-semibold'>
                    Instructors
                </div>

                <div className='flex flex-row justify-center items-center'>
                    <Person />
                    <Person />
                    <Person />
                </div>

                <div className='flex flex-col justify-center items-center text-4xl font-semibold pt-20 pb-20'>
                    Past Guest Speakers
                </div>

                <div className='flex flex-row justify-center items center'>

                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />

                </div>

                <div className='flex flex-row justify-center items center'>

                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />
                    <EventBlock name={"TITLE"} />

                </div>

            </div>

        </>
    )
}
export default Education