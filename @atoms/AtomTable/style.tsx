import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/utils';
import { AtomTableTypes } from './types';

type Types = {
  customCSS?: SerializedStyles;
};

export const AtomTableStyled = styled.table<AtomTableTypes<Types>>`
  border-collapse: collapse;
  table-layout: auto;
  font-family: 'Montserrat', sans-serif;
  width: ${({ width }) => width || `100%`};
  height: ${({ height }) => height || `max-content`};
  margin: ${({ margin }) => margin || `0px 0px;`};
  color: ${({ color }) => color || `black`};
  width: max-content;
  min-width: 100%;
  border-radius: ${({ borderRadius }) => borderRadius || `15px`};
  thead {
    font-family: 'Montserrat', sans-serif;
    height: fit-content;
    text-align: center;
    background-color: white;
    th {
      font-family: 'Montserrat', sans-serif;
      text-align: left;
      color: #565656;
      font-size: 14px;
      font-weight: 700;
      padding: 15px 30px 10px 30px;
      span {
        font-size: 8px;
      }
    }
  }
  ${({ customCSS }) => customCSS};
`;

export const AtomTbodyStyled = styled.tbody<Types>`
  td {
    font-family: 'Montserrat', sans-serif;
    color: #565656;
    font-size: 14px;
    padding: 15px 30px;
    text-align: left;
    border-bottom: 1px solid #eeeeee;
  }
  tr {
    transition: all 0.3s ease-in-out;
  }
  tr:hover {
    background-color: #f5f5f5;
  }
`;

export const TDStyled = styled.td<Types>`
  ${({ customCSS }) => customCSS};
`;
