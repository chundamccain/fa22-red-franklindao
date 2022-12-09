// imgs
import image2 from '../imgs/image2.png'
import image1 from '../imgs/image1.png'
import involveButton from '../imgs/involvebutton.svg'

// components
import styled from 'styled-components';



const Person = ({name, description}) => {

  return (
    <>
        <div className = "flex flex-col items-center">

            <img className = "border-blue border-8 h-56 w-56 m-6 rounded-full" src = "https://d.newsweek.com/en/full/1905075/file-photo-smiling-dog.jpg" alt = ""/>

  
            <Text1>Insert Name</Text1>
            <Text2>Managing Director</Text2>
            <Text2>Insert Small Bio</Text2>

            <div className = "flex flex-row m-6">
              <img className = "m-1 bg-purple" src = {image2} alt = ""/>
              <img className = "m-1 bg-purple" src = {image1} alt = ""/>
            </div>


        </div>
      
    </>
  )
}

export default Person


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
