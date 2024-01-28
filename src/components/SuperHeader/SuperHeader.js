import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const {
   gray: { [300]: gray300 },
   gray: { [900]: gray900 },
   white,
} = COLORS;

const SuperHeader = () => {
   return (
      <Wrapper>
         <MarketingMessage>
            Free shipping on domestic orders over $75!
         </MarketingMessage>
         <SearchInput />
         <HelpLink href="/help">Help</HelpLink>
         <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
         </UnstyledButton>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   padding: 0 32px;
   font-size: 0.875rem;
   height: 40px;
   color: ${gray300};
   background-color: ${gray900};
   display: flex;
   align-items: center;
   gap: 24px;
`;

const MarketingMessage = styled.span`
   color: ${white};
   margin-right: auto;
`;

const HelpLink = styled.a`
   color: inherit;
   text-decoration: none;
   outline-offset: 2px;

   &:not(:focus-visible) {
      outline: none;
   }
`;

export default SuperHeader;
