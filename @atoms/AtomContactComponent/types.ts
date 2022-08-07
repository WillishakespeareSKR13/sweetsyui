import { AtomButtonTypes } from '@atoms/AtomButton/types';
import { AtomImageTypes } from '@atoms/AtomImage/types';
import { AtomTextTypes } from '@atoms/AtomText/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';

export interface ContactComponentTypes {
  children?: React.ReactNode;
  image?: string;
  name?: string;
  messageSend?: string;
  onClick?: () => void;
  colorPrimary?: string;
  componentProps?: {
    wrapperProps?: AtomButtonTypes;
    imageProps?: AtomImageTypes;
    containerMessageProps?: {
      wrapperProps?: AtomWrapperTypes;
      nameProps?: AtomTextTypes;
    };
  };
}
