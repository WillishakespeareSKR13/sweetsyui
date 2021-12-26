import { FC } from 'react';
import { css } from '@emotion/react';
import { AtomIcon, AtomInput, AtomWrapper } from '@atoms';
import { AtomIconTypes } from '../../@atoms/AtomIcon/types';
import { AtomInputTypes } from '../../@atoms/AtomInput/types';
import { AtomWrapperTypes } from '../../@atoms/AtomWrapper/types';

export type MoleculeSearchBarProps = {
  componentsProps?: {
    wrapperProps?: AtomWrapperTypes;
    inputProps?: AtomInputTypes;
    iconProps?: AtomIconTypes;
  };
};

const MoleculeSearchBar: FC<MoleculeSearchBarProps> = (props) => {
  const { componentsProps } = props;
  return (
    <AtomWrapper
      margin="0px 0px 0px 25px"
      width="max-content"
      height="max-content"
      position="relative"
      customCSS={css`
        @media only screen and (max-width: 520px) {
          display: none;
        }
      `}
      {...componentsProps?.wrapperProps}
    >
      <AtomInput
        id="search"
        height="26px"
        errorMargin="0px"
        labelWidth="max-content"
        borderRadius="50px"
        customCSS={css`
          input {
            width: 180px;
          }
          span {
            display: none;
          }
        `}
        {...componentsProps?.inputProps}
      />

      <AtomIcon
        height="14px"
        width="14px"
        icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/search-solid%20(1).svg"
        color="#a01d7f"
        customCSS={css`
          position: absolute;
          right: -30px;
        `}
        {...componentsProps?.iconProps}
      />
    </AtomWrapper>
  );
};

export default MoleculeSearchBar;
