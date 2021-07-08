import React from 'react'
import {
    NavbarContainer,
    NavbarWrapper,
    NavbarUnorder,
    NavbarList,
    NavbarLink,
} from './NavbarElement'
const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <NavbarUnorder>
                    <NavbarList>
                        <NavbarLink href="/">
                            Home
                        </NavbarLink>
                    </NavbarList>
                    <NavbarList>
                        <NavbarLink href="/">
                            About
                        </NavbarLink>
                    </NavbarList>
                    <NavbarList>
                        <NavbarLink href="/">
                            Arts
                        </NavbarLink>
                    </NavbarList>
                    <NavbarList>
                        <NavbarLink href="/"> 
                            Contact
                        </NavbarLink>
                    </NavbarList>
                </NavbarUnorder> 
            </NavbarWrapper>
        </NavbarContainer>
    )
}

export default Navbar
