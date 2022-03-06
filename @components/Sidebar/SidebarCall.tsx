import { AtomIcon, AtomLink, AtomText } from '@atoms';
import { css } from '@emotion/react';
import { RootStateType } from '@Redux/reducer';
import React from 'react';
import { useSelector } from 'react-redux';

const getIcon = (name: string) =>
  `https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons/sideBar/${name}.svg`;

const SidebarCall = () => {
  const sideBar = useSelector((state: RootStateType) => state.sideBar);
  return (
    <AtomLink
      link="/"
      customCSS={css`
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: ${sideBar ? `flex-start` : `center`};
        flex-direction: row;
        padding: ${sideBar ? `15px 30px` : `15px 0px`};
        padding-left: ${sideBar ? `30px` : `0px`};
        border-radius: 0px;
        background-color: transparent;
        span {
          cursor: pointer;
          color: #656a69;
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
          background-color: #f1576c;
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
      <AtomIcon height="18px" width="18px" icon={getIcon('phone')} />
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
          Realizar llamada
        </AtomText>
      )}
    </AtomLink>
  );
};

export default SidebarCall;
