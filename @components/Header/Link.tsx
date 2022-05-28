import {
  AtomButton,
  AtomDropdown,
  AtomIcon,
  AtomLink,
  AtomText,
  AtomWrapper,
} from '@atoms';
import { css } from '@emotion/react';
import { FC, useState } from 'react';
import { ContainerLinkStyled, LinkStyled } from './style';
import { HeaderLinkProps } from './types';

const HeaderLink: FC<HeaderLinkProps> = (props) => {
  const {
    linkProps,
    textProps,
    links,
    iconProps,
    buttonProps,
    wrapperProps,
    linksLength,
  } = props;

  const [treeSubFileds, setTreeSubFileds] = useState(false);
  const [showMoreLinks, setShowMoreLikns] = useState(false);
  const [showTreeSubField, setShowTreeSubField] = useState(0);
  return (
    <ContainerLinkStyled>
      {links.length > (linksLength || 3) ? (
        <>
          {links
            .filter((_, index) => index < (linksLength || 3))
            .map((link, index) =>
              link?.type === 'dropdown' ? (
                <LinkStyled
                  key={link.id}
                  onHoverStart={() => {
                    setTreeSubFileds(true);
                    setShowTreeSubField(index);
                  }}
                  onHoverEnd={() => setTreeSubFileds(false)}
                >
                  <AtomLink
                    fontSize="12px"
                    {...link}
                    color="#1d1d1d"
                    fontWeight={600}
                    cursor="pointer"
                    customCSS={css`
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      ${textProps?.customCSS};
                    `}
                    {...textProps}
                  >
                    {link.label}
                    <AtomIcon
                      height="10px"
                      width="10px"
                      color="#6c6c6c"
                      customCSS={css`
                        margin: 0px 0px 0px 10px;
                        ${iconProps?.customCSS};
                      `}
                      {...iconProps}
                      icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg"
                    />
                  </AtomLink>
                  {treeSubFileds && showTreeSubField === index && (
                    <AtomDropdown data={link?.subFields} />
                  )}
                </LinkStyled>
              ) : (
                <LinkStyled key={link.id}>
                  <AtomLink
                    fontSize="12px"
                    as="a"
                    {...link}
                    color="#1d1d1d"
                    fontWeight={600}
                    {...linkProps}
                  >
                    {link.label}
                  </AtomLink>
                </LinkStyled>
              )
            )}
          {links.length >= (linksLength || 3) && (
            <AtomWrapper
              as="li"
              position="relative"
              flexDirection="row"
              width="max-content"
              height="max-content"
              onHoverEnd={() => setShowMoreLikns(false)}
              onHoverStart={() => setShowMoreLikns(true)}
              {...wrapperProps}
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
                  ${buttonProps?.customCSS};
                `}
                {...buttonProps}
              >
                <AtomIcon
                  width="11px"
                  height="11px"
                  color="#1d1d1b"
                  icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/outline/three-dots-svgrepo-com.svg"
                  {...iconProps}
                />
                <AtomText
                  {...textProps}
                  customCSS={css`
                    width: 0px;
                    height: 0px;
                    opacity: 0;
                    ${textProps?.customCSS};
                  `}
                >
                  MENU
                </AtomText>
              </AtomButton>
              {showMoreLinks && (
                <AtomDropdown
                  data={links.filter((_, index) => index >= (linksLength || 3))}
                />
              )}
            </AtomWrapper>
          )}
        </>
      ) : (
        <>
          {/* {links.map((link) => (
            <LinkStyled key={link.id}>
              <AtomLink
                fontSize="12px"
                as="a"
                {...link}
                color="#1d1d1d"
                fontWeight={600}
                {...linkProps}
              >
                {link.label}
              </AtomLink>
            </LinkStyled>
          ))} */}

          {links.map((link, index) =>
            link?.type === 'dropdown' ? (
              <LinkStyled
                key={link.id}
                onHoverStart={() => {
                  setTreeSubFileds(true);
                  setShowTreeSubField(index);
                }}
                onHoverEnd={() => setTreeSubFileds(false)}
              >
                <AtomLink
                  fontSize="12px"
                  {...link}
                  color="#1d1d1d"
                  fontWeight={600}
                  cursor="pointer"
                  customCSS={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    ${textProps?.customCSS};
                  `}
                  {...textProps}
                >
                  {link.label}
                  <AtomIcon
                    height="10px"
                    width="10px"
                    color="#6c6c6c"
                    customCSS={css`
                      margin: 0px 0px 0px 10px;
                      ${iconProps?.customCSS};
                    `}
                    {...iconProps}
                    icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg"
                  />
                </AtomLink>
                {treeSubFileds && showTreeSubField === index && (
                  <AtomDropdown data={link?.subFields} />
                )}
              </LinkStyled>
            ) : (
              <LinkStyled key={link.id}>
                <AtomLink
                  fontSize="12px"
                  as="a"
                  {...link}
                  color="#1d1d1d"
                  fontWeight={600}
                  {...linkProps}
                >
                  {link.label}
                </AtomLink>
              </LinkStyled>
            )
          )}
        </>
      )}
    </ContainerLinkStyled>
  );
};

export default HeaderLink;
