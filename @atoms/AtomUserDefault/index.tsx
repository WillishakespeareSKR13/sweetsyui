import { css } from '@emotion/react';
import { FC, useRef, useState } from 'react';
import AtomWrapper from '../AtomWrapper';
import AtomImage from '../AtomImage';
import AtomText from '../AtomText';
import AtomButton from '../AtomButton';
import AtomIcon from '../AtomIcon';
import AtomLink from '../AtomLink';
import { AtomUserDefaultProps } from './types';

const AtomUserDefault: FC<AtomUserDefaultProps> = (props) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const { src, componentProps, name, options, wrapperProps, buttonProps } =
    props;
  const ref = useRef<HTMLDivElement>(null);
  return (
    <AtomButton
      onClick={() => setShowUserMenu(!showUserMenu)}
      backgroundColor="#fff"
      color="#1d1d1d"
      {...buttonProps}
      customCSS={css`
        @media only screen and (max-width: 1200px) {
          display: none;
        }
        ${buttonProps?.customCSS};
      `}
    >
      <AtomWrapper
        flexDirection="row"
        maxWidth="max-content"
        height="max-content"
        alignItems="center"
        justifyContent="center"
        onHoverEnd={() => setShowUserMenu(false)}
        onHoverStart={() => setShowUserMenu(true)}
        {...wrapperProps}
      >
        <AtomImage
          alt="userPhoto"
          customCSS={css`
            overflow: hidden;
            background-color: #fff;
            border-radius: 50%;
            border: 2px solid #b3b0b0;
            ${componentProps?.imageProps?.customCSS};
          `}
          height="35px"
          width="35px"
          src={`${
            src ||
            'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDCAO-0001/images/userDefault.avif'
          }`}
          {...componentProps?.imageProps}
        />
        <AtomWrapper
          width="max-content"
          padding="0px 0px"
          position="relative"
          height="max-content"
        >
          <AtomWrapper
            backgroundColor="transparent"
            padding="0px 0px"
            customCSS={css`
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: row;
              ${componentProps?.buttonProps?.wrapperProps?.customCSS};
            `}
            {...componentProps?.buttonProps?.wrapperProps}
          >
            <AtomText
              color="#1d1d1d"
              fontWeight={600}
              cursor="pointer"
              customCSS={css`
                padding: 0px 20px;
                overflow: hidden;
                max-height: 100%;
                ${componentProps?.buttonProps?.textProps?.customCSS};
              `}
              {...componentProps?.buttonProps?.textProps}
            >
              {name || ``}
            </AtomText>
            <AtomIcon
              height="14px"
              icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg"
              color="#1F1F1F"
              {...componentProps?.buttonProps?.iconProps}
            />

            {showUserMenu && (
              <AtomWrapper
                refObject={ref}
                position="absolute"
                shadow
                alignItems="center"
                backgroundColor="white"
                borderRadius="5px"
                width="80%"
                padding="6px"
                customCSS={css`
                  bottom: -5px;
                  transform: translate(5%, 100%);
                  ${componentProps?.menuProps?.wrapperProps?.customCSS};
                `}
                {...componentProps?.menuProps?.wrapperProps}
              >
                {options?.map((option) => (
                  <AtomLink
                    key={option.id}
                    width="100%"
                    padding="8px 10px"
                    color="#1d1d1d"
                    fontSize="10px"
                    align="center"
                    customCSS={css`
                      :hover {
                        background-color: #dadada;
                      }
                      transition: background-color 0.3s ease;
                      ${componentProps?.menuProps?.textProps?.customCSS};
                    `}
                    {...option}
                    {...componentProps?.menuProps?.textProps}
                  >
                    {option.label}
                  </AtomLink>
                ))}
                <AtomButton
                  width="100%"
                  padding="8px 12px"
                  color="#1d1d1d"
                  borderRadius="0px"
                  backgroundColor="transparent"
                  fontSize="12px"
                  customCSS={css`
                    :hover {
                      background-color: #dadada;
                    }
                    transition: background-color 0.3s ease;
                    ${componentProps?.menuProps?.buttonProps?.customCSS};
                  `}
                  {...componentProps?.menuProps?.buttonProps}
                >
                  Cerrar sesión
                </AtomButton>
              </AtomWrapper>
            )}
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </AtomButton>
  );
};

export default AtomUserDefault;
