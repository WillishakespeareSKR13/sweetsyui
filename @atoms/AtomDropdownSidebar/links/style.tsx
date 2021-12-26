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

export interface LinkStyledProps {
  margin?: string;
  customcss?: SerializedStyles;
}

export const LinkStyled = styled(motion.li)<LinkStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  flex-direction: row;
  margin: ${(props) => props.margin || '0px 25px 0px 0px'};
  cursor: pointer;
  position: relative;

  ${({ customcss }) => customcss};
`;

export const ContainerLinkSubFieldStyled = styled(motion.ul)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
