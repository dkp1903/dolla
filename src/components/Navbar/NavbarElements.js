import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-conter: center;
    line-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

// This is the style for Link Router imported from React Router
export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none; // shouldn't be displayed on normal, desktop view
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ui`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
`