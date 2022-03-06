export const SetModal = (payload: boolean) => ({
  type: 'SETMODAL',
  payload
});

export const CloseModal = () => ({
  type: 'CLOSEMODAL'
});

export const OpenModal = () => ({
  type: 'OPENMODAL'
});
