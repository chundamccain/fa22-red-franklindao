// imgs
import image2 from '../imgs/image2.png'
import image1 from '../imgs/image1.png'
import involveButton from '../imgs/involvebutton.svg'

// components
import styled from 'styled-components';

const AdaptPerson = ({name, description,bio, image}) => {

  return (
    <>
      <div className = "flex flex-col items-center">
        <img className = "mb-8 border-purple border-8 h-60 w-60  rounded-full" src={image} alt = ""/>

        <Text1>{name}</Text1>
        <Text2>{description}</Text2>
        <Text2>{bio}</Text2>

        <div className = "flex flex-row m-6">
          <img className = "m-1 bg-purple rounded-md" src = {image2} alt = ""/>
          <img className = "m-1 bg-purple rounded-md" src = {image1} alt = ""/>
        </div>
      </div>
    </>
  )
}

export default AdaptPerson


const Text1 = styled.text`
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 35px;
/* identical to box height */


color: #FFFFFF;
`;


const Text2 = styled.text`
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;
`;


const image = styled.div`
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;
`;

