// imgs
import image2 from '../imgs/image2.png'
import image1 from '../imgs/image1.png'
import involveButton from '../imgs/involvebutton.svg'

// components
import styled from 'styled-components';



const BigText = ({name, description, size}) => {

  return (
    <>
   
    <div className = "m-8 items-center" styles = {{width: size}}>

        <div className = "flex flex-col items-center">

            <Text1>{name}</Text1>
            <Text2 className = "m-8">{description}</Text2>

        </div>

    </div>
      
    </>
  )
}

export default BigText


const Text1 = styled.text`
font-family: 'Menlo';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 47px;
text-align: center;



color: #FFFFFF;
`;


const Text2 = styled.text`
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
text-align: center;

color: #FFFFFF;
`;


const image = styled.div`
font-style: normal;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;
`;

