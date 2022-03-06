import { AtomWrapper, AtomButton, AtomIcon } from '@atoms';
import { css } from '@emotion/react';
import { FC, useEffect, useRef, useState } from 'react';
import { CartShopProps } from './types';

const CartShop: FC<CartShopProps> = (props) => {
  const { wrapperProps, buttonProps, iconProps, componentsProps, children } =
    props;
  const [show, setShow] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false);
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [ref]);
  return (
    <AtomWrapper
      customCSS={css`
        position: relative;
        max-width: max-content;
        margin-left: 0;
        margin-right: 20px;
        ${wrapperProps?.customCSS};
      `}
      {...wrapperProps}
    >
      {show && (
        <AtomWrapper
          refObject={ref}
          customCSS={css`
            top: 150%;
            right: 50%;
            transform: translateX(50%);
            position: absolute;
            max-width: initial;
            align-items: center;
            justify-content: center;
            width: 350px;
            height: max-content;
            background-color: #ffffff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            margin-right: 55px;
          `}
        >
          <AtomWrapper
            maxHeight="250px"
            borderRadius="5px"
            justifyContent="flex-start"
            customCSS={css`
              overflow-y: auto;
              ${componentsProps?.wrapperContainerProps?.customCSS};
            `}
            {...componentsProps?.wrapperContainerProps}
          >
            <AtomWrapper
              borderRadius="5px"
              {...componentsProps?.wrapperBodyProps}
            >
              {children}
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      )}
      <AtomButton
        backgroundColor="transparent"
        padding="0"
        onClick={() => setShow(!show)}
        customCSS={css`
          position: relative;
          ${buttonProps?.customCSS};
        `}
        {...buttonProps}
      >
        <AtomIcon
          height="24px"
          width="24px"
          color="#317c57"
          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/shopping-cart-svgrepo-com.svg"
          {...iconProps}
        />
      </AtomButton>
    </AtomWrapper>
  );
};
export default CartShop;
