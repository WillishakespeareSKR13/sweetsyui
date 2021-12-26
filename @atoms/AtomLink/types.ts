import { Ref } from 'react';
import { AtomTextTypes } from '../AtomText/types';

export interface AtomLinkProps extends AtomTextTypes {
  link?: string;
  href?: string;
  ref?: Ref<HTMLAnchorElement>;
}
