import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button
  } from "../styles/Global.styled.js";
import { ContactForm, FormLabel, FormInput } from '../styles/Footer.styled.js';
import { motion } from "framer-motion";
import { fadeBottomVariant } from '../utils/Variant.js'


export const Footer = () => {
  return (
        <PaddingContainer
            id='Contact'
            top='5%'
            bottom = '10%'
        >
            <Heading
                as={motion.h4}
                variants={fadeBottomVariant}
                initial='hidden'
                whileInView='visible'
                size='h4'
                align='center'   
            >
             My Contact
            </Heading>

            <Heading 
                as={motion.h2}
                variants={fadeBottomVariant}
                initial='hidden'
                whileInView='visible'
                size='h2'
                top='0.5rem'
                align='center'
            >
                Contact <BlueText> Me Here</BlueText>
            </Heading>

            <PaddingContainer top='3rem'>
                <FlexContainer justify='center'>
                    <ContactForm 
                    as={motion.form}
                    variants={fadeBottomVariant}
                    initial='hidden'
                    whileInView='visible'
                    >
                        <PaddingContainer bottom='2rem'>
                            <FormLabel> Name: </FormLabel>
                            <FormInput 
                                type='text'
                                placeholder='Enter Your name'
                            />                          
                        </PaddingContainer>

                        <PaddingContainer bottom='2rem'>
                            <FormLabel> Email: </FormLabel>
                            <FormInput 
                                type='text'
                                placeholder='Enter Your Email'
                            />                          
                        </PaddingContainer>

                        <PaddingContainer bottom='2rem'>
                            <FormLabel> Message: </FormLabel>
                            <FormInput 
                                as='textarea'
                                placeholder='Enter Your Message'
                            />                          
                        </PaddingContainer>

                        <FlexContainer justify='center' responsiveFlex
                            as={motion.div}
                            variants={fadeBottomVariant}
                            initial='hidden'
                            whileInView='visible'
                        >
                            <Button> Send Message </Button>
                        </FlexContainer>
                    </ContactForm>
                </FlexContainer>
            </PaddingContainer>

        </PaddingContainer>
  )
}
