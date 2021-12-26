import { FC } from 'react';
import { InputErrorStyled } from './style';
import { AtomInputTypes } from './types';

const InputTextError: FC<AtomInputTypes> = (props) => {
  const { formik, id } = props;
  return (formik?.values[`${id}`] !== `` || formik?.touched[`${id}`]) &&
    formik?.errors[`${id}`] ? (
    <InputErrorStyled {...props}>{formik?.errors[`${id}`]}</InputErrorStyled>
  ) : (
    <InputErrorStyled {...{ ...props, children: null }} />
  );
};

export default InputTextError;
