import { SurveyDetailReducer } from '../reducer/blog';

export const setSurveyDetail = (payload: SurveyDetailReducer) => ({
  type: 'SETSURVEYDETAIL',
  payload
});
