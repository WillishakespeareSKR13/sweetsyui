import { AtomLink, AtomText, AtomIcon, AtomImage } from '@atoms';
import { css } from '@emotion/react';
import { FC } from 'react';
import { HeaderLogoProps } from './types';

const HeaderLogo: FC<HeaderLogoProps> = (props) => {
  const { text, linkProps, textProps, iconProps, imageProps, src, icon } =
    props;

  return (
    <AtomLink
      customCSS={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: max-content;
        height: 100%;
        svg {
          width: 150px;
          height: 50px;
        }
        ${linkProps?.customCSS};
      `}
      {...linkProps}
    >
      {src && (
        <AtomImage src={src} alt="imageHeader" height="70%" {...imageProps} />
      )}
      {icon && (
        <AtomIcon height="70%" color="#ffffff" {...iconProps} icon={src} />
      )}
      <AtomText
        customCSS={css`
          width: 0px;
          height: 0px;
          opacity: 0;
          ${textProps?.customCSS};
        `}
        {...textProps}
      >
        {text}
      </AtomText>
    </AtomLink>
  );
};

export default HeaderLogo;
