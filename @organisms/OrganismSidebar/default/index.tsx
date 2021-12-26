import { css } from '@emotion/react';
import {
  AtomButton,
  AtomDropdownSidebarDefault,
  AtomIcon,
  AtomText,
  AtomWrapper,
} from '@atoms';
import { AnimatePresence } from 'framer-motion';
import { FC, useState } from 'react';
import { AtomWrapperTypes } from '../../../@atoms/AtomWrapper/types';
import { AtomDropdownSidebarProps } from '../../../@atoms/AtomDropdownSidebar/types';

export type OrganismSidebarProps = {
  links?: AtomDropdownSidebarProps;
  componentsProps?: {
    wrapperProps?: AtomWrapperTypes;
  };
};

const SidebarAnimation = {
  transition: {
    default: { duration: 0.3 },
  },
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
};

const OrganismSidebar: FC<OrganismSidebarProps> = (props) => {
  const { componentsProps, links } = props;
  const [sidebar, setSidebar] = useState(false);

  return (
    <AtomWrapper
      width="max-content"
      customCSS={css`
        display: none;
        @media only screen and (max-width: 1200px) {
          display: flex;
        }
      `}
      {...componentsProps?.wrapperProps}
    >
      <AtomButton
        backgroundColor="transparent"
        onClick={() => setSidebar(!sidebar)}
        customCSS={css`
          align-items: center;
          justify-content: center;
          z-index: 10;

          svg {
            width: 30px;
            height: 30px;
          }
        `}
      >
        <AtomIcon
          color="#2c2c2c"
          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/menu.svg"
        />
        <AtomText
          customCSS={css`
            width: 0px;
            height: 0px;
            opacity: 0;
            display: none;
          `}
        >
          MENU
        </AtomText>
      </AtomButton>
      <AnimatePresence>
        {sidebar && (
          <AtomWrapper
            position="absolute"
            height="100vh"
            justifyContent="flex-start"
            alignItems="center"
            backgroundColor="white"
            width="300px"
            shadow
            {...SidebarAnimation}
            customCSS={css`
              display: none;
              @media only screen and (max-width: 1200px) {
                display: flex;
              }
              top: 0;
              right: 0;
            `}
          >
            <AtomWrapper height="80px" width="100%" backgroundColor="white" />
            <AtomWrapper
              height="calc(100vh - 90px)"
              justifyContent="flex-start"
              alignItems="center"
              customCSS={css`
                overflow-y: auto;
              `}
            >
              <AtomWrapper
                height="max-content"
                width="100%"
                justifyContent="flex-start"
                alignItems="flex-start"
                backgroundColor="white"
              >
                <AtomDropdownSidebarDefault {...links} />
              </AtomWrapper>
            </AtomWrapper>
          </AtomWrapper>
        )}
      </AnimatePresence>
    </AtomWrapper>
  );
};

export default OrganismSidebar;
