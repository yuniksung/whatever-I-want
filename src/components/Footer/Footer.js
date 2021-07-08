import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterWord,
    EndingWord,
    EndingLetter,
    ContactForm,
    FormInputs,
    FormMessage,
    SubmitBtn
} from './FooterElement'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterWord>
                    <EndingWord>
                        Thanks for visiting
                    </EndingWord>
                    <EndingLetter>
                        If you would like to contact me,
                    </EndingLetter>
                    <EndingLetter>
                        Feel free to reach out to me
                    </EndingLetter>
                </FooterWord>
                <ContactForm>
                    <FormInputs type="text" placeholder="Name" />
                    <FormInputs type="email" placeholder="Email" />
                    <FormInputs type="text" placeholder="Title" />
                    <FormMessage type="text" placeholder="Message" rows="10" cols="50"/>
                    <SubmitBtn>SEND</SubmitBtn>
                </ContactForm>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
