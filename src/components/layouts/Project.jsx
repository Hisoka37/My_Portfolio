
 import { FaGithub } from "react-icons/fa";
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button
  } from "../../styles/Global.styled.js";
  import { TechStackCard,ProjectImageContainer, ProjectImage } from "../../styles/MyProject.styled.js";
  import GameHub from '../../assets/gamehub.jpg'


 const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>
        <div>
            <FlexContainer align = 'center' gap = '1rem'>
            <Heading as='h3' size='h3' bottom = '1rem'>
                {data.project_name}
            </Heading>

            <IconContainer color='blue' size='2rem'>
                <a href={data.source_code}><FaGithub /></a>
            </IconContainer>
            </FlexContainer>

            <PaddingContainer top='1rem'>
                <FlexContainer gap='1.5rem'>
                {data.tech_stack.map((stack) => (
                    <TechStackCard key={stack.id}> {stack}</TechStackCard>
                ))}
                </FlexContainer>
            </PaddingContainer>

            <ParaText top ='1.5rem' bottom ='2rem'>
                 {data.project_desc}
            </ParaText>

            <Button href={data.project_URL}>Visit Website</Button>
        </div>
        
     { /* projects right section.*/}
        <ProjectImageContainer justify='flex-end'>
            <ProjectImage
             src={data.project_img}
            alt={data.project_name}
             />
        </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project;