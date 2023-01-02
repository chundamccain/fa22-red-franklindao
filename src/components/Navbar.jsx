// imgs
import logo from  '../imgs/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className=" flex flex-row justify-between align-center pl-16 mr-16">
          <div className=" flex">
            <Link className="Nav__link" to="/">
              <img src={logo} alt="" className="justify-self-start w-32 py-1 ml-14 shadow-md hover:shadow-xl" />
            </Link>
          </div>
          <div className="basis-1/3 flex justify-self-center justify-center items-center gap-12 text-xl">
              <Link className="Nav__link" to="/development">Development</Link>
              <Link className="Nav__link" to="/investments">Investments</Link> 
              <Link className="Nav__link" to="/operations">Operations</Link>
              <Link className="Nav__link" to="/research">Research</Link>
              <Link className="Nav__link" to="/events">Events</Link>
              <Link className="Nav__link" to="/education">Education</Link>
          </div>
        </div>

    </>
  )
}

export default Navbar