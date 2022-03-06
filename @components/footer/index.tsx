import { FC } from 'react';
import AtomContainer from '../../@atoms/AtomContainer';
import { AtomContainerTypes } from '../../@atoms/AtomContainer/types';

const Footer: FC<AtomContainerTypes> = (props) => {
  const { children } = props;
  return (
    <AtomContainer backgroundColor="#ff4f66" as="footer" {...props}>
      {children}
    </AtomContainer>
  );
};

export default Footer;
