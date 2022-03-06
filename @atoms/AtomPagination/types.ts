import { Dispatch, SetStateAction } from 'react';
import { AtomTextTypes } from '../AtomText/types';
import { AtomIconTypes } from '../AtomIcon/types';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomButtonTypes } from '../AtomButton/types';
import { StatePagination } from '../AtomTable/types';

export interface AtomPaginationTypes {
  statePagination: StatePagination;
  setStatePagination: Dispatch<SetStateAction<StatePagination>>;
  acentColor?: string;
  componentsProps?: {
    containerProps?: AtomWrapperTypes;
    controlsProps?: {
      buttonsProps?: AtomButtonTypes;
      iconProps?: AtomIconTypes;
    };
    itemsProps?: {
      buttonsProps?: AtomButtonTypes;
      textProps?: AtomTextTypes;
    };
  };
}
