import {
  MessageContainer,
  Message,
  DateofMessage,
  MyMessageTriangle,
} from './style';
import { ChatProps } from './types';

export const ChatMyMessage = (props: ChatProps) => {
  const {
    imagen,
    content,
    dateMessage,
    background,
    borderRadius,
    componentsProps,
    messageOptions,
  } = props;

  return (
    <MessageContainer {...componentsProps?.wrapperProps}>
      <div>
        <Message
          borderRadius={borderRadius}
          background={background}
          {...componentsProps?.messageProps}
        >
          <section>
            <div>{messageOptions}</div>
            <span>Tú</span>
          </section>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </Message>
        <MyMessageTriangle
          background={background}
          {...componentsProps?.triangleProps}
        />
        <img src={imagen} alt="img profile" />
      </div>
      <DateofMessage color={background} {...componentsProps?.textProps}>
        {dateMessage}
      </DateofMessage>
    </MessageContainer>
  );
};

export default ChatMyMessage;
