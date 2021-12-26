import { FC, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import {
  AtomWrapper,
  AtomImage,
  AtomText,
  AtomButton,
  AtomLink,
  AtomLoader,
  AtomIcon,
} from '@atoms';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateType } from '@redux/reducer';

import { Logout } from '@redux/actions/user';
import { useRouter } from 'next/router';
import { AtomTextTypes } from '../../../@atoms/AtomText/types';
import { AtomIconTypes } from '../../../@atoms/AtomIcon/types';
import { AtomWrapperTypes } from '../../../@atoms/AtomWrapper/types';
import { AtomImageTypes } from '../../../@atoms/AtomImage/types';
import { AtomLinkProps } from '../../../@atoms/AtomLink/types';
import { AtomButtonTypes } from '../../../@atoms/AtomButton/types';

export interface OrganismUserDefaultProps {
  options?: {
    id?: string;
    label?: string;
    link?: string;
  }[];

  componentProps?: {
    userProps?: {
      wrapperProps?: AtomWrapperTypes;
      imageProps?: AtomImageTypes;
      menuProps?: {
        wrapperProps?: AtomWrapperTypes;
        buttonProps?: {
          buttonProps?: AtomButtonTypes;
          textProps?: AtomTextTypes;
          iconProps?: AtomIconTypes;
        };
        menuDropdownProps?: {
          wrapperProps?: AtomButtonTypes;
          linkProps?: AtomLinkProps;
          buttonProps?: AtomButtonTypes;
        };
      };
    };
    authProps?: {
      wrapperProps?: AtomWrapperTypes;
      loginProps?: AtomLinkProps;
      registerProps?: AtomLinkProps;
    };
  };
}

const OrganismUserDefault: FC<OrganismUserDefaultProps> = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [logout, setLogout] = useState(false);
  const user = useSelector((state: RootStateType) => state.user);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { options, componentProps } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      document.removeEventListener(`mousedow`, handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <AtomLoader
        isLoading={logout}
        colorLoading="#a01d7f"
        backgroundColor="#00000010"
      />
      {user?.id ? (
        <AtomWrapper
          flexDirection="row"
          maxWidth="max-content"
          height="max-content"
          alignItems="center"
          justifyContent="center"
          {...componentProps?.userProps?.wrapperProps}
        >
          <AtomImage
            alt="userPhoto"
            customCSS={css`
              overflow: hidden;
              background-color: #fff;
              border-radius: 50%;
              border: 2px solid #a01d7f;
            `}
            height="35px"
            width="35px"
            src={`${
              user.profile.photo ||
              'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDCAO-0001/images/userDefault.avif'
            }`}
            {...componentProps?.userProps?.imageProps}
          />
          <AtomWrapper
            width="max-content"
            padding="0px 10px"
            position="relative"
            height="max-content"
            {...componentProps?.userProps?.menuProps?.wrapperProps}
          >
            <AtomButton
              backgroundColor="transparent"
              padding="0px 15px"
              customCSS={css`
                min-width: 130px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
              `}
              {...componentProps?.userProps?.menuProps?.buttonProps
                ?.buttonProps}
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <AtomText
                color="#7F7F7F"
                fontWeight={600}
                cursor="pointer"
                {...componentProps?.userProps?.menuProps?.buttonProps
                  ?.textProps}
                customCSS={css`
                  max-width: 120px;
                  overflow: hidden;
                  max-height: 100%;
                `}
              >
                {`${user.profile.firstName ?? 'User'} ${
                  user.profile.lastName ?? 'Default'
                }`}
              </AtomText>
              <AtomIcon
                height="14px"
                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg"
                color="#1F1F1F"
                {...componentProps?.userProps?.menuProps?.buttonProps
                  ?.iconProps}
              />
            </AtomButton>
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
                `}
                {...componentProps?.userProps?.menuProps?.menuDropdownProps
                  ?.wrapperProps}
              >
                {options?.map((option) => (
                  <AtomLink
                    key={option.id}
                    width="100%"
                    padding="8px 10px"
                    color="#7F7F7F"
                    fontSize="10px"
                    align="center"
                    customCSS={css`
                      :hover {
                        background-color: #dadada;
                      }
                      transition: background-color 0.3s ease;
                    `}
                    {...option}
                    {...componentProps?.userProps?.menuProps?.menuDropdownProps
                      ?.linkProps}
                  >
                    {option.label}
                  </AtomLink>
                ))}
                <AtomButton
                  width="100%"
                  padding="8px 10px"
                  color="#7F7F7F"
                  borderRadius="0px"
                  backgroundColor="transparent"
                  fontSize="10px"
                  onClick={() => {
                    setLogout(true);
                    dispatch(Logout());
                    router.reload();
                  }}
                  customCSS={css`
                    :hover {
                      background-color: #dadada;
                    }
                    transition: background-color 0.3s ease;
                  `}
                  {...componentProps?.userProps?.menuProps?.menuDropdownProps
                    ?.buttonProps}
                >
                  Cerrar sesión
                </AtomButton>
              </AtomWrapper>
            )}
          </AtomWrapper>
        </AtomWrapper>
      ) : (
        <AtomWrapper
          flexDirection="row"
          maxWidth="max-content"
          height="100%"
          alignItems="center"
          justifyContent="center"
          customCSS={css`
            @media only screen and (max-width: 1200px) {
              display: none;
            }
          `}
          {...componentProps?.authProps?.wrapperProps}
        >
          <AtomLink
            padding="0"
            link="/login"
            color="#1F1F1F"
            margin="0px 20px 0px 0px"
            fontSize="12px"
            {...componentProps?.authProps?.loginProps}
          >
            Iniciar Sesión
          </AtomLink>
          <AtomLink
            fontSize="12px"
            link="/register"
            fontWeight={600}
            padding="7px 15px"
            customCSS={css`
              border-radius: 5px;
              color: white;
              background-color: #a01d7f;
            `}
            {...componentProps?.authProps?.registerProps}
          >
            Registrarse
          </AtomLink>
        </AtomWrapper>
      )}
    </>
  );
};

export default OrganismUserDefault;
