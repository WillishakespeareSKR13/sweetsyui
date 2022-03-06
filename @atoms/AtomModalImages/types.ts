import { Dispatch, SetStateAction } from 'react';

export type AtomModalImageProps = {
  images?: string[];
  state?: boolean;
  setState?: Dispatch<SetStateAction<boolean>>;
  selected?: number;
  setSelected?: Dispatch<SetStateAction<number>>;
};
