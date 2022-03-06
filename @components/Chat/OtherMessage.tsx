import { MessageContainer, Message, DateofMessage, Triangle } from './style';
import { ChatProps } from './types';

export const ChatOtherMessage = (props: ChatProps) => {
  const {
    imagen,
    name,
    background,
    dateMessage,
    content,
    borderRadius,
    componentsProps,
    messageOptions,
  } = props;

  return (
    <MessageContainer {...componentsProps?.wrapperProps}>
      <div>
        <img src={imagen} alt="img profile" />
        <Triangle background={background} />
        <Message
          borderRadius={borderRadius}
          background={background}
          {...componentsProps?.messageProps}
        >
          <section>
            <span>{name}</span>
            <div>{messageOptions}</div>
          </section>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </Message>
      </div>
      <DateofMessage color={background}>{dateMessage}</DateofMessage>
    </MessageContainer>
  );
};

export default ChatOtherMessage;
