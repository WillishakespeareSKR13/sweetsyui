import { css } from '@emotion/react';
import { AtomImage } from '@atoms';
import { FC } from 'react';
import { AtomImageTypes } from '@atoms/AtomImage/types';

export interface MoleculeImageCardTypes extends AtomImageTypes {
  background?: string;
  src?: string;
}

export const MoleculeCardImage: FC<MoleculeImageCardTypes> = (props) => {
  const { customCSS, src, background } = props;
  return (
    <AtomImage
      {...props}
      alt="image"
      width="100%"
      height="300px"
      src={
        src ||
        `https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/images/default-placeholder.png`
      }
      zIndex="-1"
      customCSS={css`
        background-color: ${background};
        top: 0;
        left: 0;
        border-radius: 10px 10px 0 0;
        ${customCSS}
      `}
    />
  );
};

export default MoleculeCardImage;
