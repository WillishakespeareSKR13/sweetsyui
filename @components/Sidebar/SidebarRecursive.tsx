import { AtomButton, AtomIcon, AtomLink, AtomText } from '@atoms';
import { css } from '@emotion/react';
import { RootStateType } from '@Redux/reducer';
import { FC, Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export interface Links {
  id?: string;
  type?: string;
  direction?: string;
  icon?: string;
  label?: string;
  link?: string;
  subFields?: Links[];
}

type SidebarRecursiveProps = {
  data?: Links[];
  level?: number;
  isOpen?: boolean;
};

const SidebarRecursive: FC<SidebarRecursiveProps> = ({
  data,
  level = 0,
  isOpen = false,
}) => {
  const sideBar = useSelector((state: RootStateType) => state.sideBar);
  const [showSubLinks, setShowSubLinks] = useState(
    data?.map((item) => ({
      id: item.id,
      isOpen: false,
    }))
  );

  useEffect(() => {
    setShowSubLinks(
      data?.map((item) => ({
        id: item.id,
        isOpen: false,
      }))
    );
  }, [data]);

  return (
    <>
      {data?.map((subField, subFieldIndex) => (
        <Fragment key={subField.id}>
          {subField.type === 'dropdown' ? (
            <AtomButton
              onClick={() =>
                setShowSubLinks(
                  showSubLinks?.map((item, index) =>
                    index === subFieldIndex
                      ? { ...item, isOpen: !item.isOpen }
                      : { ...item, isOpen: false }
                  )
                )
              }
              customCSS={css`
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: ${sideBar ? `flex-start` : `center`};
                flex-direction: row;
                padding: ${sideBar ? `15px 30px` : `15px 0px`};
                padding-left: ${sideBar
                  ? `${(sideBar ? 30 : 0) + level * 10}px`
                  : `0px`};
                cursor: pointer;
                border-radius: 0px;
                background-color: ${isOpen ||
                showSubLinks?.find((_, index) => index === subFieldIndex)
                  ?.isOpen
                  ? '#f1576c'
                  : 'transparent'};
                span {
                  cursor: pointer;
                  color: ${isOpen ||
                  showSubLinks?.find((_, index) => index === subFieldIndex)
                    ?.isOpen
                    ? 'white'
                    : '#656a69'};
                }
                :hover {
                  cursor: pointer;
                  background-color: ${isOpen ||
                  showSubLinks?.find((_, index) => index === subFieldIndex)
                    ?.isOpen
                    ? '#da4a5d'
                    : '#f1576c'};
                  span {
                    color: white;
                  }
                  svg {
                    path {
                      fill: white !important;
                      stroke: white !important;
                    }
                  }
                }
                transition: all 0.2s ease-in-out;
              `}
            >
              {subField?.icon ? (
                <AtomIcon height="20px" width="20px" icon={subField.icon} />
              ) : (
                <AtomText
                  fontSize="14px"
                  color="#656a69"
                  fontWeight="bold"
                  cursor="pointer"
                >
                  {subField.label.slice(0, 2).toUpperCase()}
                </AtomText>
              )}
              {sideBar && (
                <AtomText
                  maxWidth="max-content"
                  margin="0px 0px 0px 25px"
                  color="#656a69"
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
                    (_, index) => index === subFieldIndex
                  )?.isOpen
                    ? `rotate(180deg)`
                    : `rotate(0deg)`};
                  svg {
                    g {
                      g {
                        path {
                          fill: ${isOpen ||
                          showSubLinks?.find(
                            (_, index) => index === subFieldIndex
                          )?.isOpen
                            ? 'white'
                            : '#656a69'} !important;
                          stroke: ${isOpen ||
                          showSubLinks?.find(
                            (_, index) => index === subFieldIndex
                          )?.isOpen
                            ? 'white'
                            : '#656a69'} !important;
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
            <AtomLink
              link={subField.link}
              customCSS={css`
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: ${sideBar ? `flex-start` : `center`};
                flex-direction: row;
                padding: ${sideBar ? `15px 30px` : `15px 0px`};
                padding-left: ${sideBar
                  ? `${(sideBar ? 30 : 0) + level * 10}px`
                  : `0px`};
                border-radius: 0px;
                background-color: ${isOpen ||
                showSubLinks?.find((_, index) => index === subFieldIndex)
                  ?.isOpen
                  ? '#f1576c'
                  : 'transparent'};
                span {
                  cursor: pointer;
                  color: ${isOpen ||
                  showSubLinks?.find((_, index) => index === subFieldIndex)
                    ?.isOpen
                    ? 'white'
                    : '#656a69'};
                }
                svg {
                  g {
                    path {
                      fill: #f1576c !important;
                      stroke: #f1576c !important;
                    }
                  }
                }
                :hover {
                  background-color: ${isOpen ||
                  showSubLinks?.find((_, index) => index === subFieldIndex)
                    ?.isOpen
                    ? '#da4a5d'
                    : '#f1576c'};
                  span {
                    cursor: pointer;
                    color: white;
                  }
                  svg {
                    g {
                      path {
                        fill: white !important;
                        stroke: white !important;
                      }
                    }
                  }
                }
                transition: all 0.2s ease-in-out;
              `}
            >
              {subField?.icon ? (
                <AtomIcon height="20px" width="20px" icon={subField.icon} />
              ) : (
                <AtomText
                  fontSize="14px"
                  color="#656a69"
                  fontWeight="bold"
                  cursor="pointer"
                >
                  {subField.label.slice(0, 2).toUpperCase()}
                </AtomText>
              )}
              {sideBar && (
                <AtomText
                  maxWidth="max-content"
                  margin="0px 0px 0px 25px"
                  color="#656a69"
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

          {showSubLinks?.find((_, index) => index === subFieldIndex)
            ?.isOpen && (
            <SidebarRecursive
              isOpen={
                showSubLinks?.find((_, index) => index === subFieldIndex)
                  ?.isOpen
              }
              data={subField.subFields}
              level={level + 1}
            />
          )}
        </Fragment>
      ))}
    </>
  );
};

export default SidebarRecursive;
