import { ReactNode, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import AtomContainer from '../AtomContainer';
import AtomWrapper from '../AtomWrapper';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomContainerTypes } from '../AtomContainer/types';

interface Props {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  component?: ReactNode;
  componentProps?: {
    containerProps?: AtomContainerTypes;
    wrapperProps?: AtomWrapperTypes;
  };
  key?: string;
}

const AtomModal = (props: Props) => {
  const { isOpen, setIsOpen, component, componentProps, key } = props;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen?.(isOpen);
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [ref]);

  return isOpen ? (
    <AtomContainer
      key={key}
      {...componentProps?.containerProps}
      customCSS={css`
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        background-color: #00000010;
        backdrop-filter: blur(12px);
        z-index: 9999;
        ${componentProps?.containerProps?.customCSS}
      `}
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
        refObject={ref}
      >
        {component}
      </AtomWrapper>
    </AtomContainer>
  ) : null;
};

export default AtomModal;
