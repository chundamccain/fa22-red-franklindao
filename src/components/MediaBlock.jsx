const MediaBlock = ({name, image}) => {

  return (
    <>
      <div className="flex flex-col items-center mt-12 mb-20 ml-3 mr-3">
        <div className="flex flex-col w-72 py-6 px-6 rounded-3xl border-4 border-purple">
          <div className = "object-cover w-80 h-60 border-blue rounded-lg" alt = "">
            <iframe src={image}
              frameborder='0'
              allow='autoplay; encrypted-media'
              allowfullscreen
              title='video'
            />
          </div>
          <button className="mt-8 py-2 text-lg border-4 border-purple text-purple underline rounded-full">
            {name}
          </button> 
        </div>
      </div>
    </>
  )
}

export default MediaBlock