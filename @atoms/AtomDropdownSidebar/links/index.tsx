import AtomButton from '@atoms/AtomButton';
import AtomDropdown from '@atoms/AtomDropdown';
import AtomIcon from '@atoms/AtomIcon';
import AtomLink from '@atoms/AtomLink';
import AtomText from '@atoms/AtomText';
import AtomWrapper from '@atoms/AtomWrapper';

import { css } from '@emotion/react';
import { useState, FC } from 'react';
import { ContainerLinkStyled, LinkStyled } from './style';
import { AtomDropdownSidebarProps } from '../types';

const AtomDropdownSidebarLinks: FC<AtomDropdownSidebarProps> = (props) => {
  const { links, linksQuanty = 4 } = props;
  const [treeSubFileds, setTreeSubFileds] = useState(false);
  const [showMoreLinks, setShowMoreLikns] = useState(false);
  return (
    <ContainerLinkStyled onHoverEnd={() => setTreeSubFileds(false)}>
      {links.length > linksQuanty - 1 ? (
        <>
          {links
            .filter((_, index) => index < linksQuanty)
            .map((link) =>
              link?.type === 'dropdown' ? (
                <LinkStyled
                  key={link.id}
                  onHoverStart={() => setTreeSubFileds(true)}
                >
                  <AtomText
                    fontSize="12px"
                    as="span"
                    {...link}
                    color="#6c6c6c"
                    fontWeight={600}
                    cursor="pointer"
                    customCSS={css`
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    {link.label}
                    <AtomIcon
                      height="10px"
                      width="10px"
                      color="#6c6c6c"
                      customCSS={css`
                        margin: 0px 0px 0px 10px;
                      `}
                      icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg"
                    />
                  </AtomText>
                  {treeSubFileds && <AtomDropdown data={link?.subFields} />}
                </LinkStyled>
              ) : (
                <LinkStyled key={link.id}>
                  <AtomLink
                    fontSize="12px"
                    as="a"
                    {...link}
                    color="#6c6c6c"
                    fontWeight={600}
                  >
                    {link.label}
                  </AtomLink>
                </LinkStyled>
              )
            )}
          {links.filter((_, index) => index > linksQuanty - 1).length > 0 && (
            <AtomWrapper
              as="li"
              position="relative"
              flexDirection="row"
              width="max-content"
              height="max-content"
              onHoverEnd={() => setShowMoreLikns(false)}
              onHoverStart={() => setShowMoreLikns(true)}
            >
              <AtomButton
                borderRadius="100%"
                width="18px"
                height="18px"
                padding="0"
                customCSS={css`
                  display: flex;
                  background-color: transparent;
                  align-items: center;
                  justify-content: center;
                  fill: #fff;
                  stroke: #fff;
                  :hover {
                    background-color: #dadada;
                  }

                  transition: background-color 0.3s ease;
                `}
              >
                <AtomIcon
                  width="11px"
                  height="11px"
                  color="#1d1d1b"
                  icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/outline/three-dots-svgrepo-com.svg"
                />
                <AtomText
                  customCSS={css`
                    width: 0px;
                    height: 0px;
                    opacity: 0;
                  `}
                >
                  MENU
                </AtomText>
              </AtomButton>
              {showMoreLinks && (
                <AtomDropdown
                  data={links.filter((_, index) => index > linksQuanty - 1)}
                />
              )}
            </AtomWrapper>
          )}
        </>
      ) : (
        <>
          {links.map((link) => (
            <LinkStyled key={link.id}>
              <AtomLink
                fontSize="12px"
                as="a"
                {...link}
                color="#7F7F7F"
                fontWeight={600}
              >
                {link.label}
              </AtomLink>
            </LinkStyled>
          ))}
        </>
      )}
    </ContainerLinkStyled>
  );
};

export default AtomDropdownSidebarLinks;
