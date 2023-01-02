import { Link } from 'react-router-dom';

const CommitteeBlock = ({img, link, name, description}) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Link className="Nav__link" to={link}>
          <img src={img} className="w-28" alt=""/>
        </Link>

        <div className="mt-5 text-xl font-semibold">
          {name}
        </div> 

        <div className="mt-1 text-grey text-lg text-center">
          {description}
        </div>
      </div>
    </>
  )
}


export default CommitteeBlock