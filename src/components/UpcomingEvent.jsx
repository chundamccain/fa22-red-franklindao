import styled from 'styled-components';


const UpcomingEvent = ({title}) => {

    return (
      <>
        <div className="flex flex-row m-8">
          <div style = {{width: "175px", height: "118px", background : "#D9D9D9"}}></div>
          <div className = "flex flex-col m-8">
            <Text1>DEC</Text1>
            <Text2>25</Text2>
          </div>
          <div className = "flex flex-col m-8">
            <Text2>EVENT NAME</Text2>
            <Text3>Description</Text3>
          </div>
        </div>
      </>
    )
  }
  
  export default UpcomingEvent



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


  
  