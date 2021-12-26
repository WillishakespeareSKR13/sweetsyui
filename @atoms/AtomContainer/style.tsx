import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomContainerTypes } from './types';

const AtomContainerStyled = (props: AtomContainerTypes) => css`
  display: flex;
  width: 100%;
  min-height: ${props?.minHeight || `max-content`};
  height: ${props?.height || `max-content`};
  flex-wrap: ${props?.flexWrap || `wrap`};
  flex-direction: ${props?.flexDirection || `column`};
  justify-content: ${props?.justifyContent || `center`};
  align-items: ${props?.alignItems || `center`};
  padding: ${props?.padding || `initial`};
  margin: ${props?.margin || `initial`};
  position: ${props?.position || `initial`};
  ${props?.shadow && `box-shadow: 0px 10px 20px #00000029`};
  background-color: ${props?.backgroundColor || `white`};
  background-image: ${props?.backgroundImage};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${props?.backgroundSize || `cover`};

  ${props?.customCSS};
`;

export const AtomContainerDefaultStyled = styled(
  motion.main
)<AtomContainerTypes>`
  ${(props) => AtomContainerStyled(props)};
`;

export const AtomContainerNavStyled = styled(motion.nav)<AtomContainerTypes>`
  ${(props) => AtomContainerStyled(props)};
`;

export const AtomContainerFooterStyled = styled(
  motion.footer
)<AtomContainerTypes>`
  ${(props) => AtomContainerStyled(props)};
`;
