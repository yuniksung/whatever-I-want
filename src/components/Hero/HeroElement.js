import styled from "styled-components";
import { FlexCenter, smallShadow } from '../../Styles/Mixins'

export const HeroContainer = styled.div`
    width: 100vw;
    height: 80vh;
    background: #eeeeee;
`
export const HeroHeading = styled.div`
    width: 60%;
    height: 100%;
    margin: auto;
    ${FlexCenter}
    flex-direction: column;
`
export const IntroWord = styled.h1`
    text-transform: uppercase;
    font-size: 2rem;
`
export const Introme = styled.h3`
    text-transform: uppercase;
    font-size: 1.75rem;
    margin-bottom: 10px;
`
export const IntroText = styled.p`
    text-transform: uppercase;
    font-size: 1.25rem;
    letter-spacing: 1.5px;
    padding: 5px;
`
export const FirstSpan = styled.span`
    color: #009732;
`
export const SecondSpan = styled.span`
    color: #97003f;
`
export const ViewBox = styled.div`
    width: 100vw;
    height: 15vh;
    background: #eeeeee;
    ${FlexCenter}
`
export const Viewbtn = styled.button`
    padding: 10px;
    text-transform: uppercase;
    background-color: transparent;
    border: 1px solid black;
    font-size: 1rem;
    ${smallShadow};
    cursor: pointer;

    &:active{
        box-shadow: 2px 5px 4px #1a1a1a2a;
    }
    `