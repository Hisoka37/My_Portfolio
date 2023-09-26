
 import { motion } from "framer-motion";
 import { FaGithub } from "react-icons/fa";
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    IconContainer,
    Button
  } from "../../styles/Global.styled.js";
  import { TechStackCard,ProjectImageContainer, ProjectImage } from "../../styles/MyProject.styled.js";
  import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variant.js'


 const Project = ({ data }) => {
  return (
    <FlexContainer 
    fullWidthChild
     reponsiveFlex
     direction={data.reverse ? 'row-reverse' : false}
     >
        <motion.div
       variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial='hidden'
        whileInView='visible'
        >
            <FlexContainer gap = '1rem' responsiveFlex>
            <Heading as='h3' size='h3' bottom = '1rem' righ ='1rem'>
                {data.project_name}
            </Heading>

            <IconContainer color='blue' size='2rem'>
                <a href={data.source_code}><FaGithub /></a>
            </IconContainer>
            </FlexContainer>

            <PaddingContainer top='1rem'>
                <FlexContainer gap ='1rem'>
                {data.tech_stack.map((stack) => (
                    <TechStackCard key={stack.id}> {stack}</TechStackCard>
                ))}
                </FlexContainer>
            </PaddingContainer>

            <ParaText top ='1.5rem' bottom ='2rem'>
                 {data.project_desc}
            </ParaText>

            <Button href={data.project_URL}>Visit Website</Button>
        </motion.div>
        
     { /* projects right section.*/}
        <ProjectImageContainer 
        as={motion.div}
        variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        initial='hidden'
        whileInView='visible'
        justify={data.reverse ? 'flex-start': 'flex-end'}
        >
            <ProjectImage
             src={data.project_img}
            alt={data.project_name}
             />
        </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project;