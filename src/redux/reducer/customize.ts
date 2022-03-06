import { Reducer } from 'react';

const TypesReducers = {
  SETALLCUSTOMIZE: (_: CustomizeReducerType, payload: PayloadType) =>
    payload.value as CustomizeReducerType,
  SETCUSTOMIZE: (state: CustomizeReducerType, payload: PayloadType) => ({
    ...state,
    [payload.key]: {
      ...state[payload.key],
      ...payload.value
    }
  })
};

type PayloadType = {
  key: keyof typeof initialState;
  value: object;
};
type Action = {
  type: keyof typeof TypesReducers;
  payload: PayloadType;
};

export type CustomizeReducerType = typeof initialState;

export const initialState = {
  fonts: {
    title: 'Montserrat',
    description: 'Montserrat'
  },
  colors: {
    primary: '#f1576c',
    secondary: '#ff686b',
    background: '#ffffff'
  },
  image: {
    main: {
      url: 'https://storage.googleapis.com/bucket_ixuabs_general/Ixulabs/template1/loginDefaul-img.png',
      file: undefined as File | undefined
    }
  },
  logo: {
    main: {
      url: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/logos/horizontal/logo.svg',
      file: undefined as File | undefined
    },
    tagline: 'Ixulabs'
  },
  button: {
    color: '#f1576c',
    radius: '4px'
  }
};

const Customize: Reducer<CustomizeReducerType, Action> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  const TypeReduce = TypesReducers[type];
  const Reduce = TypeReduce ? TypeReduce(state, payload) : state;
  return Reduce;
};

export default Customize;
