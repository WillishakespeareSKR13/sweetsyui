import { SerializedStyles } from '@emotion/utils';
import { MotionProps } from 'framer-motion';
import { PointerEventHandler } from 'react';

export interface AtomIconTypes extends MotionProps {
  icon?: string;
  url?: string;
  color?: string;
  width?: string;
  height?: string;
  customCSS?: SerializedStyles;
  onPointerDown?: PointerEventHandler<HTMLDivElement>;
}
