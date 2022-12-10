import { Link } from 'react-router-dom';

const CommitteeBlock = ({img, link, name, description}) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Link className="Nav__link" to={link}>
          <img src={img} className="w-36" alt=""/>
        </Link>

        <div className="mt-5 text-xl font-bold">
          {name}
        </div> 

        <div className="mt-1 text-grey text-xl">
          {description}
        </div>
      </div>
    </>
  )
}


export default CommitteeBlock