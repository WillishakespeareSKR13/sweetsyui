/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { FC, Fragment, ReactNode, useEffect, useState } from 'react';
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomLink,
  AtomText,
  AtomWrapper,
} from '@atoms';
import { RootStateType } from '@redux/reducer';
import { CloseSidebar, ToggleSidebar } from '@redux/actions/sideBar';
import { Link } from '../../../@atoms/AtomDropdown/types';
import { AtomWrapperTypes } from '../../../@atoms/AtomWrapper/types';
import { AtomTextTypes } from '../../../@atoms/AtomText/types';

export type OrganismAdminSidebarProps = {
  logo?: {
    logoMini?: string;
    logo?: string;
  };
  links?: LinkProps[];
  customIcon?: (event: LinkProps) => ReactNode;
  customLink?: (event: LinkProps) => ReactNode;
  componentsProps?: {
    containerProps?: AtomWrapperTypes;
    wrapperProps?: AtomWrapperTypes;
    sidebarProps?: {
      containerProps?: AtomWrapperTypes;
      wrapperProps?: AtomWrapperTypes;
      sidebarProps?: RecursiveSidebarLinksProps;
    };
  };
  title?: {
    title?: string;
    textProps?: AtomTextTypes;
  };
  disableSidebar?: boolean;
};

