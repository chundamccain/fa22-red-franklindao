// imgs
import logo from  '../imgs/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between align-center pl-16 mr-16">
          <div className="basis-1/3 flex">
            <Link className="Nav__link" to="/">
              <img src={logo} alt="" className="justify-self-start w-32 py-1 ml-14 shadow-md hover:shadow-xl" />
            </Link>
          </div>
          <ul className="basis-1/3 flex justify-self-center justify-center items-center gap-12 text-xl">
            <li>
              <Link className="Nav__link" to="/development">Development</Link>
            </li>
            <li>
              <Link className="Nav__link" to="/investments">Investments</Link> 
            </li>
            <li>
              <Link className="Nav__link" to="/operations">Operations</Link>
            </li>
            <li>
              <Link className="Nav__link" to="/research">Research</Link>
            </li>
            <li>
              <Link className="Nav__link" to="/events">Events</Link>
            </li>
            <li>
              <Link className="Nav__link" to="/education">Educations</Link>
            </li>
          </ul>
        </div>

    </>
  )
}

export default Navbar