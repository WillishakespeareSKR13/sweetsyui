import { ReactNode } from 'react';
import { css } from '@emotion/react';
import AtomContainer from '../AtomContainer';
import AtomWrapper from '../AtomWrapper';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomContainerTypes } from '../AtomContainer/types';

interface Props {
  isOpen?: boolean;
  component?: ReactNode;
  componentProps?: {
    containerProps?: AtomContainerTypes;
    wrapperProps?: AtomWrapperTypes;
  };
  key?: string;
}

const AtomModal = (props: Props) => {
  const { isOpen, component, componentProps, key } = props;
  return isOpen ? (
    <AtomContainer
      key={key}
      customCSS={css`
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        background-color: #00000010;
        backdrop-filter: blur(12px);
        z-index: 9999;
      `}
      {...componentProps?.containerProps}
    >
      <AtomWrapper
        backgroundColor="white"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="50%"
        height="60%"
        borderRadius="4px"
        {...componentProps?.wrapperProps}
      >
        {component}
      </AtomWrapper>
    </AtomContainer>
  ) : null;
};

export default AtomModal;