const OrganismAdminSidebar: FC<OrganismAdminSidebarProps> = (props) => {
  const {
    logo,
    links,
    customIcon,
    customLink,
    componentsProps,
    title,
    children,
    disableSidebar,
  } = props;
  const sideBar = useSelector((state: RootStateType) => state.sideBar);
  const dispatch = useDispatch();
  const [showButtonClose, setShowButtonClose] = useState(true);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 920 && !disableSidebar) {
        dispatch(CloseSidebar());
        setShowButtonClose(false);
      } else {
        setShowButtonClose(true);
      }
    };

    window.addEventListener(`resize`, updateSize, true);
    updateSize();
    return () => window.removeEventListener(`resize`, updateSize, true);
  });

  return (
    <AtomWrapper
      width={sideBar ? `320px` : `80px`}
      height="100vh"
      position="fixed"
      zIndex="10"
      customCSS={css`
        left: 0;
        top: 0;
      `}
      {...componentsProps?.containerProps}
    >
      <AtomWrapper
        backgroundColor="#4d4d4d"
        width="100%"
        height="100%"
        justifyContent="flex-start"
        alignItems="center"
        position="relative"
        {...componentsProps?.wrapperProps}
      >
        {logo && (
          <AtomWrapper
            customCSS={css`
              width: 100%;
              height: 170px;
              align-items: center;
              justify-content: center;
            `}
          >
            {sideBar ? (
              <>
                {logo?.logo && (
                  <AtomImage
                    width="60%"
                    height="80px"
                    customCSS={css`
                      img {
                        object-fit: contain;
                      }
                    `}
                    src={`${logo?.logo}`}
                    alt="SIDEBARLOGO"
                  />
                )}
              </>
            ) : (
              <>
                {logo?.logoMini && (
                  <AtomImage
                    width="60%"
                    height="80px"
                    customCSS={css`
                      img {
                        object-fit: contain;
                      }
                    `}
                    src={`${logo?.logoMini}`}
                    alt="SIDEBARLOGO"
                  />
                )}
              </>
            )}
          </AtomWrapper>
        )}
        <AtomWrapper
          height="calc(100vh - 170px)"
          alignItems="center"
          justifyContent="flex-start"
          customCSS={css`
            overflow-x: hidden;
            overflow-y: scroll;
          `}
          {...componentsProps?.sidebarProps?.containerProps}
        >
          {title && <AtomText {...title?.textProps}>{title?.title}</AtomText>}
          <AtomWrapper
            height="max-content"
            alignItems="center"
            justifyContent="flex-start"
            {...componentsProps?.sidebarProps?.wrapperProps}
          >
            <RecursiveSidebarLinks
              links={links}
              customIcon={customIcon}
              customLink={customLink}
              {...componentsProps?.sidebarProps?.sidebarProps}
            />
          </AtomWrapper>
          {children}
        </AtomWrapper>
        {showButtonClose && !disableSidebar && (
          <AtomButton
            onClick={() => dispatch(ToggleSidebar())}
            customCSS={css`
              position: absolute;
              display: flex;
              padding: 0px;
              justify-content: center;
              align-items: center;
              background-color: ${sideBar ? `white` : `#f1576c`};
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
              width: 35px;
              height: 35px;
              border-radius: 50%;
              right: -15px;
              top: 130px;
            `}
          >
            <AtomIcon
              customCSS={css`
                svg {
                  width: 14px;
                  height: 14px;
                  margin: ${sideBar ? `0px 2px 0px 0px` : `0px 0px 0px 2px`};
                  transform: ${sideBar ? `rotate(180deg)` : `rotate(0deg)`};
                  path {
                    fill: ${sideBar ? `#4d4d4d` : `white`} !important;
                    stroke: ${sideBar ? `#4d4d4d` : `white`}!important;
                  }
                }
              `}
              icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrowleft.svg"
            />
          </AtomButton>
        )}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default OrganismAdminSidebar;

export interface LinkProps extends Link {
  icon?: string;
  subLinks?: LinkProps[];
}

type RecursiveSidebarLinksProps = {
  links?: LinkProps[];
  customIcon?: (event: LinkProps) => ReactNode;
  customLink?: (event: LinkProps) => ReactNode;
  level?: number;
};

const RecursiveSidebarLinks: FC<RecursiveSidebarLinksProps> = (props) => {
  const { links, level = 0, customIcon, customLink } = props;
  const sideBar = useSelector((state: RootStateType) => state.sideBar);
  const [showSubLinks, setShowSubLinks] = useState(
    links?.map((item: any) => ({
      id: item.id,
      isOpen: false,
    }))
  );
  return (
    <>
      {links?.map((subField, subFieldIndex) => (
        <Fragment key={subField.id}>
          {subField.type === 'dropdown' ? (
            <AtomButton
              onClick={() =>
                setShowSubLinks(
                  showSubLinks?.map((item, index) =>
                    index === subFieldIndex
                      ? { ...item, isOpen: !item.isOpen }
                      : item
                  )
                )
              }
              customCSS={css`
                display: flex;
                width: 100%;
                align-items: center;
                margin-left: ${sideBar ? `${level * 10}px` : `${level * 5}px`};
                justify-content: ${sideBar ? `flex-start` : `center`};
                flex-direction: row;
                padding: ${sideBar ? `10px 30px` : `10px 0px`};
                margin-bottom: 10px;
                cursor: pointer;
                background-color: transparent;
                :hover {
                  background-color: #6a7179;
                }
              `}
            >
              {subField.icon ? (
                <AtomImage
                  alt={`IconTag${subField.icon}`}
                  height="20px"
                  width="20px"
                  margin={sideBar ? `0px 0px 2px 0px` : `0px`}
                  src={subField.icon}
                />
              ) : (
                <>
                  {customIcon ? (
                    customIcon(subField)
                  ) : (
                    <AtomText color="white" fontSize="16px">
                      {`${subField.label}`.slice(0, 2).toUpperCase()}
                    </AtomText>
                  )}
                </>
              )}
              {sideBar && (
                <AtomText
                  maxWidth="max-content"
                  margin="0px 0px 0px 25px"
                  color="white"
                  fontWeight={700}
                  fontSize="14px"
                  customCSS={css`
                    display: flex;
                    @media (max-width: 920px) {
                      display: none;
                    }
                  `}
                >
                  {subField.label}
                </AtomText>
              )}
              <AtomIcon
                customCSS={css`
                  margin-left: 15px;
                  transform: ${showSubLinks?.find(
                    (_: any, index: number) => index === subFieldIndex
                  )?.isOpen
                    ? `rotate(180deg)`
                    : `rotate(0deg)`};
                  svg {
                    g {
                      g {
                        path {
                          fill: white !important;
                          stroke: white !important;
                        }
                      }
                    }
                  }
                `}
                width={sideBar ? `14px` : `10px`}
                height={sideBar ? `14px` : `10px`}
                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg"
              />
            </AtomButton>
          ) : (
            <>
              {customLink ? (
                customLink(subField)
              ) : (
                <AtomLink
                  link={subField.link}
                  customCSS={css`
                    display: flex;
                    width: 100%;
                    align-items: center;
                    margin-left: ${sideBar ? `${level * 10}px` : `0px`};
                    justify-content: ${sideBar ? `flex-start` : `center`};
                    flex-direction: row;
                    padding: ${sideBar ? `10px 30px` : `10px 0px`};
                    margin-bottom: 10px;
                    cursor: pointer;
                    :hover {
                      background-color: #6a7179;
                    }
                  `}
                >
                  {subField.icon ? (
                    <AtomImage
                      alt={`IconTag${subField.icon}`}
                      height="20px"
                      width="20px"
                      margin={sideBar ? `0px 0px 2px 0px` : `0px`}
                      src={subField.icon}
                    />
                  ) : (
                    <>
                      {customIcon ? (
                        customIcon(subField)
                      ) : (
                        <AtomText color="white" fontSize="16px">
                          {`${subField.label}`.slice(0, 2).toUpperCase()}
                        </AtomText>
                      )}
                    </>
                  )}

                  {sideBar && (
                    <AtomText
                      maxWidth="max-content"
                      margin="0px 0px 0px 25px"
                      color="white"
                      fontWeight={700}
                      fontSize="14px"
                      customCSS={css`
                        display: flex;
                        @media (max-width: 920px) {
                          display: none;
                        }
                      `}
                    >
                      {subField.label}
                    </AtomText>
                  )}
                </AtomLink>
              )}
            </>
          )}

          {showSubLinks?.find(
            (_: any, index: number) => index === subFieldIndex
          )?.isOpen && (
            <RecursiveSidebarLinks
              links={subField.subFields}
              level={level + 1}
            />
          )}
        </Fragment>
      ))}
    </>
  );
};
