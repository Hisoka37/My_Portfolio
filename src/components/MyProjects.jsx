
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
  } from "../styles/Global.styled.js";


import { projectsDetails } from '../utils/MyData.js';
  
import  Project  from './layouts/Project.jsx';

export const MyProjects = () => {
  return (
        <PaddingContainer
            id='Projects'
            top='5%'
            bottom='5%'
            responsiveTop = '15%'
            responsiveLeft = '1rem'
            responsiveRight = '1rem'
        >
            <Heading as ='h4' size='h4'>
                My Projects
            </Heading>

            <Heading as ='h2' size='h2'>
                What <BlueText> I have Built </BlueText>
            </Heading>
            {projectsDetails.map((project) =>
                <PaddingContainer key={project.id} top='5rem' bottom='5rem' >
                <Project data={project} />
                </PaddingContainer>
            )}


        </PaddingContainer>
  )
}


