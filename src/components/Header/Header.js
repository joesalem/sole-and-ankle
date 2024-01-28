import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const {
   gray: { [300]: gray300 },
   gray: { [900]: gray900 },
   secondary,
} = COLORS;
const { medium } = WEIGHTS;

const Header = () => {
   // Our site features two visual headers, but they should be
   // grouped semantically as a single header.
   return (
      <header>
         <SuperHeader />
         <MainHeader>
            <LogoWrapper>
               <Logo />
            </LogoWrapper>
            <Nav>
               <NavLink href="/sale">Sale</NavLink>
               <NavLink href="/new">New&nbsp;Releases</NavLink>
               <NavLink href="/men">Men</NavLink>
               <NavLink href="/women">Women</NavLink>
               <NavLink href="/kids">Kids</NavLink>
               <NavLink href="/collections">Collections</NavLink>
            </Nav>
         </MainHeader>
      </header>
   );
};

const MainHeader = styled.div`
   position: relative;
   height: 72px;
   padding: 0 32px;
   border-bottom: 1px solid ${gray300};
   display: flex;
   justify-content: center;
`;

const LogoWrapper = styled.div`
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   padding-left: 32px;
`;

const Nav = styled.nav`
   width: fit-content;
   height: 100%;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   gap: 48px;
   padding: 0 150px;
`;

const NavLink = styled.a`
   font-size: 1.125rem;
   text-transform: uppercase;
   text-decoration: none;
   color: ${gray900};
   font-weight: ${medium};
   flex-shrink: 1;

   &:first-of-type {
      color: ${secondary};
   }
`;

export default Header;
