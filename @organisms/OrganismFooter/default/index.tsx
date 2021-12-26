import { css } from '@emotion/react';
import {
  AtomContainer,
  AtomIcon,
  AtomImage,
  AtomLink,
  AtomText,
  AtomWrapper,
} from '@atoms';
import { FC, ReactElement } from 'react';
import { AtomContainerTypes } from '../../../@atoms/AtomContainer/types';
import { AtomIconTypes } from '../../../@atoms/AtomIcon/types';
import { AtomImageTypes } from '../../../@atoms/AtomImage/types';
import { AtomLinkProps } from '../../../@atoms/AtomLink/types';
import { AtomTextTypes } from '../../../@atoms/AtomText/types';
import { AtomWrapperTypes } from '../../../@atoms/AtomWrapper/types';

interface Link {
  label?: string;
  href?: string;
  link?: string;
  componentsProps?: {
    linkProps?: AtomLinkProps;
  };
}
interface SocialLink {
  icon?: string;
  href?: string;
  link?: string;
  componentsProps?: {
    linkProps?: AtomLinkProps;
    iconProps?: AtomIconTypes;
  };
}
interface Column {
  title?: string;
  links?: Link[];
  component?: ReactElement;
  componentsProps?: {
    wrapperProps?: AtomWrapperTypes;
    titleProps?: AtomTextTypes;
  };
}

export type DefaultFooterTypes = {
  imageLogo?: string;
  links?: SocialLink[];
  columns?: Column[];
  componentsProps?: {
    containerProps?: AtomContainerTypes;
    wrapperProps?: AtomWrapperTypes;
    logoProps?: {
      wrapperProps?: AtomWrapperTypes;
      logoProps?: {
        linkProps?: AtomLinkProps;
        imageProps?: AtomImageTypes;
      };
      linksProps?: {
        wrapperProps?: AtomWrapperTypes;
        linkProps?: AtomLinkProps;
        iconProps?: AtomIconTypes;
      };
      columnProps?: {
        wrapperProps?: AtomWrapperTypes;
        titleProps?: AtomTextTypes;
        linkProps?: AtomLinkProps;
      };
    };
  };
};

const DefaultFooter: FC<DefaultFooterTypes> = ({
  imageLogo,
  columns,
  links,
  componentsProps,
}) => {
  return (
    <AtomContainer
      backgroundColor="#f2f2f2"
      padding="50px 0px"
      as="footer"
      {...componentsProps?.containerProps}
    >
      <AtomWrapper
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        maxWidth="1440px"
        padding="0px 90px"
        flexWrap="wrap"
        customCSS={css`
          @media (max-width: 480px) {
            flex-direction: column;
            padding: 0px 20px;
          }
        `}
        {...componentsProps?.wrapperProps}
      >
        <AtomWrapper
          maxWidth="max-content"
          justifyContent="space-between"
          customCSS={css`
            @media (max-width: 1200px) {
              width: 100%;
              align-items: center;
              justify-content: center;
              max-width: 100%;
            }
            @media (max-width: 480px) {
              max-width: max-content;
            }
          `}
          {...componentsProps?.logoProps?.wrapperProps}
        >
          {imageLogo && (
            <AtomLink
              href="/"
              customCSS={css`
                svg {
                  width: 180px;
                  height: 50px;
                }
              `}
              {...componentsProps?.logoProps?.linksProps?.linkProps}
            >
              <AtomImage
                alt="LOGO"
                src={imageLogo}
                height="80px"
                width="150px"
                customCSS={css`
                  img {
                    display: flex;
                    object-fit: contain;
                  }
                `}
                {...componentsProps?.logoProps?.logoProps?.imageProps}
              />
              <AtomText
                customCSS={css`
                  width: 0px;
                  height: 0px;
                  opacity: 0;
                  display: none;
                `}
              >
                LOGO
              </AtomText>
            </AtomLink>
          )}
          {links && (
            <AtomWrapper
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
              maxWidth="200px"
              margin="30px 0px"
              customCSS={css`
                @media (max-width: 1200px) {
                  justify-content: center;
                }
                @media (max-width: 480px) {
                  justify-content: flex-start;
                }
              `}
              {...componentsProps?.logoProps?.linksProps?.wrapperProps}
            >
              {links?.map((socialLink) => (
                <AtomLink
                  key={socialLink.link}
                  href={socialLink?.href}
                  link={socialLink?.link}
                  margin="0px 10px"
                  customCSS={css`
                    cursor: pointer;
                    @media (max-width: 480px) {
                      margin: 0px 0px;
                    }
                  `}
                  {...componentsProps?.logoProps?.linksProps?.linkProps}
                  {...socialLink?.componentsProps?.linkProps}
                >
                  <AtomIcon
                    height="25px"
                    width="25px"
                    icon={socialLink.icon}
                    {...componentsProps?.logoProps?.linksProps?.iconProps}
                    {...socialLink?.componentsProps?.iconProps}
                  />
                  <AtomText
                    customCSS={css`
                      width: 0px;
                      height: 0px;
                      opacity: 0;
                      display: none;
                    `}
                  >
                    {socialLink.icon}
                  </AtomText>
                </AtomLink>
              ))}
            </AtomWrapper>
          )}
        </AtomWrapper>

        {columns?.map((column) => (
          <AtomWrapper
            maxWidth="max-content"
            key={column.title}
            margin="0px 0px 20px 0px"
            {...componentsProps?.logoProps?.columnProps?.wrapperProps}
            {...column?.componentsProps?.wrapperProps}
          >
            <AtomText
              fontSize="large"
              margin="0px 0px 5px 0px"
              color="#6c6c6c"
              fontWeight="bold"
              {...componentsProps?.logoProps?.columnProps?.titleProps}
              {...column?.componentsProps?.titleProps}
            >
              {column?.title}
            </AtomText>
            {column?.links?.map((link) => (
              <AtomLink
                key={link.label}
                margin="2px 0px"
                fontSize="small"
                color="#6c6c6c"
                fontWeight={400}
                href={link.href}
                link={link.link}
                {...componentsProps?.logoProps?.columnProps?.linkProps}
                {...link?.componentsProps?.linkProps}
              >
                {link?.label}
              </AtomLink>
            ))}
            {column?.component}
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomContainer>
  );
};

export default DefaultFooter;
