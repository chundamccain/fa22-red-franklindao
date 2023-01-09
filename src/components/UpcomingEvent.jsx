import styled from 'styled-components';


import { useMediaQuery } from 'react-responsive'
const UpcomingEvent = ({ title, desc, month, day, image }) => {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


  return (
    <>
      {isTabletOrMobile &&
        <div className="flex flex-row m-8">
          <img className="object-cover w-64 h-48" src={image} />
          <div className="flex flex-col p-3">
            <Text1Mob>{month}</Text1Mob>
            <Text2Mob>{day}</Text2Mob>
          </div>
          <div className="flex flex-col py-3">
            <Text2Mob>{title}</Text2Mob>

          </div>
        </div>
      }

      {isDesktopOrLaptop &&
        <div className="flex flex-row m-8">
          <img className="object-cover w-64 h-48" src={image} />
          <div className="flex flex-col m-8">
            <Text1>{month}</Text1>
            <Text2>{day}</Text2>
          </div>
          <div className="flex flex-col m-8">
            <Text2>{title}</Text2>
            <Text3>{desc}</Text3>
          </div>
        </div>
      }
    </>
  )
}

export default UpcomingEvent
const Text1Mob = styled.text`
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  
  color: #B05EC8;
  `;

const Text2Mob = styled.text`
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  
  color: #FFFFFF;
  `;

const Text3Mob = styled.text`
  font-family: 'Karla';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  
  color: #FFFFFF;
  `;



const Text1 = styled.text`
font-family: 'Karla';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
text-align: center;

color: #B05EC8;
`;

const Text2 = styled.text`
font-family: 'Karla';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
text-align: center;

color: #FFFFFF;
`;

const Text3 = styled.text`
font-family: 'Karla';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;
`;



