import { FC } from 'react';
import { AtomButton, AtomInput, AtomWrapper } from '@atoms';
import { AtomButtonTypes } from '../../@atoms/AtomButton/types';
import { AtomInputTypes } from '../../@atoms/AtomInput/types';
import { AtomWrapperTypes } from '../../@atoms/AtomWrapper/types';

export type MoleculeSearchBarProps = {
  componentsProps?: {
    wrapperProps?: AtomWrapperTypes;
    inputProps?: AtomInputTypes;
    butonProps?: AtomButtonTypes;
  };
};

const MoleculeNewsLetter: FC<MoleculeSearchBarProps> = (props) => {
  const { componentsProps } = props;
  return (
    <AtomWrapper {...componentsProps?.wrapperProps}>
      <AtomInput
        id="newsletter"
        labelWidth="100%"
        height="30px"
        border="1px solid #00838f"
        placeholder="Tu email"
        {...componentsProps?.inputProps}
      />
      <AtomButton
        backgroundColor="#00838f"
        color="white"
        fontSize="12px"
        padding="8px 15px"
        fontWeight="700"
        {...componentsProps?.butonProps}
      >
        Subscribete
      </AtomButton>
    </AtomWrapper>
  );
};

export default MoleculeNewsLetter;
