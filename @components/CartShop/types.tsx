import { AtomButtonTypes } from '@atoms/AtomButton/types';
import { AtomIconTypes } from '@atoms/AtomIcon/types';
import { AtomImageTypes } from '@atoms/AtomImage/types';
import { AtomInputTypes } from '@atoms/AtomInput/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { AtomTextTypes } from '@components/Chat/types';
import { ReactElement } from 'react';

export interface ButtonCartShopProps {
  wrapperProps?: AtomWrapperTypes;
  componentsProps?: {
    textProps?: AtomTextTypes;
    buttonSubProps?: AtomButtonTypes;
    buttonAddProps?: AtomButtonTypes;
    inputProps?: AtomInputTypes;
  };
}

export interface CartShopProps {
  wrapperProps?: AtomWrapperTypes;
  buttonProps?: AtomButtonTypes;
  iconProps?: AtomIconTypes;
  componentsProps?: {
    wrapperContainerProps?: AtomWrapperTypes;
    wrapperBodyProps?: AtomWrapperTypes;
  };
}

export interface ItemCartShopProps {
  buttonProps?: AtomButtonTypes;
  iconProps?: AtomIconTypes;
  buttonSection?: ReactElement | ReactElement[];
  src?: string;
  componentsProps?: {
    imageProps?: AtomImageTypes;
  };
  wrapperProps?: AtomWrapperTypes;
}
