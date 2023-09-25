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
    <PaddingContainer id="Skills" top="10%" bottom="10%" responsiveLeft = '1rem' responsiveRight ='1rem'>
      <FlexContainer
       gap = '2rem'
       responsiveFlex
       responsiveDirection = 'column-reverse'
       fullwidthChild>
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

        <Heading as='h2' size ='h2' top ='0.5rem'>
          <BlueText> About </BlueText> Me.
        </Heading>

        <ParaText top ='2rem' bottom ='0.5rem' right='1.5rem'>
        Born and raised in Morocco, I bring a distinctive perspective to the world of software engineering.
         As an African, with deep roots in Moroccan culture,
          I've learned the invaluable lesson that everyone has a story to tell.
           This upbringing has taught me the importance of embracing change and fresh ideas.
        </ParaText>
        
        <Heading as='h2' size ='h2' top ='0.5rem'>
            What <BlueText> I</BlueText> can<BlueText> do</BlueText>
        </Heading>

        <ParaText top ='2rem' bottom ='0.5rem' right='1.5rem'>
        As a Software Engineer with a strong background in Electrical Engineering,
        I specialize in full-stack development. Proficient in JavaScript, React,
        Ruby, and Ruby on Rails, I have a knack for crafting responsive,
        dynamic user interfaces.
        </ParaText>

        <ParaText top ='2rem'>
        My expertise in React allows me to build scalable and maintainable applications,
         ensuring efficiency and adaptability to evolving business needs.
          With a unique blend of technical skills and creativity,
           I create engaging web applications that leave a lasting impression.
        </ParaText>

        <ParaText top ='2rem'>
        Let's collaborate to bring your digital projects to life with innovative and sustainable solutions.
        </ParaText>

        </div>

      </FlexContainer>
    </PaddingContainer>
  );
};
