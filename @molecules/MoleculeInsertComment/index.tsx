import { AtomWrapper, AtomButton, AtomInput } from '@atoms';
import { AtomButtonTypes } from '@atoms/AtomButton/types';
import { AtomInputTypes } from '@atoms/AtomInput/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { FC } from 'react';

export interface MoleculeInsertCommentProps {
  componentsProps?: {
    inputProps?: AtomInputTypes;
    buttonProps?: AtomButtonTypes;
    wrapperProps?: AtomWrapperTypes;
  };
}

const MoleculeInsertComment: FC<MoleculeInsertCommentProps> = (props) => {
  const { componentsProps } = props;
  return (
    <AtomWrapper
      flexDirection="column"
      justifyContent="space-between"
      {...componentsProps?.wrapperProps}
    >
      <AtomInput
        type="textbox"
        height="150px"
        labelWidth="100%"
        labelColor="#888888"
        spanMargin="0px 0px 10px 0px"
        label="Haz una pregunta"
        padding="15px 20px"
        color="#272727"
        {...componentsProps?.inputProps}
      />
      <AtomButton
        fontSize="12px"
        backgroundColor="#01abb9"
        {...componentsProps?.buttonProps}
      >
        Enviar
      </AtomButton>
    </AtomWrapper>
  );
};
export default MoleculeInsertComment;
