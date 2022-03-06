import { Reducer } from 'react';

const TypesReducers = {
  SETMODAL: (_: ModalReduceType, payload: boolean) => payload,
  CLOSEMODAL: (): ModalReduceType => false,
  OPENMODAL: (): ModalReduceType => true
};

type UserAction = {
  type: keyof typeof TypesReducers;
  payload: ModalReduceType;
};

export type ModalReduceType = boolean;

export const initialState: ModalReduceType = false;

const ModalReducer: Reducer<ModalReduceType, UserAction> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  const TypeReduce = TypesReducers[type];
  const Reduce = TypeReduce ? TypeReduce(state, payload) : state;
  return Reduce;
};

export default ModalReducer;
