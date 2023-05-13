const MediaBlock = ({name, image, link}) => {

  return (
    <>
      <div className="flex flex-col items-center mt-12 mb-20 ml-3 mr-3">
        <div className="flex flex-col w-72 py-6 px-6 rounded-3xl border-4 border-purple">
          <div className = "object-cover w-80 h-60 border-blue rounded-lg" alt = "">
            {/* <a href={link}><img src={image} alt="PBC Shorts" border="0"/></a> */}
            <iframe className="object-cover w-80 h-60 border-blue rounded-lg" width="80%" src="https://www.youtube.com/embed/tKuN01si_0I" title="Is centralization inevitable? 🤔" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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