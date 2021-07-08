import styled from "styled-components";
import { FlexCenter,Anchor,NavFooterBckC } from '../../Styles/Mixins'

export const NavbarContainer = styled.div`
    width: 100vw;
    height: 5vh;
    ${NavFooterBckC};
    ${FlexCenter};
`
export const NavbarWrapper = styled.div`
    width: 60%;
    margin: auto;
`
export const NavbarUnorder = styled.div`
    ${FlexCenter};
`
export const NavbarList = styled.div`
    width: 10%;
`
export const NavbarLink = styled.a`
    cursor: pointer;
    color: #ffffff;
    ${Anchor};
`
