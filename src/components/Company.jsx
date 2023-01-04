import purplesquare from '../imgs/purplesquare.svg'

const Company = ({company}) => {
  return (
    <>
      <div className="mt-3 flex flex-col items-center">
        <img className="w-56" src={purplesquare} alt="" />
        <div className="mt-2 text-xl">
          {company}
        </div>
      </div>
    </>
  )
}

export default Company