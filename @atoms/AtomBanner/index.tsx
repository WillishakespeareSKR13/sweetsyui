import { AtomTextTypes } from '@atoms/AtomText/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { css } from '@emotion/react';
import { FC } from 'react';
import AtomText from '../AtomText';
import AtomWrapper from '../AtomWrapper';

interface AtomBannerProps {
  title?: string;
  description?: string;
  componentsProps?: {
    containerProps?: AtomWrapperTypes;
    wrapperProps?: AtomWrapperTypes;
    titleProps?: AtomTextTypes;
    descriptionProps?: AtomTextTypes;
  };
}

const AtomBanner: FC<AtomBannerProps> = (props) => {
  const { title, description, componentsProps, children } = props;

  return (
    <AtomWrapper
      backgroundColor="#f5f5f5"
      maxWidth="100%"
      alignItems="center"
      customCSS={css`
        @media only screen and (max-width: 980px) {
          padding: 40px 30px;
        }
      `}
      {...componentsProps?.containerProps}
    >
      <AtomWrapper
        maxWidth="1440px"
        alignItems="flex-start"
        padding="50px 90px"
        customCSS={css`
          @media only screen and (max-width: 980px) {
            align-items: center;
            padding: 0px 0px;
          }
        `}
        {...componentsProps?.wrapperProps}
      >
        {title && (
          <AtomText
            fontSize="38px"
            color="white"
            align="center"
            fontWeight={500}
            as="h1"
            customCSS={css`
              @media only screen and (max-width: 520px) {
                font-size: 36px;
              }
            `}
            {...componentsProps?.titleProps}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        )}
        {description && (
          <AtomText
            fontSize="20px"
            color="white"
            align="center"
            fontWeight={500}
            as="h1"
            padding="5px 0px"
            customCSS={css`
              @media only screen and (max-width: 520px) {
                font-size: 18px;
              }
            `}
            {...componentsProps?.descriptionProps}
          >
            {description}
          </AtomText>
        )}
        {children}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default AtomBanner;
