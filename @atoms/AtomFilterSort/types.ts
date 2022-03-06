import { AtomButtonTypes } from '../AtomButton/types';
import { AtomInputTypes } from '../AtomInput/types';
import { AtomWrapperTypes } from '../AtomWrapper/types';

export interface AtomFilterSortProps {
  options?: AtomInputTypes['options'];
  componentsProps?: {
    wrapperProps?: AtomWrapperTypes;
    inputProps?: {
      inputProps?: AtomInputTypes;
    };
    buttonProps?: AtomButtonTypes;
  };
  route?: string;
}
