import { css } from '@emotion/react';
import {
  AtomContainer,
  AtomImage,
  AtomLink,
  AtomText,
  AtomWrapper,
} from '@atoms';
import { RootStateType } from '@redux/reducer';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AtomContainerTypes } from '../../../@atoms/AtomContainer/types';
import { AtomImageTypes } from '../../../@atoms/AtomImage/types';
import { AtomLinkProps } from '../../../@atoms/AtomLink/types';
import { AtomWrapperTypes } from '../../../@atoms/AtomWrapper/types';
import OrganismUserDefault, {
  OrganismUserDefaultProps,
} from '../../OrganismUser/default';

export type AdminHeaderTypes = {
  logo?: {
    src: string;
    componentsProps?: {
      linkProps?: AtomLinkProps;
      imageProps?: AtomImageTypes;
    };
  };
  componentsProps?: {
    containerProps?: AtomContainerTypes;
    wrapperProps?: AtomWrapperTypes;
  };
  organismUser?: OrganismUserDefaultProps;
};

const AdminHeader: FC<AdminHeaderTypes> = (props) => {
  const { logo, componentsProps, organismUser } = props;
  const sideBar = useSelector((state: RootStateType) => state.sideBar);
  return (
    <AtomContainer
      as="nav"
      position="fixed"
      height="60px"
      backgroundColor="#373737"
      customCSS={css`
        top: 0;
        width: ${sideBar ? 'calc(100% - 320px)' : 'calc(100% - 80px)'};
        margin-left: ${sideBar ? '320px' : '80px'};
      `}
      {...componentsProps?.containerProps}
    >
      <AtomWrapper
        flexDirection="row"
        maxWidth="1440px"
        padding="0px 80px"
        height="100%"
        alignItems="center"
        justifyContent="flex-end"
        {...componentsProps?.wrapperProps}
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
              src={logo.src}
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
        {organismUser && (
          <OrganismUserDefault
            componentProps={{
              userProps: {
                menuProps: {
                  buttonProps: {
                    textProps: {
                      color: '#fff',
                    },
                    iconProps: {
                      color: '#fff',
                    },
                  },
                  menuDropdownProps: {
                    wrapperProps: {
                      backgroundColor: '#373737',
                    },
                    buttonProps: {
                      customCSS: css`
                        background-color: #6a6a6a;
                        color: white;
                        :hover {
                          background-color: #525252;
                        }
                        transition: background-color 0.3s ease;
                      `,
                    },
                    linkProps: {
                      customCSS: css`
                        background-color: #6a6a6a;
                        color: white;
                        :hover {
                          background-color: #525252;
                        }
                        transition: background-color 0.3s ease;
                      `,
                    },
                  },
                },
              },
              authProps: {
                loginProps: {
                  color: '#fff',
                },
                registerProps: {
                  customCSS: css`
                    color: #fff;
                    border-radius: 8px;
                    border: 2px solid #fff;
                    background-color: transparent;
                  `,
                },
              },
            }}
            {...organismUser}
          />
        )}
      </AtomWrapper>
    </AtomContainer>
  );
};

export default AdminHeader;
