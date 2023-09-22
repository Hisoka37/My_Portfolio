import React from 'react'

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
        >
            <Heading as ='h4' size='h4'>
                My Projects
            </Heading>

            <Heading as ='h2' size='h2'>
                What <BlueText> I have Built </BlueText>
            </Heading>

            {projectsDetails.map((project) => {
                <PaddingContainer top='5rem' bottom ='5rem'>
                    <Heading>{project.project_desc} </Heading>
                    <Project />
                </PaddingContainer>
            })}

        </PaddingContainer>
  )
}


