import { SerializedStyles } from '@emotion/utils';
import { MotionProps } from 'framer-motion';

export interface AtomIconTypes extends MotionProps {
  icon?: string;
  url?: string;
  color?: string;
  width?: string;
  height?: string;
  customCSS?: SerializedStyles;
}
