/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';

import AtomButton from '../AtomButton';
import AtomIcon from '../AtomIcon';
import AtomSeparator from '../AtomSeparator';
import AtomText from '../AtomText';
import AtomWrapper from '../AtomWrapper';
import AtomInput from '../AtomInput';

import { AtomTableStyled, AtomTbodyStyled, TDStyled } from './style';
import { AtomTableTypes } from './types';

const Table = <T extends object>(props: AtomTableTypes<T>) => {
  const { columns, data, tableWidth, customCSS, state, dispatch } = props;

  const TableData = { ...props, data: null, customCSS: null };
  return (
    <AtomWrapper
      width={tableWidth || `100%`}
      padding="0px 0px"
      borderRadius="4px"
      overflowX="auto"
      customCSS={css`
        overflow-x: auto;
        /* width */
        ::-webkit-scrollbar {
          height: 10px;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 2px;
        }
        ${customCSS}
      `}
    >
      <AtomTableStyled {...TableData}>
        <thead>
          <tr>
            {columns.length > 0 &&
              columns?.map((e, i) => (
                <th
                  style={{ width: `${e.width}` }}
                  key={`header ${e.id ?? i + 1}`}
                >
                  {e.title}
                </th>
              ))}
          </tr>
        </thead>
        <AtomTbodyStyled>
          {data?.length > 0 &&
            data?.map((e: any, i: number) => (
              <tr key={`row ${e.id ?? i + 1}`}>
                {columns.length > 0 &&
                  columns?.map((td, j) => (
                    <TDStyled key={`cell ${i + 1} ${j + 1}`} {...td}>
                      {td.view(e)}
                    </TDStyled>
                  ))}
              </tr>
            ))}
        </AtomTbodyStyled>
      </AtomTableStyled>
      {dispatch && state && (
        <>
          <AtomWrapper
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            customCSS={css`
              padding: 20px 10px;
              background-color: #ffffff;
              box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
            `}
          >
            <AtomWrapper
              flexDirection="row"
              height="100%"
              maxWidth="max-content"
              justifyContent="center"
              alignItems="center"
            >
              <AtomText
                color="#4A4A49"
                fontWeight={500}
                margin="0px 15px 0px 0px"
              >
                Mostrar
              </AtomText>
              <AtomInput
                type="select"
                border="1px solid #e0e0e0"
                labelWidth="80px"
                height="30px"
                customCSS={css`
                  span {
                    display: none;
                  }
                `}
                options={[
                  {
                    id: 'paginationKey1',
                    label: '10',
                    value: '10',
                  },
                  {
                    id: 'paginationKey1',
                    label: '25',
                    value: '25',
                  },
                  {
                    id: 'paginationKey1',
                    label: '50',
                    value: '50',
                  },
                  {
                    id: 'paginationKey1',
                    label: '75',
                    value: '75',
                  },
                  {
                    id: 'paginationKey1',
                    label: '100',
                    value: '100',
                  },
                ]}
                onChange={(e) => {
                  dispatch?.({
                    ...state,
                    limit: parseInt(e.target.value, 10),
                  });
                }}
              />
            </AtomWrapper>
            <AtomWrapper maxWidth="max-content" margin="0px 20px">
              <AtomText color="#4A4A49" fontWeight={500} align="center">
                {(state.limit ?? 0) * (state?.page ?? 0) >
                (state?.totaldocs ?? 0)
                  ? state?.totaldocs ?? 0
                  : (state.limit ?? 0) * (state?.page ?? 0)}{' '}
                de {state?.totaldocs ?? 0}
              </AtomText>
              <AtomText color="#4A4A49" fontWeight={500} align="center">
                Página {state?.page ?? 0} de{' '}
                {Math.ceil((state.totaldocs ?? 0) / (state.limit ?? 0))}
              </AtomText>
            </AtomWrapper>
            <AtomWrapper
              maxWidth="max-content"
              margin="0px 0px"
              flexDirection="row"
            >
              <AtomButton
                padding="0px 0px"
                margin="0px 10px 0px 0px"
                backgroundColor="transparent"
                onClick={() => {
                  dispatch?.({
                    ...state,
                    page: state?.hasprevpage
                      ? (state?.page ?? 0) - 1
                      : state?.page,
                  });
                }}
              >
                <AtomIcon
                  height="18px"
                  width="18px"
                  color={state?.hasprevpage ? '#262626' : '#c0c0c0'}
                  icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/chevron-left-solid%20(2).svg"
                />
              </AtomButton>
              <AtomButton
                padding="0px 0px"
                margin="0px 0px 0px 10px"
                backgroundColor="transparent"
                onClick={() => {
                  dispatch?.({
                    ...state,
                    page: state?.hasnextpage
                      ? (state?.page ?? 0) + 1
                      : state?.page,
                  });
                }}
              >
                <AtomIcon
                  height="18px"
                  width="18px"
                  color={state?.hasnextpage ? '#262626' : '#c0c0c0'}
                  icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/chevron-right-solid%20(7).svg"
                />
              </AtomButton>
            </AtomWrapper>
          </AtomWrapper>
          <AtomSeparator />
        </>
      )}
    </AtomWrapper>
  );
};
export default Table;
