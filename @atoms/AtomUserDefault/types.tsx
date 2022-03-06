import { AtomButtonTypes } from '@atoms/AtomButton/types';
import { AtomIconTypes } from '@atoms/AtomIcon/types';
import { AtomImageTypes } from '@atoms/AtomImage/types';
import { AtomTextTypes } from '@atoms/AtomText/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';

export interface AtomUserDefaultProps {
  options?: {
    id?: string;
    label?: string;
    link?: string;
  }[];
  src?: string;
  componentProps: {
    imageProps?: AtomImageTypes;
    buttonProps?: {
      wrapperProps?: AtomButtonTypes;
      textProps?: AtomTextTypes;
      iconProps?: AtomIconTypes;
    };
    buttonSessionProps?: AtomButtonTypes;
    menuProps?: {
      wrapperProps?: AtomButtonTypes;
      textProps?: AtomTextTypes;
      buttonProps?: AtomButtonTypes;
    };
  };
  name?: string;
  wrapperProps?: AtomWrapperTypes;
  buttonProps?: AtomButtonTypes;
}
