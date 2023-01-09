import { useMediaQuery } from 'react-responsive'


const EventBlock = ({title, image}) => {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  
  return (
    <>
     {isTabletOrMobile && 
      <div className="flex flex-col items-center m-6">
        <div className="mb-2 text-xl">
          {title}
        </div>

        <div className="flex flex-col w-72 py-2 px-2 rounded-lg bg-dark_purple">
          <img className = "border-blue object-cover w-72 h-52 rounded-lg" src={image} alt = ""/>
          <button className="mt-4 text-lg">
            read more
          </button> 
        </div>
      </div>
}

    {isDesktopOrLaptop && 
      <div className="flex flex-col items-center m-6">
        <div className="mb-2 text-xl">
          {title}
        </div>

        <div className="flex flex-col w-72 py-2 px-2 rounded-lg bg-dark_purple">
          <img className = "border-blue object-cover w-72 h-52 rounded-lg" src={image} alt = ""/>
          <button className="mt-4 text-lg">
            read more
          </button> 
        </div>
      </div>
}
    </>
  )
}

export default EventBlock

