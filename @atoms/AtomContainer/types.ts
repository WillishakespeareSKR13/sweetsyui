import { SerializedStyles } from '@emotion/utils';
import { MotionProps } from 'framer-motion';

export interface AtomContainerTypes extends MotionProps {
  backgroundImage?: string;
  backgroundColor?: string;
  children?: React.ReactNode;

  backgroundSize?: string;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  flexWrap?: 'nowrap' | 'wrap';
  minHeight?: string;
  height?: string;
  margin?: string;
  padding?: string;
  shadow?: boolean;
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky';
  as?: 'main' | 'footer' | 'nav';
  customCSS?: SerializedStyles;
}
