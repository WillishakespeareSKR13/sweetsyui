import { Reducer } from 'react';

const TypesReducers = {
  SETMEMBER: (_: MemberIDReduceType, payload: string) => payload,
  /* MEMEBERID: (): MemberIDReduceType => ``, */
};

type UserAction = {
  type: keyof typeof TypesReducers;
  payload: MemberIDReduceType;
};

export type MemberIDReduceType = string;

export const initialState: MemberIDReduceType = ``;

const memberID: Reducer<MemberIDReduceType, UserAction> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  const TypeReduce = TypesReducers[type];
  const Reduce = TypeReduce ? TypeReduce(state, payload) : state;
  return Reduce;
};

export default memberID;