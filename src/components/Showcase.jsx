import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled.js'

import {
    ShowCaseImageCard,
    ShowCaseContainer,
    Particle,
    Image,
} from '../styles/ShowCase.styled.js'

import { BsGithub, BsLinkedin, BsTwitter, BsMedium} from 'react-icons/bs'
import User from '../assets/pngwing.com.png'
import BackgroundImg from '../assets/particle.png'



export const Showcase = () => {
    return (
        <PaddingContainer
            id='Home'
            right='2%'
            top ='15%'
            bottom='10%'
        >
            <FlexContainer align='start' fullWidthChild>
                <div>
                    <Heading as="h4" size="h4" top ='0.9rem' >Hello!</Heading>
                    <Heading as= 'h2' size='h2' top ='0.9rem' bottom ='1rem'>
                         I'm <BlueText> Walid Kabboussa </BlueText></Heading>
                    <Heading as= 'h3' size='h3'>
                         I'm a <BlueText> Software Engineer </BlueText></Heading>    
                    <ParaText as='p' top ="2rem" bottom='4rem'>
                        Hello, my name Walid Kabboussa and I'm a Software Engineer with experience in creating and designing user-friendly Web Applications.
                    </ParaText>

                    <FlexContainer gap ='20px'>
                        <IconContainer color='white' size='1.5rem'>
                            <BsLinkedin />
                        </IconContainer>
                        <IconContainer color='white' size='1.5rem'>
                            <BsGithub />
                        </IconContainer>
                        <IconContainer color='white' size='1.5rem'>
                            <BsTwitter />
                        </IconContainer>
                        <IconContainer color='white' size='1.5rem'>
                            <BsMedium />
                        </IconContainer>
                    </FlexContainer>
                </div>

                <FlexContainer justify ="flex-end">            
                <ShowCaseContainer>
                        <ShowCaseImageCard>
                            <Image src={User} alt="" />
                        </ShowCaseImageCard>

                        <Particle 
                         src ={BackgroundImg}
                         alt ='Particle'
                         top='-40px'
                         left = '20opx'
                         rotate='60deg'
                        />

                        <Particle 
                         src ={BackgroundImg}
                         alt ='Particle'
                         top='50px'
                         right = '-30px'
                         rotate='0deg'
                        />

                        <Particle 
                         src ={BackgroundImg}
                         alt ='Particle'
                         bottom='1px'
                         right = '150px'
                         rotate='0deg'
                        />
               
                    </ShowCaseContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}