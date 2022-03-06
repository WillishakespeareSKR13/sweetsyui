import { AtomButtonTypes } from '@atoms/AtomButton/types';
import { AtomButton, AtomIcon } from '@atoms';
import { FC } from 'react';

export interface MoleculeButtonCardProps extends AtomButtonTypes {
  iconColor?: string;
}

export const MoleculeButtonCardShop: FC<MoleculeButtonCardProps> = (props) => {
  const { iconColor } = props;
  return (
    <AtomButton padding="10px" backgroundColor="white" {...props}>
      <AtomIcon
        color={iconColor || 'red'}
        height="19px"
        width="19px"
        icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/images/add-to-cart.svg"
      />
    </AtomButton>
  );
};

export default MoleculeButtonCardShop;
