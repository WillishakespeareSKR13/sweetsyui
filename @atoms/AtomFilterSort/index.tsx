import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import AtomInput from '../AtomInput';
import AtomText from '../AtomText';
import AtomWrapper from '../AtomWrapper';
import { AtomFilterSortProps } from './types';

const AtomFilterSort: FC<AtomFilterSortProps> = (props) => {
  const { componentsProps, options, route } = props;
  const router = useRouter();
  const { sort } = router.query;
  const [value, setValue] = useState('DEFAULT');
  const [optionsInput, setOptionsInput] = useState(
    options || [
      {
        id: '1',
        label: 'Menor',
        value: '-1',
      },
      {
        id: '2',
        label: 'Mayor',
        value: '1',
      },
    ]
  );

  useEffect(() => {
    setOptionsInput(options || optionsInput);
  }, [options]);

  useEffect(() => {
    if (sort) {
      setValue(sort.toString());
    }
  }, [sort]);

  return (
    <AtomWrapper
      width="max-content"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      padding="0px 5px 20px 0px"
      {...componentsProps?.wrapperProps}
    >
      <AtomText margin="0px 15px 0px 0px">Ordenar por:</AtomText>
      <AtomInput
        border="none"
        height="35px"
        placeholder="Buscar producto"
        fontSize="12px"
        backgroundColor="transparent"
        placeholderColor="#6c757d"
        errorHeight="0px"
        errorPadding="0px"
        type="select"
        value={value}
        options={optionsInput}
        onChange={(e) => {
          setValue(e.target.value);
          router.push({
            pathname: `${route || `${router.pathname}/`}`,
            query: {
              ...router.query,
              sort: e.target.value,
            },
          });
        }}
        {...componentsProps?.inputProps?.inputProps}
        customCSS={css`
          select {
            color: #f1576c;
            font-weight: bold;
            border-radius: 6px;
            border: 1px solid #dadada;
          }
          ${componentsProps?.inputProps?.inputProps?.customCSS}
        `}
      />
    </AtomWrapper>
  );
};

export default AtomFilterSort;
