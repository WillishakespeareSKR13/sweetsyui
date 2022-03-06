import { AnimatePresence } from 'framer-motion';
import { AtomText, AtomIcon, AtomWrapper, AtomButton } from '@atoms';
import {
  FC,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  useEffect,
} from 'react';
import { css } from '@emotion/react';
import { AlertProps, AlertContextProps } from './types';
import { typeAlert } from './Colors';
import { ContextAlert } from './Context';

const Alert: FC<AlertContextProps> = ({ children, time, customCSS }) => {
  const [alert, setAlert] = useState<AlertProps[]>([]);

  return (
    <ContextAlert.Provider value={{ alert, setAlert }}>
      <AnimatePresence exitBeforeEnter>
        {alert.length > 0 && (
          <AtomWrapper
            key={alert.length > 0 ? 'ok' : 'no'}
            maxWidth="100vw"
            position="fixed"
            zIndex="9999"
            padding="10px"
            alignItems="center"
            justifyContent="center"
            customCSS={css`
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              animation: all 0.5s ease-in-out;
              ${customCSS}
            `}
          >
            <AnimatePresence>
              {alert.map((item) => (
                <UniqueAlert
                  key={item.id}
                  {...item}
                  setAlert={setAlert}
                  time={time}
                />
              ))}
            </AnimatePresence>
          </AtomWrapper>
        )}
      </AnimatePresence>
      {children}
    </ContextAlert.Provider>
  );
};

export default Alert;

type UniqueAlertType = AlertProps & {
  setAlert: Dispatch<SetStateAction<AlertProps[]>>;
  time: number;
};

const DefaultAnimation = {
  transition: {
    default: { duration: 0.5 },
  },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const UniqueAlert: FC<UniqueAlertType> = (props) => {
  const { id, message, setAlert, type, time = 3000 } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setAlert((a) => a.filter((item) => item.id !== id));
      }
    }, time);
    return () => clearTimeout(timer);
  }, [alert, time]);

  return (
    <AtomWrapper
      maxWidth="max-content"
      margin="0px 0px 20px 0px"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      padding="15px 25px"
      borderRadius="2px"
      backgroundColor={typeAlert[type].color}
      refObject={ref}
      {...DefaultAnimation}
    >
      <AtomIcon
        icon={typeAlert[type].icon}
        width="15px"
        height="12px"
        color="white"
      />
      <AtomText
        padding="3px 0px 0px 0px"
        color="white"
        fontWeight={600}
        margin="0px 0px 0px 15px"
      >
        {message}
      </AtomText>
      <AtomButton
        backgroundColor="white"
        padding="8px"
        borderRadius="4px"
        margin="0px 0px 0px 20px"
        onClick={() => setAlert((a) => a.filter((item) => item.id !== id))}
      >
        <AtomIcon
          icon={typeAlert[type].icon}
          width="8px"
          height="8px"
          color={typeAlert[type].color}
        />
      </AtomButton>
    </AtomWrapper>
  );
};
