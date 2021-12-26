import { SerializedStyles } from '@emotion/utils';

export type PlayerProps = {
  play?: boolean;
  video?: string;
  width?: string;
  height?: string;
  customCSS?: SerializedStyles;
};
