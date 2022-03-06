import { initialState } from '../reducer/customize';

type PayloadType = {
  key: keyof typeof initialState;
  value: object;
};
export const setCustomize = (payload: PayloadType) => ({
  type: 'SETCUSTOMIZE',
  payload
});
export const setAllCustomize = (payload: PayloadType) => ({
  type: 'SETALLCUSTOMIZE',
  payload
});
