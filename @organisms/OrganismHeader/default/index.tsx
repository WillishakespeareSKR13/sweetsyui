/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AtomContainer,
  AtomLink,
  AtomWrapper,
  AtomText,
  AtomImage,
  AtomDropdownSidebarLinks,
} from '@atoms';
import { css } from '@emotion/react';
import { FC, ReactNode, useEffect, useState } from 'react';
import OrganismUserDefault, {
  OrganismUserDefaultProps,
} from '../../OrganismUser/default';
import MoleculeSearchBar, {
  MoleculeSearchBarProps,
} from '../../../@molecules/MoleculeSearchBar';
import { AtomLinkProps } from '../../../@atoms/AtomLink/types';
import { AtomImageTypes } from '../../../@atoms/AtomImage/types';
import { AtomDropdownSidebarProps } from '../../../@atoms/AtomDropdownSidebar/types';
import OrganismSidebar, {
  OrganismSidebarProps,
} from '../../OrganismSidebar/default';

export type DefaultHeaderTypes = {
  logo?: {
    src?: string;
    componentsProps?: {
      linkProps?: AtomLinkProps;
      imageProps?: AtomImageTypes;
    };
  };

  userAuth?: {
    component?: ReactNode;
    props?: OrganismUserDefaultProps;
  };
  searchBar?: {
    component?: ReactNode;
    searchBarProps?: MoleculeSearchBarProps;
  };
  links?: AtomDropdownSidebarProps;
  sidebar?: OrganismSidebarProps;
};

const DefaultHeader: FC<DefaultHeaderTypes> = (props) => {
  const { logo, searchBar, userAuth, links } = props;
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = sidebar ? 'hidden' : 'auto';
    document.body.style.height = sidebar ? '100vh' : 'max-content';
  }, [sidebar]);

  const handleresize = () => {
    if (window.innerWidth > 1200) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleresize, true);
    return () => {
      window.removeEventListener('resize', handleresize, true);
    };
  }, []);

  return (
    <>
      <AtomContainer
        height="90px"
        position="fixed"
        as="nav"
        shadow
        padding="0px 90px"
        customCSS={css`
          top: 0;
          z-index: 100;
          @media only screen and (max-width: 980px) {
            padding: 0px 30px;
          }
        `}
      >
        <AtomWrapper
          height="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          maxWidth="1440px"
          flexWrap="wrap"
        >
          {logo && (
            <AtomLink
              link="/"
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
              `}
              {...logo.componentsProps?.linkProps}
            >
              <AtomImage
                alt="LOGO"
                src={`${logo.src}`}
                height="55px"
                width="150px"
                customCSS={css`
                  img {
                    display: flex;
                    object-fit: contain;
                  }
                `}
                {...logo.componentsProps?.imageProps}
              />
              <AtomText
                customCSS={css`
                  width: 0px;
                  height: 0px;
                  opacity: 0;
                `}
              >
                LOGO
              </AtomText>
            </AtomLink>
          )}

          {links && <AtomDropdownSidebarLinks {...links} links={links.links} />}

          {searchBar && (
            <>
              {searchBar.component ? (
                searchBar.component
              ) : (
                <MoleculeSearchBar {...searchBar.searchBarProps} />
              )}
            </>
          )}
          {userAuth && (
            <>
              {userAuth.component ? (
                userAuth.component
              ) : (
                <OrganismUserDefault
                  componentProps={{
                    userProps: {
                      wrapperProps: {
                        customCSS: css`
                          @media only screen and (max-width: 1200px) {
                            display: none;
                          }
                        `,
                      },
                    },
                  }}
                  {...userAuth.props}
                />
              )}
            </>
          )}
          <OrganismSidebar links={links} />
        </AtomWrapper>
      </AtomContainer>
    </>
  );
};

export default DefaultHeader;
