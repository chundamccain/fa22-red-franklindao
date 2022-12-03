// imgs
import logo from  '../imgs/logo.svg'
import involveButton from '../imgs/involvebutton.svg'

// components
import Navbar from './Navbar'

const Development = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-white font-mono bg-background">
        <div className="py-12 ">
          <Navbar />
        </div>

        {/* Welcome section */}
        <div className="flex flex-col mx-32">
          {/* Welcome Text */}
          <div className="mt-32 text-6xl font-semibold w-3/4">
            <span >
              Welcome to the
            </span>
            <span className="ml-9 mr-9 text-purple"> 
              Development
            </span>
            <span >
              page
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Development