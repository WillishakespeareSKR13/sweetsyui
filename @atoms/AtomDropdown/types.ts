import { AtomLinkProps } from '../AtomLink/types';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomTextTypes } from '../AtomText/types';

export interface Link {
  id?: string;
  type?: string;
  direction?: string;
  label?: string;
  link?: string;
  subFields?: Link[];
}

export interface RecursiveDropdownHook {
  children?: React.ReactNode;
  data?: Link[];
  recursive?: boolean;
  stylesWrapper?: AtomWrapperTypes;
  stylesText?: AtomTextTypes;
  stylesLink?: AtomLinkProps;
}
