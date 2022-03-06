/* eslint-disable @typescript-eslint/no-explicit-any */
import { SerializedStyles } from '@emotion/utils/types/index';
import { MotionProps } from 'framer-motion';

export type ChatProps = {
  imagen: string;
  name?: string;
  content: any;
  messageOptions?: any;
  background: string;
  borderRadius?: string;
  dateMessage: string;
  componentsProps?: {
    wrapperProps?: ComponentWraperTypes;
    messageProps?: ComponentWraperTypes;
    textProps?: AtomTextTypes;
    triangleProps?: ComponentTriangleTypes;
  };
};

export interface ComponentWraperTypes extends MotionProps {
  background?: string;
  borderRadius?: string;
  colorPrimary?: string;
  padding?: string;
  align?: boolean;
  color?: string;
  width?: string;
  height?: string;
  customCSS?: SerializedStyles;
}

export type AtomTextTypes = MotionProps & {
  color?: string;
  font?: string;
  href?: string;
  align?: 'center' | 'left' | 'right';
  padding?: string;
  margin?: string;
  width?: string;
  maxWidth?: string;
  fontSize?: string;
  textDecoration?: 'underline' | 'line-through' | 'none';
  ref?: Ref<any>;
  fontWeight?:
    | 'bold'
    | 'normal'
    | 'light'
    | 'semibold'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
  cursor?:
    | 'pointer'
    | 'default'
    | 'text'
    | 'wait'
    | 'move'
    | 'not-allowed'
    | 'help'
    | 'zoom-in'
    | 'zoom-out'
    | 'context-menu'
    | 'cell'
    | 'crosshair'
    | 'vertical-text'
    | 'alias'
    | 'progress'
    | 'no-drop'
    | 'copy'
    | 'grab'
    | 'grabbing'
    | 'all-scroll'
    | 'col-resize'
    | 'row-resize'
    | 'n-resize'
    | 'e-resize'
    | 's-resize'
    | 'w-resize'
    | 'ne-resize'
    | 'nw-resize'
    | 'se-resize'
    | 'sw-resize'
    | 'ew-resize'
    | 'ns-resize'
    | 'nesw-resize'
    | 'nwse-resize'
    | 'zoom-in'
    | 'zoom-out'
    | 'grab'
    | 'grabbing'
    | 'custom';
  customCSS?: SerializedStyles;
  alignSelf?:
    | 'auto'
    | 'normal'
    | 'center'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'stretch'
    | 'safe center'
    | 'unsafe center'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'unset';
  dangerouslySetInnerHTML?: { __html: string };
};

export interface ComponentTriangleTypes extends MotionProps {
  customCSS?: SerializedStyles;
}
