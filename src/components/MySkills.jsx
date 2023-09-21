import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled.js";

import { FaReact } from "react-icons/fa";
import {
  SiRubyonrails,
  SiRuby,
  SiJavascript,
  SiTypescript,
  SiRedux,
} from "react-icons/si";

import { SkillsContainer, SkillsCards } from "../styles/MySkills.styled.js";

const Stacks = [
  {
    id: 0,
    tech: "Ruby",
    icon: <SiRuby />,
  },

  {
    id: 1,
    tech: "Ruby On Rails",
    icon: <SiRubyonrails />,
  },

  {
    id: 2,
    tech: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    id: 3,
    tech: "TypeScript",
    icon: <SiTypescript />,
  },

  {
    id: 4,
    tech: "React JS",
    icon: <FaReact />,
  },

  {
    id: 5,
    tech: "Redux JS",
    icon: <SiRedux />,
  },
];

export const MySkills = () => {
  return (
    <PaddingContainer id="Skills" top="10%" bottom="10%">
      <FlexContainer fullwidthChild>
        <SkillsContainer>
          {Stacks.map((stack) => (
            <SkillsCards key={stack.id}>
              <IconContainer size="5rem" color="blue" key={stack.id}>
                {stack.icon}
              </IconContainer>

              <Heading as="h4" size="h4">
                {stack.tech}
              </Heading>
            </SkillsCards>
          ))}
        </SkillsContainer>
        { /*-- Right Section --- */}

        <div>
        <Heading as= 'h4' size='h4'>
            MY SKILLS
        </Heading>

        <Heading as='h2' size ='h2' top ='0.5rem'>
            What <BlueText> I can do</BlueText>
        </Heading>

        <ParaText top ='2rem' bottom ='0.5rem'>
            
        </ParaText>
        </div>

      </FlexContainer>
    </PaddingContainer>
  );
};
