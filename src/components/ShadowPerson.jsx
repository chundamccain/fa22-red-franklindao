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
      <img className = "border-purple border-8 h-56 w-56 mt-8 rounded-full" src={image} alt = ""/>
    
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


const Imageoverlay = styled.div`
width: 100%;
height: 100%;
background: rgba(34, 167, 240, .5);
z-index: 3;

`;

