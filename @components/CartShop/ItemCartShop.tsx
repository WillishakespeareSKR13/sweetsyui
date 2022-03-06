import { AtomButton, AtomIcon, AtomImage, AtomWrapper } from '@atoms';
import { css } from '@emotion/react';
import { FC } from 'react';
import { ItemCartShopProps } from './types';

const ItemCartShop: FC<ItemCartShopProps> = (props) => {
  const {
    buttonProps,
    iconProps,
    children,
    buttonSection,
    src,
    componentsProps,
    wrapperProps,
  } = props;

  return (
    <AtomWrapper
      //   key={item.id}
      customCSS={css`
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        padding: 20px;
        border-bottom: 1px solid #e6e6e6;
        ${wrapperProps?.customCSS};
      `}
      {...wrapperProps}
    >
      <AtomWrapper
        flexDirection="row"
        maxWidth="max-content"
        width="100%"
        justifyContent="space-between"
      >
        <AtomImage
          height="50px"
          width="50px"
          //   alt={item.name}
          alt="product"
          src={
            src ??
            'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/images/default.jpg'
          }
          customCSS={css`
            overflow: hidden;
            border-radius: 50%;
            ${componentsProps?.imageProps?.customCSS};
          `}
          {...componentsProps?.imageProps}
        />
        <AtomWrapper
          maxWidth="max-content"
          margin="0px 0px 0px 10px"
          height="100%"
          justifyContent="space-between"
        >
          {children}
        </AtomWrapper>
      </AtomWrapper>
      {buttonSection}
      <AtomButton
        customCSS={css`
          align-self: center;
          background-color: transparent;
          padding: 0;
          height: max-content;
          width: max-content;
          ${buttonProps?.customCSS}
        `}
        {...buttonProps}
      >
        <AtomIcon
          height="20px"
          width="20px"
          color="#317c57"
          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/trash-svgrepo-com.svg"
          {...iconProps}
        />
      </AtomButton>
    </AtomWrapper>
  );
};

export default ItemCartShop;
