import { motion } from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variant.js'
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
} from "react-icons/si";

import { TbBrandNextjs } from "react-icons/tb";

import { SkillsContainer, SkillsCards } from "../styles/MySkills.styled.js";

const Stacks = [
  {
    id: 0,
    tech: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    id: 1,
    tech: "TypeScript",
    icon: <SiTypescript />,
  },

  {
    id: 2,
    tech: "Ruby",
    icon: <SiRuby />,
  },

  {
    id: 3,
    tech: "Ruby On Rails",
    icon: <SiRubyonrails />,
  },

  {
    id: 4,
    tech: "React JS",
    icon: <FaReact />,
  },

  {
    id: 5,
    tech: "Next JS",
    icon: <TbBrandNextjs />,
  },
];


export const MySkills = () => {
  return (
    <PaddingContainer id="Skills" top="10%" bottom="10%" responsiveLeft = '1rem' responsiveRight ='1rem'>
      <FlexContainer
       gap = '4rem'
       responsiveFlex
       responsiveDirection = 'column-reverse'
       fullwidthChild>
        <SkillsContainer 
          as={motion.div}
          variants={fadeInLeftVariant}
          initial='hidden'
          whileInView='visible'
          >
          {Stacks.map((stack) => (
            <SkillsCards key={stack.id}>
              <IconContainer size="3rem" color="blue" key={stack.id}>
                {stack.icon}
              </IconContainer>

              <Heading as="h4" size="h4">
                {stack.tech}
              </Heading>
            </SkillsCards>
          ))}
        </SkillsContainer>
        { /*-- Right Section --- */}

        <motion.div
          variants={fadeInRightVariant}
          initial='hidden'
          whileInView='visible'
         >

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
        I specialize in full-stack development. Proficient in JavaScript, React.js,Next.js, MERN, 
        Ruby, and Ruby on Rails, I have a knack for crafting responsive,
        dynamic user interfaces.
        </ParaText>

        <ParaText top ='2rem'>
        My proficiency in frontend and backend development empowers me to construct scalable and 
        maintainable applications that seamlessly adapt to evolving business requirements.
         By leveraging a diverse set of technical skills and fostering creativity, I specialize in crafting engaging web applications that resonate with users long after their initial interaction. This holistic approach ensures efficiency, adaptability, and a lasting impression for each digital solution I deliver.
        </ParaText>

        <ParaText top ='2rem'>
        Let's collaborate to bring your digital projects to life with innovative and sustainable solutions.
        </ParaText>

        </motion.div>

      </FlexContainer>
    </PaddingContainer>
  );
};
