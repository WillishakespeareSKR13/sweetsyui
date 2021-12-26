import { css } from '@emotion/react';
import { AtomIcon, AtomImage, AtomText, AtomWrapper } from '@atoms';
import { FC } from 'react';

export interface MoleculeCardCommentProps {
  image?: string;
  name?: string;
  title?: string;
  description?: string;
}

const MoleculeCardComment: FC<MoleculeCardCommentProps> = (props) => {
  const { image, name, title, description } = props;
  return (
    <AtomWrapper
      flexDirection="row"
      justifyContent="space-between"
      position="relative"
    >
      <AtomWrapper width="10%">
        <AtomImage
          alt={name || 'user'}
          height="70px"
          width="70px"
          customCSS={css`
            img {
              border-radius: 100%;
            }
          `}
          src={
            image ||
            'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/images/default-placeholder.png'
          }
        />
        <AtomIcon
          height="100%"
          color="#888888"
          customCSS={css`
            margin: 10px 0px 0px 0px;
            transform: translateX(100%);
            z-index: -1;
          `}
          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/images/Grupo%203198.svg"
        />
      </AtomWrapper>
      <AtomWrapper flexDirection="column" width="calc(100% - 90px)">
        <AtomText color="#888888" fontWeight="bold" padding="18px 0px">
          {title ||
            '¿Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie nunc eget?'}
        </AtomText>
        <AtomText
          color="#888888"
          customCSS={css`
            text-align: justify;
          `}
        >
          {description ||
            'Aliquam fermentum efficitur purus sit amet ultrices. Fusce vulputate ligula nec tortor venenatis porta. Aenean pretium interdum convallis. Vestibulum sit amet dictum lacus, in bibendum mauris. Curabitur et ornare velit. Curabitur blandit turpis at consequat sodales. Pellentesque sed eleifend arcu. Praesent ut risus bibendum, semper lectus ac, molestie arcu. Etiam placerat lacus eu molestie pulvinar. Cras sagittis orci ut ante scelerisque, in faucibus nibh scelerisque. Aliquam fermentum efficitur purus sit amet ultrices. Fusce vulputate ligula nec tortor venenatis porta. Aenean pretium interdum convallis. Vestibulum sit amet dictum lacus, in bibendum mauris. Curabitur et ornare velit. Curabitur blandit turpis at consequat sodales. Pellentesque sed eleifend arcu. Praesent ut risus bibendum, semper lectus ac, molestie arcu. Etiam placerat lacus eu molestie pulvinar. Cras sagittis orci ut ante scelerisque, in faucibus nibh scelerisque.'}
        </AtomText>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default MoleculeCardComment;
