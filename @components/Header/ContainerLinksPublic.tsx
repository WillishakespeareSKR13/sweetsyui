import { AtomWrapper } from '@atoms';
import { AtomWrapperTypes } from '@atoms/AtomWrapper/types';
import { css } from '@emotion/react';
import { FC } from 'react';

export interface ContainerPublicLInkProps {
  containerProps?: AtomWrapperTypes;
  background?: string;
}

const ContainerPublicLinks: FC<ContainerPublicLInkProps> = (props) => {
  const SidebarAnimation = {
    transition: {
      default: { duration: 0.3 },
    },
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
  };
  const { background, containerProps, children } = props;
  return (
    <AtomWrapper
      position="absolute"
      height="100vh"
      justifyContent="flex-start"
      alignItems="center"
      backgroundColor={background || 'white'}
      width="300px"
      shadow
      {...SidebarAnimation}
      customCSS={css`
        /* display: none; */
        @media only screen and (max-width: 1200px) {
          display: flex;
        }
        top: 0;
        right: 0;
        z-index: 101;
        ${containerProps?.customCSS}
      `}
      {...containerProps}
    >
      <AtomWrapper
        height="80px"
        width="100%"
        backgroundColor={background || 'white'}
      />
      <AtomWrapper
        height="calc(100vh - 90px)"
        justifyContent="flex-start"
        alignItems="center"
        customCSS={css`
          overflow-y: auto;
          overflow-x: hidden;
        `}
      >
        <AtomWrapper
          height="max-content"
          width="100%"
          justifyContent="flex-start"
          alignItems="flex-start"
          backgroundColor={background || 'white'}
        >
          {children}
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};
export default ContainerPublicLinks;
