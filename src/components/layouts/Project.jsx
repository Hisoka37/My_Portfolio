
 import { FaGithub } from "react-icons/fa";
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
  } from "../../styles/Global.styled.js";


 const Project = () => {
  return (
    <FlexContainer fullWidthChild>
        <div>
            <FlexContainer align = 'center' gap = '1rem'>
            <Heading as='h3' size='h3' bottom = '1rem'>
                Project Name
            </Heading>

            <IconContainer color='blue' size='2rem'>
                <FaGithub />
            </IconContainer>

            </FlexContainer>
        </div>
    </FlexContainer>
  )
}

export default Project;