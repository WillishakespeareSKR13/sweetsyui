import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { AtomMapsTypes, ToolTipTypes } from './types';

export const AtomMapWrapperStyled = styled(motion.div)<AtomMapsTypes>`
  width: ${({ width }) => width || `100%`};
  height: auto;

  svg {
    width: 100%;
    height: auto;

    section {
      width: 100%;
      height: auto;
      background-color: red;
    }
    path {
      stroke-width: 2px;
      transition: all 0.2s ease-in-out;
      &:hover {
        fill: ${({ hover, disable }) => disable === false && hover};
        cursor: ${({ disable }) => disable || `pointer`};
        transform: ${({ disable }) => disable || `scale(1.01)`};
      }
      }
    }
  }
  ${({ customCSS }) => customCSS};
`;

export const ToolTip = styled(motion.div)<ToolTipTypes>`
  ${({ customCSS }) => customCSS};
`;
