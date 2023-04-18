import Navbar from './Navbar'
import BigText from './Bigtext'
import Person from './AdaptPerson'
import EventBlock from './EventBlock'

import NavDrop from './NavDrop'


import { useMediaQuery } from 'react-responsive'


import Alexander from "../imgs/Alexander_Education.jpg"

const Education = () => {

    const portraits = [
        { image: Alexander, name: "Alexander Narvaez-Duckworth", description: "Managing Director of Education", bio: "", twitter: "https://twitter.com/_duckthegoat", linkedin: "https://www.linkedin.com/in/alexander-narvaezduckworthduckworth/" },
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

                    <div className="flex flex-col mx-32 items-center">

                        <BigText name={"Education"} description={"The Education committee serves as an interface between the broader Crypto / Web3 commmunity and our organization by producing and distributing a wide range of educational content as well as hosting speaking events and workshops."} />

                    </div>


                    <div className='flex flex-col justify-center items-center text-4xl font-semibold mb-12'>
                        Instructors
                    </div>

                    <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio} twitter="https://twitter.com/_duckthegoat" linkedin="https://www.linkedin.com/in/alexander-narvaezduckworthduckworth/" />
                
                    <div className='flex flex-col justify-center items-center text-4xl font-semibold pt-20 pb-20 text-center'>
                        Past Guest Speakers
                    </div>

                    <EventBlock name={"Tal Rabin"} image={"https://splab.cis.upenn.edu/img/people/TalR.jpg"} about={"https://www.forbes.com/profile/tal-rabin/?sh=27747164131b"} />
                    <EventBlock name={"Lit Protocol"} image={"https://pbs.twimg.com/profile_images/1574493929126477862/Ih_9inRx_400x400.jpg"} about={"https://litprotocol.notion.site/Lit-Protocol-Use-Cases-a94916becdc0411f848c3095722c7864"} />
                    <EventBlock name={"Gemini"} image={"https://pbs.twimg.com/profile_images/1506628290693509129/gD0eqGyF_400x400.jpg"} about={"https://www.gemini.com/about"}/>


                    <EventBlock name={"Binance"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RcIf6nrdkVsnsofrPnL6oJpcEgkUfXXy_w&usqp=CAU"} about={"https://www.binance.com/en/about"}/>
                    <EventBlock name={"Brett Falk"} image={"https://online.seas.upenn.edu/wp-content/uploads/2021/07/brett_hemenway_falk.jpeg"} about={"https://www.cis.upenn.edu/~fbrett/people.html"}/>
                    <EventBlock name={"Galaxy Digital"} image={"https://images.ctfassets.net/f2k4wquz44by/463x5RWiljKDUDreKR2jBr/b63f3a1e75664639bb120e02663c68fc/galaxy.com.png?w=1200&h=675&fit=fill&q=60&fm=jpg&fl=progressive"} about={"https://www.galaxy.com/about/"}/>


                </div>
            }


            {isDesktopOrLaptop &&
                <div className="flex flex-col h-screen text-white font-mono bg-background">

                    <div className="py-12 ">
                        <Navbar />
                    </div>

                    <div className="flex flex-col mx-32 items-center">

                        <BigText name={"Education"} description={"The Education committee serves as an interface between the broader Crypto / Web3 commmunity and our organization by producing and distributing a wide range of educational content as well as hosting speaking events and workshops."} />

                    </div>


                    <div className='flex flex-col justify-center items-center text-4xl font-semibold'>
                        Instructors
                    </div>

                    <div className='flex flex-row justify-center items-center mt-12'>
                        <div className="mx-5"> <Person image={portraits[0].image} name={portraits[0].name} description={portraits[0].description} bio={portraits[0].bio}  twitter="https://twitter.com/_duckthegoat" linkedin="https://www.linkedin.com/in/alexander-narvaezduckworthduckworth/"/></div>
                    </div>

                    <div className='flex flex-col justify-center items-center text-4xl font-semibold pt-20 pb-20'>
                        Past Guest Speakers
                    </div>

                    <div className='flex flex-row justify-center items center'>

                      <EventBlock name={"Tal Rabin"} image={"https://splab.cis.upenn.edu/img/people/TalR.jpg"} about={"https://www.forbes.com/profile/tal-rabin/?sh=27747164131b"} />
                      <EventBlock name={"Lit Protocol"} image={"https://pbs.twimg.com/profile_images/1574493929126477862/Ih_9inRx_400x400.jpg"} about={"https://litprotocol.notion.site/Lit-Protocol-Use-Cases-a94916becdc0411f848c3095722c7864"} />
                      <EventBlock name={"Gemini"} image={"https://pbs.twimg.com/profile_images/1506628290693509129/gD0eqGyF_400x400.jpg"} about={"https://www.gemini.com/about"}/>

                    </div>

                    <div className='flex flex-row justify-center items center'>

                      <EventBlock name={"Binance"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RcIf6nrdkVsnsofrPnL6oJpcEgkUfXXy_w&usqp=CAU"} about={"https://www.binance.com/en/about"}/>
                      <EventBlock name={"Brett Falk"} image={"https://online.seas.upenn.edu/wp-content/uploads/2021/07/brett_hemenway_falk.jpeg"} about={"https://www.cis.upenn.edu/~fbrett/people.html"}/>
                      <EventBlock name={"Galaxy Digital"} image={"https://images.ctfassets.net/f2k4wquz44by/463x5RWiljKDUDreKR2jBr/b63f3a1e75664639bb120e02663c68fc/galaxy.com.png?w=1200&h=675&fit=fill&q=60&fm=jpg&fl=progressive"} about={"https://www.galaxy.com/about/"}/>

                    </div>

                </div>
            }

        </>
    )
}
export default Education