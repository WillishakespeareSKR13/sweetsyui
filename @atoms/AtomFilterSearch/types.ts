import { AtomInputTypes } from '../AtomInput/types';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomButtonTypes } from '../AtomButton/types';
import { AtomIconTypes } from '../AtomIcon/types';

export interface AtomFilterSearchTypes {
  componentsProps?: {
    wrapperProps?: AtomWrapperTypes;
    inputProps?: {
      wrapperProps?: AtomWrapperTypes;
      iconProps?: AtomIconTypes;
      inputProps?: AtomInputTypes;
    };
    buttonProps?: AtomButtonTypes;
  };
  route?: string;
  onClick?: (value: string) => void;
}
