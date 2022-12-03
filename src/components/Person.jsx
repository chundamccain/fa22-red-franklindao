// imgs

// components
import styled from 'styled-components';



const Person = ({name, description}) => {

  return (
    <>
   
    <div styles = {{width: "216px", height: "430"}}>

        <div className = "flex flex-col">

            <img className = "border-blue border-8" styles = {{width: "216px", height:"216px"}}src = "https://d.newsweek.com/en/full/1905075/file-photo-smiling-dog.jpg"/>
            <Text1>Dog</Text1>
            <Text2>nyuk nyuk nyuk nyuk nyuk</Text2>

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
