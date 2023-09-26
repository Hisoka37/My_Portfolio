
import { motion } from 'framer-motion'

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
import { fadeInTopVariant } from '../utils/Variant.js';

  

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
            <Heading
             as ={motion.h4}
             variants={fadeInTopVariant}
             initial='hidden'
             whileInView='visible'
             size='h4'>
                My Projects
            </Heading>

            <Heading
             as ={motion.h2}
             variants={fadeInTopVariant}
             initial='hidden'
             whileInView='visible'
             size='h2'>
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


