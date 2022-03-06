import { AtomInputTypes } from '../AtomInput/types';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomButtonTypes } from '../AtomButton/types';
import { AtomSeparatorTypes } from '../AtomSeparator/types';
import { AtomTextTypes } from '../AtomText/types';

export interface AtomFilterRangeTypes {
  componentsProps?: {
    wrapperProps?: AtomWrapperTypes;
    titleProps?: AtomTextTypes;
    separatorProps?: AtomSeparatorTypes;
    inputProps?: AtomInputTypes;
    descriptionProps?: AtomTextTypes;
    buttonProps?: AtomButtonTypes;
  };
  min?: number;
  max?: number;
  route?: string;
  onClick?: (value: { min: number; max: number }) => void;
}
