import { AtomButton, AtomInput, AtomText, AtomWrapper } from '@atoms';
import { css } from '@emotion/react';
import { FC } from 'react';
import { ButtonCartShopProps } from './types';

const ButtonsCartShop: FC<ButtonCartShopProps> = (props) => {
  const { wrapperProps, componentsProps } = props;
  return (
    <AtomWrapper
      width="max-content"
      height="100%"
      alignItems="center"
      flexDirection="row"
      customCSS={css`
        align-self: center;
        ${wrapperProps?.customCSS};
      `}
      {...wrapperProps}
    >
      <AtomButton
        customCSS={css`
          padding: 0;
          height: 20px;
          width: 20px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          ${componentsProps?.buttonAddProps?.customCSS};
        `}
        {...componentsProps?.buttonSubProps}
      >
        <AtomText
          color="white"
          fontSize="12px"
          fontWeight="bold"
          cursor="pointer"
          {...componentsProps?.textProps}
        >
          -
        </AtomText>
      </AtomButton>
      <AtomWrapper
        customCSS={css`
          align-items: center;
          height: 20px;
          width: 20px;
          margin: 0px 12px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        `}
      >
        <AtomInput
          type="number"
          // value={`${item.quantity}`}
          width="35px"
          height="20px"
          padding="0px 0px 0px 0px"
          spanMargin="0px 0px 0px 0px"
          errorPadding="0px 0px 0px 0px"
          errorHeight="0px 0px 0px 0px"
          customCSS={css`
            input {
              font-size: 12px;
              font-weight: bold;
              text-align: center;
            }
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            input[type='number'] {
              -moz-appearance: textfield;
            }
            ${componentsProps?.inputProps?.customCSS};
          `}
          {...componentsProps?.inputProps}
        />
      </AtomWrapper>
      <AtomButton
        customCSS={css`
          background-color: #317c57;
          padding: 0;
          height: 20px;
          width: 20px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          ${componentsProps?.buttonAddProps?.customCSS};
        `}
        {...componentsProps?.buttonAddProps}
      >
        <AtomText
          color="white"
          fontSize="12px"
          fontWeight="bold"
          cursor="pointer"
          {...componentsProps?.textProps}
        >
          +
        </AtomText>
      </AtomButton>
    </AtomWrapper>
  );
};
export default ButtonsCartShop;
