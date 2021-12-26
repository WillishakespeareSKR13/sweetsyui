import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomSeparatorTypes } from './types';

export const AtomSeparatorStyled = styled(motion.hr)<AtomSeparatorTypes>`
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `2px`};
  border: none;
  margin: ${({ margin }) => margin || `30px 0px;`};
  background: ${({ color }) => color || `white`};

  ${({ customCSS }) => customCSS};
`;
