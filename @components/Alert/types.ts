import { SerializedStyles } from '@emotion/react';
import { Dispatch, SetStateAction } from 'react';

export interface AlertProps {
  id?: string;
  type: 'error' | 'success' | 'warning' | 'info';
  message: string;
}

export interface IContextAlertProps {
  alert: AlertProps[];
  setAlert: Dispatch<SetStateAction<AlertProps[]>>;
}

export interface AlertContextProps {
  time?: number;
  customCSS?: SerializedStyles;
}
