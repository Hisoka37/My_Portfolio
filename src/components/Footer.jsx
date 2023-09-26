import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    FormButton
  } from "../styles/Global.styled.js";
import { ContactForm, FormLabel, FormInput } from '../styles/Footer.styled.js';
import { motion } from "framer-motion";
import { fadeBottomVariant } from '../utils/Variant.js'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Footer = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cjk0cvj', 'template_t97zq4n', form.current, 'y7HqPrqaCQ3l2RDRR')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };

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
                    ref={form}
                    onSubmit={sendEmail}
                    >
                        <PaddingContainer bottom='2rem'>
                            <FormLabel> Name: </FormLabel>
                            <FormInput 
                                type='text'
                                placeholder='Enter Your name'
                                name="user_name"
                            />                          
                        </PaddingContainer>

                        <PaddingContainer bottom='2rem'>
                            <FormLabel> Email: </FormLabel>
                            <FormInput 
                                type='text'
                                placeholder='Enter Your Email'
                                name="user_email"
                            />                          
                        </PaddingContainer>

                        <PaddingContainer bottom='2rem'>
                            <FormLabel> Message: </FormLabel>
                            <FormInput 
                                as='textarea'
                                placeholder='Enter Your Message'
                                name="message"
                            />                          
                        </PaddingContainer>

                        <FlexContainer justify='center' responsiveFlex
                            as={motion.div}
                            variants={fadeBottomVariant}
                            initial='hidden'
                            whileInView='visible'
                            type="submit"
                            value="Send"
                        >
                            <FormButton> Send Message </FormButton>
                        </FlexContainer>
                    </ContactForm>
                </FlexContainer>
            </PaddingContainer>

        </PaddingContainer>
  )
}