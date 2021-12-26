import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomIconTypes } from './types';

export const IconContainer = styled(motion.div)<AtomIconTypes>`
  display: flex;
  width: max-content;
  height: max-content;
  svg {
    width: ${({ width }) => width || `34px`};
    height: ${({ height }) => height || `34px`};
    path {
      fill: ${({ color }) => color || `#000`}!important;
    }
    polygon {
      fill: ${({ color }) => color || `#000`}!important;
    }
    circle {
      fill: ${({ color }) => color || `#000`}!important;
    }
  }

  ${({ customCSS }) => customCSS};
`;

export const PlaceholderIcon = styled(motion.div)<AtomIconTypes>`
  width: ${({ width }) => width || `34px`};
  height: ${({ height }) => height || `34px`};
`;
