const MediaBlock = ({name}) => {

  return (
    <>
      <div className="flex flex-col items-center mt-20 mb-20 ml-3 mr-3">
        <div className="flex flex-col w-72 py-6 px-6 rounded-3xl border-4 border-purple">
          <img className = "border-blue rounded-lg" src="https://d.newsweek.com/en/full/1905075/file-photo-smiling-dog.jpg" alt = ""/>
          <button className="mt-8 py-2 text-lg border-4 border-purple text-purple underline rounded-full">
            {name}
          </button> 
        </div>
      </div>
    </>
  )
}

export default MediaBlock