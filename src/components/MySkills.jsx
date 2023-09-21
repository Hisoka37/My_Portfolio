import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled.js'

import {
    SkillsCards
} from '../styles/MySkills.styled.js'

import { Stack } from '../utils/MyData.js'
export const MySkills = () => {
  return (
    <PaddingContainer
     id='Skills'
     top='10%'
     bottom='10%'
    > 
    <FlexContainer fullWidthChild>
        <SkillsCards>
            { Stack.map((skill) => (
                <div key={skill.id}>{skill.tech}</div>
            ))}
        </SkillsCards>
    </FlexContainer>

    </PaddingContainer>
  )
}
