import {
  QuotationReduceType,
  QuotationReduceTypePayload
} from '../reducer/quotation';

export const SetQuotation = (payload: QuotationReduceType) => ({
  type: 'SETQUOTATION',
  payload
});
export const AddQuotation = (payload: QuotationReduceTypePayload) => ({
  type: 'ADDQUOTATION',
  payload
});

export const DeleteQuotation = () => ({
  type: 'DELETEQUOTATION'
});
