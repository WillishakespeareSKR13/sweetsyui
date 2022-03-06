import { Reducer } from 'react';

const TypesReducers = {
  SETQUOTATION: (_: QuotationReduceType, payload: QuotationReduceTypePayload) =>
    payload,
  ADDQUOTATION: (
    state: QuotationReduceType,
    payload: QuotationReduceTypePayload
  ) => ({
    ...state,
    [payload.id]: payload
  }),
  DELETEQUOTATION: () => ({})
};

type UserAction = {
  type: keyof typeof TypesReducers;
  payload: QuotationReduceTypePayload;
};

export type QuotationReduceTypePayload<T = object> = {
  id: number;
  data: T;
  done: boolean;
};

export type QuotationReduceType<T = object> = {
  [key: number]: {
    id: number;
    data: T;
    done: boolean;
  };
};

export const initialState = {} as QuotationReduceType;

const QuotationReducer: Reducer<QuotationReduceType, UserAction> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  const TypeReduce = TypesReducers[type];
  const Reduce = TypeReduce ? TypeReduce(state, payload) : state;
  return Reduce;
};

export default QuotationReducer;
