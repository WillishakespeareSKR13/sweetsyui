import { AtomIcon, AtomWrapper } from '@atoms';
import { AtomIconTypes } from '@atoms/AtomIcon/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import React, { FC } from 'react';

interface FooterLogoComponentType {
  logo: string;
  styles?: {
    stylesWrapper?: AtomWrapperTypes;
    styleIcons?: AtomIconTypes;
  };
}

const FooterLogoComponent: FC<FooterLogoComponentType> = (props) => {
  const { logo, styles } = props;
  return (
    <AtomWrapper {...styles?.stylesWrapper}>
      <AtomIcon
        icon={logo}
        width="117px"
        height="122px"
        color="white"
        {...styles?.styleIcons}
      />
    </AtomWrapper>
  );
};
export default FooterLogoComponent;
