const Company = ({company, image}) => {
  return (
    <>
      <div className="mt-3 px-5 flex flex-col items-center">
        <img className="w-56" src={image} alt="" />
        <div className="mt-2 text-xl">
          {company}
        </div>
      </div>
    </>
  )
}

export default Company