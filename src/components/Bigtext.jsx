// imgs
import image2 from '../imgs/image2.png'
import image1 from '../imgs/image1.png'
import involveButton from '../imgs/involvebutton.svg'
import { useMediaQuery } from 'react-responsive'

// components
import styled from 'styled-components';



const BigText = ({name, description, size}) => {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <>
     {isTabletOrMobile && 
    <div className = "m-8 items-center w-[25rem]">

        <div className = "flex flex-col items-center">

            <Text1>{name}</Text1>
            <Text2 className = "m-8">{description}</Text2>

        </div>

    </div>
  }
   {isDesktopOrLaptop && 
    <div className = "m-8 items-center w-[60rem]">

        <div className = "flex flex-col items-center">

            <Text1>{name}</Text1>
            <Text2 className = "m-8">{description}</Text2>

        </div>

    </div>
  }
      
    </>
  )
}

export default BigText


const Text1 = styled.text`
font-style: normal;
font-weight: 700;
font-family: 'Karla';

font-size: 40px;
line-height: 47px;
text-align: center;



color: #FFFFFF;
`;


const Text2 = styled.text`
font-style: normal;
font-weight: 400;
font-size: 24px;
font-family: 'Karla';

line-height: 33px;
text-align: center;

color: #FFFFFF;
`;


const image = styled.div`
font-style: normal;
font-style: normal;
font-weight: 400;
font-size: 24px;
font-family: 'Karla';

line-height: 28px;

color: #FFFFFF;
`;

