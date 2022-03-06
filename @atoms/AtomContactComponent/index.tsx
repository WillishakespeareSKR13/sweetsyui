import { color } from '@styles/stylesglobal/theme';
import { css } from '@emotion/react';
import { FC } from 'react';
import { ContactComponentTypes } from './types';
import AtomButton from '../AtomButton';
import AtomImage from '../AtomImage';
import AtomText from '../AtomText';
import AtomWrapper from '../AtomWrapper';
import AtomIcon from '../AtomIcon';

const ContactComponent: FC<ContactComponentTypes> = (props) => {
  const { image, name, messageSend, onClick, colorPrimary, componentProps } =
    props;
  return (
    <AtomButton
      customCSS={css`
        outline: none;
        border: none;
        cursor: pointer;
        width: 100%;
        height: 100px;
        background-color: ${color.background};
        border-radius: 10px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding: 20px;
        &:hover {
          filter: drop-shadow(5px 5px 5px ${colorPrimary || `gray`});
        }
      `}
      onClick={onClick}
      {...componentProps?.wrapperProps}
    >
      <AtomImage
        src={
          image ||
          'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDCAO-0001/images/userDefault.avif'
        }
        alt="user avatar"
        customCSS={css`
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
          margin-right: 10px;
        `}
        {...componentProps?.imageProps}
      />
      <AtomWrapper
        width="auto"
        alignItems="flex-start"
        customCSS={css`
          h3 {
            color: ${color.darkGray};
            button :hover & {
              color: ${color.primary};
            }
          }
        `}
        {...componentProps?.containerMessageProps?.wrapperProps}
      >
        <AtomText as="h3" {...componentProps?.containerMessageProps?.nameProps}>
          {name}
        </AtomText>
        <AtomWrapper
          customCSS={css`
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            p {
              color: ${colorPrimary || 'gray'};
              font-size: 14px;
            }
          `}
        >
          <AtomIcon
            width="30px"
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons/chat-icon.svg"
          />
          <AtomText as="p">{messageSend || 'Enviar mensaje'}</AtomText>
        </AtomWrapper>
      </AtomWrapper>
    </AtomButton>
  );
};

export default ContactComponent;
