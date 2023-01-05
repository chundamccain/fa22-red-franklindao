import * as React from 'react';


// imgs
import logo from  '../imgs/logo.svg'
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const NavDrop = () => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
    

    <script src="node_modules/flowbite/dist/flowbite.js"></script>


      <div className=" flex flex-col justify-between align-center items-center mx-16">
          <div className=" flex flex-col items-center align-center">
            <Link className=" Nav__link" to="/">
              <img src={logo} alt="" className="justify-self-start w-32 shadow-md hover:shadow-xl" />
            </Link>
          </div>
            {/* <div className="basis-1/3 flex justify-self-center justify-center items-center gap-12 text-xl">
              <Link className="Nav__link" to="/development">Development</Link>
              <Link className="Nav__link" to="/investments">Investments</Link> 
              <Link className="Nav__link" to="/operations">Operations</Link>
              <Link className="Nav__link" to="/research">Research</Link>
              <Link className="Nav__link" to="/events">Events</Link>
              <Link className="Nav__link" to="/education">Education</Link>
            </div> */}

            <div className='flex flex-col items-center'>
              <button onClick={handleOpen}>Navigate</button>
            {
            open ? 
            
            
            <div className="bg-purple flex flex-col items-center text-xl gap-2 p-9 mt-10 z-20 absolute rounded-3xl">

                    <Link className="Nav__link" to="/development">Development</Link>
                    <Link className="Nav__link" to="/investments">Investments</Link> 
                    <Link className="Nav__link" to="/operations">Operations</Link>
                    <Link className="Nav__link" to="/research">Research</Link>
                    <Link className="Nav__link" to="/events">Events</Link>
                    <Link className="Nav__link" to="/education">Education</Link>
            </div>
            
            :
            <div></div>
            
            }

          </div>


        </div>

    </>
  )
}

export default NavDrop