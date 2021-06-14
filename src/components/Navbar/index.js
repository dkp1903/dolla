import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu } from './NavbarElements'
import { Link as LinkRouter } from 'react-router-dom'

const Navbar = () => {
    return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            Cashier
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
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
    )
}

export default Navbar