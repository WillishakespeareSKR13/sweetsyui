/* eslint-disable @typescript-eslint/no-explicit-any */
import { SerializedStyles } from '@emotion/utils';
import { MotionProps } from 'framer-motion';

export interface AtomMapsTypes extends MotionProps {
  place: 'mx' | 'co' | 'us';
  backgroundColor?: string;
  width?: string;
  hover: string;
  border?: string;
  data?: any;
  height?: string;
  stroke?: string;
  disable?: boolean;
  fill?: string;
  maxWidth?: string;
  maxHeight?: string;
  objectFit?: `fill` | `contain` | `cover` | `none` | `scale-down`;
  margin?: string;
  position?:
    | `absolute`
    | `relative`
    | `static`
    | `sticky`
    | `fixed`
    | `initial`;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  objectPosition?: string;
  zIndex?: string;
  customCSS?: SerializedStyles;
}
export interface ToolTipTypes extends MotionProps {
  customCSS?: SerializedStyles;
}
