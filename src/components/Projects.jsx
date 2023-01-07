// imgs
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import leftarr from '../imgs/Vector52.png';
import rightarr from '../imgs/Vector51.png';
import { useMediaQuery } from 'react-responsive'
import db from "../lib/firebase"


import {
  ButtonBack, ButtonFirst, ButtonLast, ButtonNext,
  CarouselProvider, DotGroup, Image, ImageWithZoom, Slide, Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Project = (props) => {
  return (
    <Slide style={{ padding: "5em 0em", height: "42rem" }} tag="a" index={props.project.order}>
      <Wrapper className="font-mono flex flex-row items-center align-items justify-center " >
        <div className="flex flex-col mx-6">
          <Text1>{props.project.title}</Text1>
          <Text2>{props.project.desc}</Text2>
        </div>
        <Image className="rounded-full mx-6" style={{ height: "25rem", width: "25rem" }} src={props.project.image} />
      </Wrapper>
    </Slide>
  )
}

const MobileProject = (props) => {
  return (
    <Slide style={{ padding: "5em 0em", height: "42rem" }} tag="a" index={props.project.order}>
      <WrapperMob className="font-mono flex flex-col items-center align-items justify-center h-screen pb-0" >
        <div className="flex flex-col  items-center align-items">
          <Text1Mob>{props.project.title}</Text1Mob>
          <Image className="rounded-full " style={{ height: "10rem", width: "10rem", padding: "20px" }} src={props.project.image} />
          <Text2Mob>{props.project.desc}</Text2Mob>
        </div>

      </WrapperMob>
    </Slide>
  )
}

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Hook to handle the initial fetching of posts

    db.collection("development-projects")
      .orderBy("order")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setProjects(data)
      })
  }, [])

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  console.log(projects)

  return (
    <>

      {isTabletOrMobile &&
        <CarouselProvider
          visibleSlides={1}
          totalSlides={projects.length}
          naturalSlideWidth={9}
          naturalSlideHeight={3}
          hasMasterSpinner
          className="grid h-screen place-items-center"
        >

          <div className='flex flex-row'>
            <ButtonBack style={{ padding: "0px" }}><Image style={{ width: "10px", height: "30px" }} src={leftarr} /> </ButtonBack>
            <div className="">
              <Slider style={{ width: "15rem" }}>
                {projects.map(project => (
                  <MobileProject project={project} key={project.id} />
                ))}
              </Slider>
            </div>
            <ButtonNext style={{ padding: "0px" }}><Image style={{ width: "10px", height: "30px" }} src={rightarr} /> </ButtonNext>
          </div>

        </CarouselProvider>
      }


      {isDesktopOrLaptop &&
        <CarouselProvider
          visibleSlides={1}
          totalSlides={projects.length}
          naturalSlideWidth={9}
          naturalSlideHeight={3}
          hasMasterSpinner

          className="grid h-screen place-items-center"
        >

          <div className='flex flex-row'>

            <ButtonBack style={{ padding: "50px" }}><Image style={{ height: "80px" }} src={leftarr} /> </ButtonBack>
            <div className="border-8 border-purple rounded-3xl">
              <Slider style={{ width: "60rem" }}>
                {projects.map(project => (
                  <Project project={project} key={project.id} />
                ))}
              </Slider>
            </div>
            <ButtonNext style={{ padding: "50px" }}><Image style={{ height: "80px" }} src={rightarr} /> </ButtonNext>

          </div>

        </CarouselProvider>
      }
    </>
  )
};

export default Projects;



// Create a Wrapper component that'll render a <section> tag with some styles


const WrapperMob = styled.section`
width: 15rem;
height: 668px;
`;

const Text1Mob = styled.text`
font-style: normal;
text-align: center;
font-weight: 700;
font-family: 'Karla';
margin-bottom: 50px;
font-size: 30px;
line-height: 30px;
/* identical to box height */


color: #FFFFFF;
`;

const Text2Mob = styled.text`
height: 15rem;
width: 15rem;

font-style: normal;
font-weight: 400;

font-family: 'Karla';
font-size: 17px;
margin-top: 30px;
line-height: 23px;
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

