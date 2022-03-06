import { AtomContainer } from '@atoms';
import { AtomContainerTypes } from '@atoms/AtomContainer/types';
import { css } from '@emotion/react';
import { FC } from 'react';

export type HeaderTypes = AtomContainerTypes;

const Header: FC<AtomContainerTypes> = (props) => {
  const { children, customCSS } = props;
  return (
    <AtomContainer
      height="80px"
      position="fixed"
      as="nav"
      justifyContent="space-between"
      flexDirection="row"
      padding="0px 90px"
      {...props}
      customCSS={css`
        top: 0;
        z-index: 100;
        @media only screen and (max-width: 980px) {
          padding: 0px 30px;
        }
        box-shadow: 0px 3px 6px rgb(0 0 0 / 10%);
        ${customCSS}
      `}
    >
      {children}
    </AtomContainer>
  );
};

export default Header;
