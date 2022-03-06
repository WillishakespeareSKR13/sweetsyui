import { css } from '@emotion/react';

import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import AtomInput from '../AtomInput';
import AtomWrapper from '../AtomWrapper';
import AtomButton from '../AtomButton';
import AtomSeparator from '../AtomSeparator';
import AtomText from '../AtomText';
import { AtomFilterRangeTypes } from './types';

const mapRange = (
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) => low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);

const AtomFilterRange: FC<AtomFilterRangeTypes> = (props) => {
  const { min = 0, max = 100, onClick, route, componentsProps } = props;
  const router = useRouter();
  const { priceMin, priceMax } = router.query;
  const [price, setPrice] = useState({ min, max });
  const [loadValue, setLoadValue] = useState({
    status: false,
    value: { min: 0, max: 100 },
  });

  useEffect(() => {
    if (priceMin && priceMax && loadValue.status === false) {
      setLoadValue({
        status: true,
        value: {
          min: mapRange(Number(priceMin), min, max, 0, 100),
          max: mapRange(Number(priceMax), min, max, 0, 100),
        },
      });
    }
  }, [priceMin, priceMax]);

  return (
    <AtomWrapper
      {...componentsProps?.wrapperProps}
      customCSS={css`
        @media only screen and (max-width: 1200px) {
          max-width: 200px;
          margin: 0px 10px;
        }
        @media only screen and (max-width: 520px) {
          max-width: 100%;
        }
        ${componentsProps?.wrapperProps?.customCSS}
      `}
    >
      <AtomText
        margin="30px 0px 15px 0px"
        color="#f1576c"
        fontSize="16px"
        fontWeight={700}
        {...componentsProps?.titleProps}
      >
        Filtrar por precio
      </AtomText>
      <AtomSeparator
        height="1px"
        width="100%"
        color="#cacaca"
        margin="0px 0px 30px 0px"
        {...componentsProps?.separatorProps}
      />
      <AtomInput
        type="range"
        minRange={min}
        maxRange={max}
        thumbBorder="2px solid #f1576c"
        trackColor="#f1576c"
        loadValues={loadValue.value}
        onUpdateValues={(range) => {
          setPrice(range);
        }}
        id="priceRange"
        {...componentsProps?.inputProps}
      />
      <AtomText
        color="#888888"
        fontWeight={600}
        {...componentsProps?.descriptionProps}
      >
        {`Precio: $${price.min} - $${price.max}`}
      </AtomText>
      <AtomButton
        backgroundColor="#f1576c"
        padding="8px 25px"
        margin="15px 0px 0px 0px"
        onClick={() => {
          router.push({
            pathname: `${route || `${router.pathname}/`}`,
            query: {
              ...router.query,
              priceMin: price.min,
              priceMax: price.max,
            },
          });
          if (onClick) {
            onClick(price);
          }
        }}
        {...componentsProps?.buttonProps}
      >
        Filtrar
      </AtomButton>
    </AtomWrapper>
  );
};

export default AtomFilterRange;
