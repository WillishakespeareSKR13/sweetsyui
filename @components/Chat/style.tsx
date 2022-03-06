import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { ComponentWraperTypes, AtomTextTypes } from './types';

const DivStyle = (props: ComponentWraperTypes) => css`
  ${props?.customCSS};
  width: ${props?.width || `100%`};
  height: ${props?.height || `auto`};
  background: ${props?.height || `auto`};
`;

const TextStyle = (props: AtomTextTypes) => css`
  color: ${props?.color || `white`};
  padding: ${props?.padding || `5px 0px 0px 0px`};
  font-size: ${props?.fontSize || `12px`};
  margin: ${props?.margin || `0px 50px 0px 10px`};
  align-self: ${props?.alignSelf || `flex-end`};

  ${props?.customCSS};
`;

export const MessageContainer = styled(motion.section)<ComponentWraperTypes>`
  margin-bottom: 20px;
  display: flex;
  font-family: 'Roboto', sans-serif;
  flex-direction: column;
  align-self: ${(props) => (props.align === true ? `flex-end` : ``)};
  ${(props) => DivStyle(props)}

  div {
    display: flex;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;

export const Message = styled(motion.div)<ComponentWraperTypes>`
  padding: ${({ padding }) => padding || `10px 20px 20px 20px`};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ background }) => background};
  ${(props) => DivStyle(props)}

  section {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 10px;
      margin-bottom: 5px;
      text-align: ${(props) => (props.align === true ? `right` : `left`)};
    }
  }
  div {
    display: flex;
    flex-direction: column;
    line-height: 2;
  }
  img {
    width: 100% !important;
    height: auto !important;
    border-radius: 10px !important;
  }
  p {
    color: ${({ color }) => color};
    overflow: hidden;
  }
`;

export const Triangle = styled(motion.div)<ComponentWraperTypes>`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 0 solid transparent;
  border-bottom: 10px solid ${({ background }) => background};
  transform: rotate(-90deg);
  margin: 0 0 0 auto;
`;

export const MyMessageTriangle = styled(motion.div)<ComponentWraperTypes>`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 0 solid transparent;
  border-bottom: 10px solid ${({ background }) => background};
  transform: rotate(180deg);
  margin: 0 0 0 auto;
`;

export const DateofMessage = styled(motion.p)<AtomTextTypes>`
  ${(props) => TextStyle(props)}
`;
