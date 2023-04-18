// imgs
import image2 from '../imgs/image2.png'
import image1 from '../imgs/image1.png'
import involveButton from '../imgs/involvebutton.svg'

// components
import styled from 'styled-components';

const AdaptPerson = ({name, description, bio, bio2, image, twitter, linkedin}) => {

  return (
    <>
      <div className = "flex flex-col items-center">
        <img className = "mb-8 border-purple border-8  w-72 rounded-full object-cover" src={image} alt = ""/>

        <Text1>{name}</Text1>
        <Text2>{description}</Text2>
        <Text2>{bio}</Text2>
        <Text3>{bio2}</Text3>

        <div className = "flex flex-row m-6">
          <a href={twitter}><img className = "m-1 bg-purple rounded-md" src = {image2} alt = ""/></a>
          <a href={linkedin}><img className = "m-1 bg-purple rounded-md" src = {image1} alt = ""/></a>
        </div>
      </div>
    </>
  )
}

export default AdaptPerson


const Text1 = styled.text`
font-style: normal;
font-weight: 700;
font-family: 'Karla';
text-align: center;
font-size: 24px;
line-height: 35px;
/* identical to box height */


color: #FFFFFF;
`;


const Text2 = styled.text`
font-style: normal;
text-align: center;
font-weight: 400;
font-size: 1.2rem;
line-height: 1.5rem;

color: #FFFFFF;
`;

const Text3 = styled.text`
font-style: normal;
text-align: center;
font-weight: 400;
font-size: 1rem;
line-height: 1.4rem;

color: #FFFFFF;
`;


const image = styled.div`
font-style: normal;
font-weight: 400;
font-size: 1.4rem;
line-height: 1.8rem;
text-align: center;
color: #FFFFFF;
`;

