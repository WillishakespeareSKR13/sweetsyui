/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect, useState, FC } from 'react';
import AtomText from '../AtomText';
import { AtomNotificationTypes } from './types';

import {
  NotificationContainer,
  NotificationModal,
  MessageSection,
  // SectionButton,
  Count,
  Triangle,
  ModalConainer,
} from './styles';

const AtomNotification: FC<AtomNotificationTypes> = (props) => {
  const { notification, count, color } = props;
  const [clase, setClase] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const wrapperRef = useRef<HTMLInputElement>(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setClase(clase);
        }
      }
      // Bind the event listener
      document.addEventListener(`mousedown`, handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener(`mousedow`, handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    if (count >= 1) {
      setShowNotification(true);
    } else {
      setShowNotification(false);
    }
  });

  useOutsideAlerter(wrapperRef);

  return (
    <>
      <NotificationContainer newNotification={showNotification}>
        {count >= 1 ? (
          <Count color={color}>
            <span>{count}</span>
          </Count>
        ) : (
          ``
        )}
        <button type="button" onClick={() => setClase(!clase)}>
          <img
            src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons/bell.svg"
            alt="Notification icon"
          />
        </button>
        <NotificationModal open={clase} ref={wrapperRef}>
          <Triangle open={clase} />
          <ModalConainer>
            {count !== 0 ? (
              <MessageSection>{notification}</MessageSection>
            ) : (
              <AtomText width="auto">No tienes notificaciones nuevas.</AtomText>
            )}
          </ModalConainer>
        </NotificationModal>
      </NotificationContainer>
    </>
  );
};

export default AtomNotification;
