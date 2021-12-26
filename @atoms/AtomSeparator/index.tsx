import { FC } from 'react';
import { AtomSeparatorStyled } from './style';
import { AtomSeparatorTypes } from './types';

const Separator: FC<AtomSeparatorTypes> = (props) => (
  <AtomSeparatorStyled {...props} />
);

export default Separator;
