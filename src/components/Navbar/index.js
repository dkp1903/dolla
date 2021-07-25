import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavItem, 
  NavLinks, 
  MobileIcon, 
  NavMenu } from './NavbarElements'

const Navbar = () => {
    return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            Dolla
          </NavLogo>
          <MobileIcon>
              <FaBars />
          </MobileIcon>
          <NavMenu>
              <NavItem>
                  <NavLinks to="about">
                      About
                  </NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="discover">
                      Discover
                  </NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="services">
                      Services
                  </NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="signup">
                      Sign up
                  </NavLinks>
              </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
    )
}

export default Navbar