import { IMember } from 'graphql';
import { Reducer } from 'redux';
import cookies from 'js-cookie';

const TypesReducers = {
  SETUSER: (_: IMember, payload: IMember) => payload,
  UPDATEUSER: (state: IMember, payload: IMember): IMember => ({
    ...state,
    ...payload,
  }),
  LOGOUT: () => {
    cookies.remove('bearer');
    return initialState;
  },
};

type UserAction = {
  type: keyof typeof TypesReducers;
  payload: IMember;
};

export const initialState = {} as IMember;

export const UserReducer: Reducer<IMember, UserAction> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  const TypeReduce = TypesReducers[type];
  const Reduce = TypeReduce ? TypeReduce(state, payload) : state;
  return Reduce;
};

export default UserReducer;
