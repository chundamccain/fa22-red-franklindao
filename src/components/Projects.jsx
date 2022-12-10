// imgs
import React from 'react';
import styled from 'styled-components';
import leftarr from '../imgs/Vector52.png';
import rightarr from '../imgs/Vector51.png';



import {
  ButtonBack, ButtonFirst, ButtonLast, ButtonNext,
  CarouselProvider, DotGroup, Image, ImageWithZoom, Slide, Slider,
}  from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Projects = () => (
 
      
    <CarouselProvider
    visibleSlides={1}
    totalSlides={3}
    naturalSlideWidth={9}
    naturalSlideHeight={3}
    hasMasterSpinner

    className="grid h-screen place-items-center"
  >

    <div className='flex flex-row'>
    
    <ButtonBack style = {{padding: "50px"}}><Image style={{ height: "80px" }} src={leftarr} /> </ButtonBack>

    <Slider style={{ width: "1047px"}}>
      <Slide style={{ padding: "5em 0em", height: "668px" }} tag="a" index={0}>
        <Wrapper className = "border-8 border-purple font-mono flex flex-row items-center align-items justify-center h-screen pb-0 rounded-3xl" >
            <div className= "flex flex-col">
              <Text1>Project Name</Text1>
              <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol</Text2>
            </div>
            <Image style = {{width: "500px" , padding:"50px"}}src="http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg" />
        </Wrapper>
      </Slide>
      <Slide style={{ padding: "5em 0em", height: "668px" }} tag="a" index={1}>
        <Wrapper className = "border-8 border-purple  font-mono flex flex-row items-center align-items justify-center h-screen pb-0 rounded-3xl" >
            <div className= "flex flex-col">
              <Text1>Project Name</Text1>
              <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol</Text2>
            </div>
            <Image style = {{width: "500px" , padding:"50px"}}src="http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg" />
        </Wrapper>
      </Slide>
      <Slide style={{ padding: "5em 0em", height: "668px" }} tag="a" index={2}>
        <Wrapper className = "border-8 border-purple  font-mono flex flex-row items-center align-items justify-center h-screen pb-0 rounded-3xl" >
            <div className= "flex flex-col">
              <Text1>Project Name</Text1>
              <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol</Text2>
            </div>
            <Image style = {{width: "500px" , padding:"50px"}}src="http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg" />
        </Wrapper>
      </Slide>
    
    </Slider>

    <ButtonNext style = {{padding: "50px"}}><Image style={{ height: "80px" }} src={rightarr} /> </ButtonNext>

    </div>

  </CarouselProvider>
);

export default Projects;



// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
width: 1047px;
height: 668px;


`;

const Text1 = styled.text`
font-style: normal;
text-align: center;
font-weight: 700;
font-family: 'Karla';
margin-bottom: 50px;
font-size: 40px;
line-height: 47px;
/* identical to box height */


color: #FFFFFF;
`;

const Text2 = styled.text`
width: 365px;
height: 350px;
font-style: normal;
font-weight: 400;
font-family: 'Karla';
font-size: 24px;
line-height: 28px;
text-align: center;

color: #FFFFFF;
`;

