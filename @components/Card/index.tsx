import { css } from '@emotion/react';
import { AtomWrapper } from '@atoms';
import { FC, ReactElement } from 'react';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';

export interface MoleculeCardTypes extends AtomWrapperTypes {
  children?: ReactElement | ReactElement[];
}

export const MoleculeCard: FC<MoleculeCardTypes> = (props) => {
  const { children, customCSS } = props;

  return (
    <AtomWrapper
      {...props}
      whileHover={{
        zIndex: 10,
        scale: 1.05,
        boxShadow: `0px 0px 20px rgba(0, 0, 0, 0.1)`,
        transition: { duration: 0.3 },
      }}
      customCSS={css`
        width: 32%;
        min-width: 220px;
        height: max-content;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        padding: 0;
        margin: 0px 0px 20px 0px;
        position: relative;
        justify-content: flex-end;
        border-radius: 10px;
        @media only screen and (max-width: 820px) {
          width: 48%;
        }
        @media only screen and (max-width: 560px) {
          width: 100%;
        }

        ${customCSS}
      `}
    >
      {children}
    </AtomWrapper>
  );
};
export default MoleculeCard;
