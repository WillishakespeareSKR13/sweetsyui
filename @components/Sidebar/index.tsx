import { AtomButton, AtomContainer, AtomIcon } from '@atoms';
import { AtomContainerTypes } from '@atoms/AtomContainer/types';
import { css } from '@emotion/react';
import { CloseSidebar, ToggleSidebar } from '@redux/actions/sideBar';
import { RootStateType } from '@redux/reducer';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type SidebarTypes = AtomContainerTypes;

const Sidebar: FC<AtomContainerTypes> = (props) => {
  const { children, customCSS } = props;
  const dispatch = useDispatch();
  const sideBar = useSelector((state: RootStateType) => state.sideBar);
  const [showButtonClose, setShowButtonClose] = useState(true);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 920) {
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
    <AtomContainer
      {...props}
      customCSS={css`
        top: 0;
        left: 0;
        position: fixed;
        margin-top: 80px;
        height: calc(100vh - 80px);
        justify-content: flex-start;
        width: ${sideBar ? `300px` : `80px`};
        z-index: 50;
        box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px;
        ${customCSS}
      `}
    >
      {children}
      {showButtonClose && (
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
            svg {
              width: 14px;
              height: 14px;
              margin: ${sideBar ? `0px 2px 0px 0px` : `0px 0px 0px 2px`};
              transform: ${sideBar ? `rotate(0deg)` : `rotate(180deg)`};
              path {
                fill: ${sideBar ? `#4d4d4d` : `white`};
                stroke: ${sideBar ? `#4d4d4d` : `white`};
              }
            }
          `}
        >
          <AtomIcon
            height="15px"
            width="15px"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons/sideBar/arrow-left.svg"
            customCSS={css`
              margin: ${sideBar ? `0px 0px 0px 0px` : `0px 0px 0px 0px`};
              svg {
                g {
                  path {
                    fill: ${sideBar ? `#4d4d4d` : `white`} !important;
                    stroke: ${sideBar ? `#4d4d4d` : `white`} !important;
                  }
                }
              }
            `}
          />
        </AtomButton>
      )}
    </AtomContainer>
  );
};

export default Sidebar;
