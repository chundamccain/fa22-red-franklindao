const EventBlock = ({title}) => {

  return (
    <>
      <div className="flex flex-col items-center m-6">
        <div className="mb-2 text-xl">
          {title}
        </div>

        <div className="flex flex-col w-72 py-2 px-2 rounded-lg bg-dark_purple">
          <img className = "border-blue rounded-lg" src="https://d.newsweek.com/en/full/1905075/file-photo-smiling-dog.jpg" alt = ""/>
          <button className="mt-4 text-lg">
            read more
          </button> 
        </div>
      </div>
    </>
  )
}

export default EventBlock

