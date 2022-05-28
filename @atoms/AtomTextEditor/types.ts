import { FormikValues } from 'formik';
import { Editor } from '@tiptap/core';
import { FocusEventHandler } from 'react';

export type AtomTextEditorType = {
  content?: string;
  formik?: FormikValues;
  id?: string;
  maxWidth?: string;
  onChangeEditor?: (content: Editor) => void;
  onBlur?: FocusEventHandler;
  errorColor?: string;
  errorFontSize?: string;
  errorFontWeight?: string;
  errorFontFamily?: string;
  errorTextAlign?: string;
  errorMargin?: string;
  errorPadding?: string;
  errorHeight?: string;
};
