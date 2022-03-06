import { Reducer } from 'react';

const TypesReducers = {
  SETSURVEYDETAIL: (_: SurveyDetailReducer, payload: SurveyDetailReducer) =>
    payload
  /* MEMEBERID: (): MemberIDReduceType => ``, */
};

type UserAction = {
  type: keyof typeof TypesReducers;
  payload: SurveyDetailReducer;
};

export type SurveyDetailReducer = {
  memberId: string;
  surveyId: string;
  name: string;
};

export const initialState: SurveyDetailReducer = {
  memberId: ``,
  surveyId: ``,
  name: ``
};

const surveyDetail: Reducer<SurveyDetailReducer, UserAction> = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  const TypeReduce = TypesReducers[type];
  const Reduce = TypeReduce ? TypeReduce(state, payload) : state;
  return Reduce;
};

export default surveyDetail;
