import { createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AlertProps, IContextAlertProps } from './types';

export const ContextAlert = createContext({} as IContextAlertProps);

export const useAlert = () => {
  const { alert, setAlert } = useContext(ContextAlert);
  const insertAlert = (newAlert?: AlertProps) => {
    const newAlertID = {
      ...newAlert,
      id: uuidv4(),
    };
    setAlert([...alert, newAlertID]);
  };
  return { insertAlert };
};

export default useAlert;
