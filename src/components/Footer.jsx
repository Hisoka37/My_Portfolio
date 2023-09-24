import React from 'react'

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


export const Footer = () => {
  return (
        <PaddingContainer
            id='contact'
            top='5%'
            bottom = '10%'
        >
            <Heading
                as='h4'
                size='h4'
                align='center'
            >
             My Contact
            </Heading>

            <Heading 
                as='h2'
                size='h2'
                align='center'
                top='0.5rem'
            >
                Contact <BlueText> Me Here</BlueText>
            </Heading>

            <PaddingContainer top='3rem'>
                <FlexContainer justify='center'>
                    <ContactForm>
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

                        <FlexContainer justify='center'>
                            <Button> Send Message </Button>
                        </FlexContainer>
                    </ContactForm>
                </FlexContainer>
            </PaddingContainer>

        </PaddingContainer>
  )
}
