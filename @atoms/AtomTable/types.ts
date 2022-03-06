import { SerializedStyles } from '@emotion/utils';
import { Dispatch, SetStateAction } from 'react';

export type StatePagination = {
  page: number;
  limit: number;
  hasnextpage: boolean;
  hasprevpage: boolean;
  pagingcounter: number;
  totaldocs: number;
};

export type AtomTableTypes<T extends object> = {
  tableWidth?: string;
  width?: string;
  height?: string;
  margin?: string;
  color?: string;
  borderRadius?: string;
  data?: T[];
  columns: AtomTableColumnTypes<T>[];
  state?: StatePagination;
  dispatch?: Dispatch<SetStateAction<StatePagination>>;

  customCSS?: SerializedStyles;
};

export type AtomTableColumnTypes<T extends object> = {
  id?: string;
  title: string;
  width?: string;
  view: (data?: T) => JSX.Element;
  customCSS?: SerializedStyles;
};
