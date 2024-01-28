import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const { primary, secondary, white } = COLORS;

const MESSAGES = {
   "on-sale": "Sale",
   "new-release": "Just released!",
   default: "",
};

const ShoeCard = ({
   slug,
   name,
   imageSrc,
   price,
   salePrice,
   releaseDate,
   numOfColors,
}) => {
   // There are 3 variants possible, based on the props:
   //   - new-release
   //   - on-sale
   //   - default
   //
   // Any shoe released in the last month will be considered
   // `new-release`. Any shoe with a `salePrice` will be
   // on-sale. In theory, it is possible for a shoe to be
   // both on-sale and new-release, but in this case, `on-sale`
   // will triumph and be the variant used.
   // prettier-ignore
   const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

   return (
      <Link href={`/shoe/${slug}`}>
         <Wrapper>
            <ImageWrapper>
               <Flag variant={variant}>{MESSAGES[variant]}</Flag>
               <Image alt="" src={imageSrc} />
            </ImageWrapper>
            <Spacer size={12} />
            <Row>
               <Name>{name}</Name>
               <Price sale={salePrice}>{formatPrice(price)}</Price>
            </Row>
            <Row>
               <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
               <SalePrice sale={salePrice}>{formatPrice(salePrice)}</SalePrice>
            </Row>
         </Wrapper>
      </Link>
   );
};

const Flag = styled.div`
   position: absolute;
   top: 8px;
   right: -6px;
   padding: 6px 10px;
   width: fit-content;
   color: ${white};
   background: ${(p) => (p.variant === "on-sale" ? primary : secondary)};
   border-radius: 4px;
   font: (14/16) rem;
   font-weight: 500;
   display: ${(p) => (p.variant === "default" ? "none" : "block")};
`;

const Link = styled.a`
   text-decoration: none;
   color: inherit;
   flex: 1;
`;

const Wrapper = styled.article`
   display: flex;
   flex-direction: column;
`;

const ImageWrapper = styled.div`
   position: relative;
   min-width: 270px;
   height: fit-content;
   flex: 1;
`;

const Image = styled.img`
   width: 100%;
   border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
   font-size: 1rem;
   display: flex;
   justify-content: flex-start;
`;

const Name = styled.h3`
   font-weight: ${WEIGHTS.medium};
   color: ${COLORS.gray[900]};
   margin-right: auto;
`;

const Price = styled.span`
   text-decoration: ${(p) => (p.sale ? "line-through" : "none")};
`;

const ColorInfo = styled.p`
   color: ${COLORS.gray[700]};
   margin-right: auto;
`;

const SalePrice = styled.span`
   font-weight: ${WEIGHTS.medium};
   color: ${primary};
   display: ${(p) => (p.sale ? "inline" : "none")};
`;

export default ShoeCard;
