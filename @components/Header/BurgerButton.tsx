import { AtomIcon, AtomButton } from '@atoms';
import { css } from '@emotion/react';
import { FC } from 'react';

import { BurgerButtonProps } from './types';

const BurgerBUtton: FC<BurgerButtonProps> = (props) => {
  const { iconProps, buttonProps } = props;
  return (
    <AtomButton
      backgroundColor="transparent"
      customCSS={css`
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 10;
        @media only screen and (max-width: 1200px) {
          display: flex;
        }
        svg {
          width: 30px;
          height: 30px;
        }
        ${buttonProps?.customCSS}
      `}
      {...buttonProps}
    >
      <AtomIcon
        {...iconProps}
        color="#1d1d1d"
        icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/BMB-001/Icons/menu.svg"
      />
    </AtomButton>
  );
};

export default BurgerBUtton;
