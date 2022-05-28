import { AtomInputTypes } from '../AtomInput/types';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomButtonTypes } from '../AtomButton/types';
import { AtomSeparatorTypes } from '../AtomSeparator/types';
import { AtomTextTypes } from '../AtomText/types';

export type CategoriesSelectedTypes = string;

export type AtomFilterCategoryTypes = {
  componentsProps?: {
    wrapperProps?: AtomWrapperTypes;
    separatorProps?: AtomSeparatorTypes;
    titleProps?: AtomTextTypes;
    buttonProps?: AtomButtonTypes;
    textProps?: AtomTextTypes;
    optionsProps?: AtomInputTypes;
  };
  options?: AtomInputTypes['options'];
  onClick?: (value: CategoriesSelectedTypes[]) => void;
};
