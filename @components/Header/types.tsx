import { AtomButtonTypes } from '@atoms/AtomButton/types';
import { AtomIconTypes } from '@atoms/AtomIcon/types';
import { AtomImageTypes } from '@atoms/AtomImage/types';
import { AtomLinkProps } from '@atoms/AtomLink/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { AtomTextTypes } from '@components/Chat/types';
import { SerializedStyles } from '@emotion/react';

export interface SubField {
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

export interface HeaderLinkProps {
  linkProps?: AtomLinkProps;
  textProps?: AtomTextTypes;
  iconProps?: AtomIconTypes;
  buttonProps?: AtomButtonTypes;
  wrapperProps?: AtomWrapperTypes;
  links?: Link[];
  linksLength?: number;
}

export interface HeaderLogoProps {
  linkProps?: AtomLinkProps;
  textProps?: AtomTextTypes;
  iconProps?: AtomIconTypes;
  imageProps?: AtomImageTypes;
  text?: string;
  src?: string;
  icon?: string;
}

export interface BurgerButtonProps {
  iconProps?: AtomIconTypes;
  buttonProps?: AtomButtonTypes;
}

export interface LinkStyledProps {
  margin?: string;
  customcss?: SerializedStyles;
}

export interface AtomDropdownSidebarTypes {
  data?: Link[];
  level?: number;
  iconProps?: AtomLinkProps;
  componentsProps: {
    linksProps?: AtomLinkProps;
  };
  linkedProps?: LinkStyledProps;
}
