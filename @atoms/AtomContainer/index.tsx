import { FC } from 'react';
import { AtomContainerTypes } from './types';
import {
  AtomContainerDefaultStyled,
  AtomContainerFooterStyled,
  AtomContainerNavStyled,
} from './style';

const Container: FC<AtomContainerTypes> = (props) => {
  const { children, as } = props;

  switch (as) {
    case 'nav':
      return (
        <AtomContainerNavStyled {...props}>{children}</AtomContainerNavStyled>
      );
    case 'footer':
      return (
        <AtomContainerFooterStyled {...props}>
          {children}
        </AtomContainerFooterStyled>
      );

    default:
      return (
        <AtomContainerDefaultStyled {...props}>
          {children}
        </AtomContainerDefaultStyled>
      );
  }
};

export default Container;
