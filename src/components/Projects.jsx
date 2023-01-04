// imgs
import React from 'react';
import styled from 'styled-components';
import leftarr from '../imgs/Vector52.png';
import rightarr from '../imgs/Vector51.png';
import { useMediaQuery } from 'react-responsive'


import {
  ButtonBack, ButtonFirst, ButtonLast, ButtonNext,
  CarouselProvider, DotGroup, Image, ImageWithZoom, Slide, Slider,
}  from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Projects = () => {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
 
    return(
    <>

{isTabletOrMobile && 
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

    <div className = "border-8 border-purple rounded-3xl">

    <Slider style={{ width: "20rem"}}>
      <Slide style={{ padding: "5em 0em", height: "42rem" }} tag="a" index={0}>
        <WrapperMob className = "font-mono flex flex-col items-center align-items justify-center " >
            <div className= "flex flex-col mx-6">
            <Image className = "rounded-full mx-6" style = {{height: "25rem", width: "25rem"}}src="http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg" />
              <Text1>Project Name</Text1>
              <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </Text2>
            </div>
          
        </WrapperMob>
      </Slide>
      <Slide style={{ padding: "5em 0em", height: "42rem" }} tag="a" index={1}>
      <WrapperMob className = "font-mono flex flex-col items-center align-items justify-center h-screen pb-0 " >
            <div className= "flex flex-col mx-6">
            <Image className = "rounded-full mx-6" style = {{height: "25rem", width: "25rem"}}src="http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg" />
              <Text1>Project Name</Text1>
              <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </Text2>
            </div>
           
        </WrapperMob>
      </Slide>
      <Slide style={{ padding: "5em 0em", height: "42rem" }} tag="a" index={2}>
      <WrapperMob className = "font-mono flex flex-col items-center align-items justify-center h-screen pb-0" >
            <div className= "flex flex-col px-6">
            <Image className = "rounded-full mx-6" style = {{height: "25rem", width: "25rem" , padding:"20px"}}src="http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg" />
              <Text1>Project Name</Text1>
              <Text2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</Text2>
            </div>
           
        </WrapperMob>
      </Slide>
    
    </Slider>

    </div>

    <ButtonNext style = {{padding: "50px"}}><Image style={{ height: "80px" }} src={rightarr} /> </ButtonNext>

    </div>

  </CarouselProvider>
 }


    {isDesktopOrLaptop && 
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

    <div className = "border-8 border-purple rounded-3xl">

    <Slider style={{ width: "60rem"}}>
      <Slide style={{ padding: "5em 0em", height: "42rem" }} tag="a" index={0}>
        <Wrapper className = "font-mono flex flex-row items-center align-items justify-center " >
            <div className= "flex flex-col mx-6">
              <Text1>Project Name</Text1>
              <Text2Mob>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </Text2Mob>
            </div>
            <Image className = "rounded-full mx-6" style = {{height: "25rem", width: "25rem"}}src="http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg" />
        </Wrapper>
      </Slide>
      <Slide style={{ padding: "5em 0em", height: "42rem" }} tag="a" index={1}>
      <Wrapper className = "font-mono flex flex-row items-center align-items justify-center h-screen pb-0 " >
            <div className= "flex flex-col mx-6">
              <Text1>Project Name</Text1>
              <Text2Mob>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </Text2Mob>
            </div>
            <Image className = "rounded-full mx-6" style = {{height: "25rem", width: "25rem"}}src="http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg" />
        </Wrapper>
      </Slide>
      <Slide style={{ padding: "5em 0em", height: "42rem" }} tag="a" index={2}>
      <Wrapper className = "font-mono flex flex-row items-center align-items justify-center h-screen pb-0" >
            <div className= "flex flex-col px-6">
              <Text1>Project Name</Text1>
              <Text2Mob>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</Text2Mob>
            </div>
            <Image className = "rounded-full mx-6" style = {{height: "25rem", width: "25rem" , padding:"20px"}}src="http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg" />
        </Wrapper>
      </Slide>
    
    </Slider>

    </div>

    <ButtonNext style = {{padding: "50px"}}><Image style={{ height: "80px" }} src={rightarr} /> </ButtonNext>

    </div>

  </CarouselProvider>
 }
  </>
    )
    };

export default Projects;



// Create a Wrapper component that'll render a <section> tag with some styles


const WrapperMob = styled.section`
width: 20rem;
height: 668px;
`;

const Text2Mob = styled.text`
height: 15rem;
width: 15rem;

font-style: normal;
font-weight: 400;

font-family: 'Karla';
font-size: 24px;
line-height: 28px;
text-align: center;

color: #FFFFFF;
`;


const Wrapper = styled.section`
width: 60rem;
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
height: 15rem;
width: 20rem;

font-style: normal;
font-weight: 400;

font-family: 'Karla';
font-size: 24px;
line-height: 28px;
text-align: center;

color: #FFFFFF;
`;

