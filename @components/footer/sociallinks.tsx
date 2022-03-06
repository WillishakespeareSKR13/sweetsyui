import { AtomIcon, AtomLink, AtomText, AtomWrapper } from '@atoms';
import { AtomIconTypes } from '@atoms/AtomIcon/types';
import { AtomLinkProps } from '@atoms/AtomLink/types';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { css } from '@emotion/react';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface FooterSocialLink {
  icon?: string;
  href?: string;
  link?: string;
  styleIcon?: AtomIconTypes;
  styleLink?: AtomLinkProps;
}

interface FooterSolicialLinksType {
  socialLinks?: {
    stylesWrapper?: AtomWrapperTypes;
    styleLinks?: AtomLinkProps;
    styleIcons?: AtomIconTypes;
    links?: FooterSocialLink[];
  };
}

const FooterSolicialLinks: FC<FooterSolicialLinksType> = (props) => {
  const { socialLinks } = props;
  return (
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
      {...socialLinks?.stylesWrapper}
    >
      {socialLinks?.links?.map((socialLink) => (
        <AtomLink
          key={uuidv4()}
          href={socialLink?.href}
          link={socialLink?.link}
          margin="0px 10px"
          customCSS={css`
            cursor: pointer;
            @media (max-width: 480px) {
              margin: 0px 0px;
            }
          `}
          {...socialLinks?.styleLinks}
          {...socialLink?.styleLink}
        >
          <AtomIcon
            height="25px"
            width="25px"
            icon={socialLink.icon}
            {...socialLinks?.styleIcons}
            {...socialLink?.styleIcon}
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
  );
};
export default FooterSolicialLinks;
