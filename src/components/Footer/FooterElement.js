import styled from "styled-components";
import { FlexCenter, InputBackground, NavFooterBckC } from '../../Styles/Mixins'

export const FooterContainer = styled.div`
    height: 50vh;
    width: 100vw;
    ${NavFooterBckC}
`
export const FooterWrapper = styled.div`
    width: 70%;
    height: 100%;
    margin: auto;
    display: flex;
    ${FlexCenter}
    padding: 2rem;
`
export const FooterWord = styled.div`
    ${FlexCenter}
    flex-direction: column;
    color: white;
    width: 50%;
    padding: 2rem;
`
export const EndingWord = styled.h1`
    letter-spacing: 1px;
    margin-bottom: 5px;
    
`
export const EndingLetter = styled.p`
    letter-spacing: 2px;
`
export const ContactForm = styled.form`
    width: 50%;
    padding: 2rem;
    // background: red;
`

export const FormInputs = styled.input`
    width: 300px;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 14px;
    outline: none;
    ${InputBackground};
    
    &:focus{
        background-color: white;
    }
`
export const FormMessage = styled.textarea`
    width: 300px;
    padding: 5px;
    margin-bottom: 5px;
    resize: none;
    font-size: 14px;
    outline: none;

    ${InputBackground};
    
    &:focus{
        background-color: white;
    }
`
export const SubmitBtn = styled.button`
    width: 300px;
    padding: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    
`