import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ContainerLinkStyled = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  ${css`
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  `}
`;

interface LinkStyledProps {
  margin?: string;
  customcss?: SerializedStyles;
}
export const LinkStyled = styled(motion.li)<LinkStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  flex-direction: row;
  background: transparent;
  border: none;
  margin: ${(props) => props.margin || '0px 25px 0px 0px'};
  cursor: pointer;
  position: relative;

  ${({ customcss }) => customcss};
`;

export const LinkPublic = styled(motion.li)<LinkStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
  position: relative;
  width: 100%;
  justify-content: space-between;
  :hover {
    width: 100%;
    background-color: #f1576c;
    a {
      color: #1d1d1d;
    }
  }

  ${({ customcss }) => customcss};
`;
