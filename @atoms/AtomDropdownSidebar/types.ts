import { AtomContainerTypes } from '@atoms/AtomContainer/types';
import { AtomTextTypes } from '../AtomText/types';
import { AtomLinkProps } from '../AtomLink/types';
import { LinkStyledProps } from './admin/style';

interface SubField {
  id?: string;
  type?: string;
  direction?: string;
  label?: string;
  link?: string;
  subFields?: Link[];
}

export interface Link {
  id?: string;
  type?: string;
  direction?: string;
  label?: string;
  link?: string;
  subFields?: SubField[];
}

export interface AtomDropdownSidebarProps {
  links?: Link[];
  level?: number;
  linksQuanty?: number;
  componentsProps?: {
    textProps?: AtomTextTypes;
    linkProps?: LinkStyledProps;
    containerProps?: {
      containerProps?: AtomContainerTypes;
      linkProps: AtomLinkProps;
    };
  };
}
