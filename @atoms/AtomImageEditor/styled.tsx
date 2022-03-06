import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ImageEditorStyled = styled(motion.label)`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  background-color: #f6f7fb;
  font-weight: 500;
  color: #a5a7ad;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    opacity: 0;
    position: absolute;
    z-index: 1;
  }
`;
