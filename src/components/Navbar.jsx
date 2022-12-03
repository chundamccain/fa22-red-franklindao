// imgs
import logo from  '../imgs/logo.svg'
import involveButton from '../imgs/involvebutton.svg'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
        <div className='flex flex-col'>
        <Link className="Nav__link" to="/development">Development</Link>
        <Link className="Nav__link" to="/investments">Investments</Link> 
        <Link className="Nav__link" to="/director">Diector</Link>
        </div>
    </>
  )
}

export default Navbar