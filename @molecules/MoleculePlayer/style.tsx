import styled from '@emotion/styled';
import { PlayerProps } from './types';

export const ContainerVideo = styled.div<PlayerProps>`
  display: flex;
  position: relative;
  height: ${({ height }) => height || '100%'};
  width: ${({ width }) => width || '100%'};
  position: relative;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  ${({ customCSS }) => customCSS}

  background-color: #000000;
`;
