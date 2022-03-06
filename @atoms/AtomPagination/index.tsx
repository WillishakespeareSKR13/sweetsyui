import { css } from '@emotion/react';

import { FC, useEffect, useState } from 'react';
import AtomWrapper from '../AtomWrapper';
import AtomButton from '../AtomButton';
import AtomIcon from '../AtomIcon';
import AtomText from '../AtomText';
import { AtomPaginationTypes } from './types';

const AtomPagination: FC<AtomPaginationTypes> = (props) => {
  const { statePagination, setStatePagination, acentColor, componentsProps } =
    props;
  const [pagination, setPagination] = useState(statePagination?.page + 1 ?? 1);
  const pages =
    Math.ceil(statePagination.totaldocs / statePagination.limit) === 0
      ? 1
      : Math.ceil(statePagination.totaldocs / statePagination.limit);
  const [quantyPages, setQuantyPages] = useState(
    Array.from({ length: pages || 10 }, (_, i) => ({
      id: i + 1,
      label: i + 1,
    }))
  );
  useEffect(() => {
    setStatePagination({
      ...statePagination,
      page: pagination - 1,
    });
  }, [pagination]);
  useEffect(() => {
    setQuantyPages(
      Array.from({ length: pages || 10 }, (_, i) => ({
        id: i + 1,
        label: i + 1,
      }))
    );
  }, [pages]);

  useEffect(() => {
    if (statePagination.page !== pagination - 1) {
      setPagination(statePagination?.page + 1 ?? 1);
    }
  }, [statePagination]);

  const diff = Math.max(0, (quantyPages.length - pagination - 2) * -1);
  const start = Math.max(0, pagination - (3 + diff));
  const end = Math.min(start + 4, quantyPages.length - 1);
  return (
    <AtomWrapper flexDirection="row" width="100%">
      <AtomWrapper
        flexDirection="row"
        width="max-content"
        position="relative"
        {...componentsProps?.containerProps}
      >
        <AtomButton
          height="50px"
          width="50px"
          backgroundColor={`${
            pagination > 1 ? acentColor || '#fe6a6a' : '#f2f2f2'
          }`}
          padding="0"
          onClick={() => {
            setPagination(pagination > 1 ? pagination - 1 : pagination);
          }}
          {...componentsProps?.controlsProps?.buttonsProps}
          customCSS={css`
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: -65px;
            ${componentsProps?.controlsProps?.buttonsProps?.customCSS}
          `}
        >
          <AtomIcon
            height="15px"
            width="15px"
            color={pagination > 1 ? 'white' : '#dcdcdc'}
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/images/left-arrow-return-svgrepo-com.svg"
            {...componentsProps?.controlsProps?.iconProps}
          />
        </AtomButton>
        {quantyPages
          .filter((_, index) => index >= start && index <= end)
          .map((item) => (
            <AtomButton
              height="50px"
              width="50px"
              key={`Pagination${item.id}`}
              backgroundColor={
                pagination === item.id ? `${acentColor || '#fe6a6a'}` : '#fff'
              }
              margin="0px 10px"
              padding="0px"
              onClick={() => setPagination(item.id)}
              {...componentsProps?.itemsProps?.buttonsProps}
              customCSS={css`
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                ${componentsProps?.itemsProps?.buttonsProps?.customCSS}
              `}
            >
              <AtomText
                cursor="pointer"
                fontWeight="bold"
                color={
                  pagination === item.id ? '#fff' : `${acentColor || '#fe6a6a'}`
                }
                {...componentsProps?.itemsProps?.textProps}
              >
                {item.label}
              </AtomText>
            </AtomButton>
          ))}
        <AtomButton
          height="50px"
          width="50px"
          backgroundColor={`${
            pagination < (pages || quantyPages.length)
              ? acentColor || '#fe6a6a'
              : '#f2f2f2'
          }`}
          padding="0"
          onClick={() => {
            setPagination(
              pagination < (pages || quantyPages.length)
                ? pagination + 1
                : pagination
            );
          }}
          {...componentsProps?.controlsProps?.buttonsProps}
          customCSS={css`
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: -65px;
            ${componentsProps?.controlsProps?.buttonsProps?.customCSS}
          `}
        >
          <AtomIcon
            height="15px"
            width="15px"
            color={
              pagination < (pages || quantyPages.length) ? 'white' : '#dcdcdc'
            }
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/images/left-arrow-return-svgrepo-com.svg"
            {...componentsProps?.controlsProps?.iconProps}
            customCSS={css`
              transform: rotate(180deg);
              ${componentsProps?.controlsProps?.iconProps?.customCSS}
            `}
          />
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default AtomPagination;
