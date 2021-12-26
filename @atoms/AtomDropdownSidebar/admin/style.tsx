import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export interface LinkStyledProps {
  margin?: string;
  customcss?: SerializedStyles;
}

export const ContainerLinkStyled = styled(motion.ul)`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
  width: max-content;
  background-color: white;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0px 10px 20px #00000029;
  padding: 5px;
`;

export const LinkStyled = styled(motion.li)<LinkStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 0px 40px;
  justify-content: space-between;
  :hover {
    width: 100%;
    background-color: #a01d7f;
    a {
      color: white;
    }
  }

  ${({ customcss }) => customcss};
`;

export const ContainerDropdownStyled = styled(motion.ul)`
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    width: 100%;
    background-color: #dadada;
  }
  transition: background-color 0.3s ease;
`;

export const DropdownStyled = styled(motion.li)<LinkStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
  width: 100%;
  position: absolute;
  top: 0;
  left: 70%;
  font-size: 12px;
  color: #7f7f7f;
  box-shadow: 0px 10px 20px #00000029;
  z-index: 1;
`;
