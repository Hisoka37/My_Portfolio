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
import BackgroundImg from '../assets/pmwhite.png'



export const Showcase = () => {
    return (
        <PaddingContainer
            id='Home'
            right='2%'
            top ='16%'
            bottom='10%'
        >
            <FlexContainer align='start' fullWidthChild>
                <div>
                    <Heading as="h4" size="h4" top ='0.9rem' >Hello!</Heading>
                    <Heading as= 'h2' size='h2' top ='0.9rem' bottom ='1rem'>
                         I'm <BlueText> WALID KABBOUSSA</BlueText></Heading>
                    <Heading as= 'h3' size='h3'>
                         I'm a <BlueText> SOFTWARE ENGINEER </BlueText></Heading>    
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
                         top='-120px'
                         left = '150px'
                         rotate='0deg'
                        />

                        <Particle 
                         src ={BackgroundImg}
                         alt ='Particle'
                         top='60px'
                         right = '-30px'
                         rotate='0deg'
                        />

                        <Particle 
                         src ={BackgroundImg}
                         alt ='Particle'
                         bottom='100px'
                         right = '15px'
                         rotate='0deg'
                        />
               
                    </ShowCaseContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}
