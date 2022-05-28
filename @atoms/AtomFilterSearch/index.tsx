import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import AtomWrapper from '../AtomWrapper';
import AtomButton from '../AtomButton';
import AtomIcon from '../AtomIcon';
import AtomInput from '../AtomInput';
import { AtomFilterSearchTypes } from './types';

const AtomFilterSearch: FC<AtomFilterSearchTypes> = (props) => {
  const { onClick, route, componentsProps } = props;
  const router = useRouter();
  const { search } = router.query;
  const [value, setValue] = useState('');
  useEffect(() => {
    if (search) {
      setValue(search.toString());
    }
  }, [search]);

  const handleOnClick = () => {
    if (onClick) {
      onClick(value);
    } else {
      const query: {
        search?: string;
      } = {
        ...router.query,
        search: value,
      };
      if (value === '') {
        delete query.search;
      }
      router.push({
        pathname: `${route || `${router.pathname}/`}`,
        query,
      });
    }
  };

  return (
    <AtomWrapper
      {...componentsProps?.wrapperProps}
      customCSS={css`
        @media only screen and (max-width: 1200px) {
          flex-direction: row;
          padding: 40px 0px 10px 0px;
        }
        @media only screen and (max-width: 980px) {
          flex-direction: row;
          padding: 0px 0px;
        }
        ${componentsProps?.wrapperProps?.customCSS}
      `}
    >
      <AtomWrapper
        height="max-content"
        backgroundColor="#f8f9fa"
        border="1px solid #ced4da"
        borderRadius="5px"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        padding="0px 15px"
        {...componentsProps?.inputProps?.wrapperProps}
        customCSS={css`
          @media only screen and (max-width: 1200px) {
            margin: 0px;
          }
          ${componentsProps?.inputProps?.wrapperProps?.customCSS}
        `}
      >
        <AtomIcon
          width="18px"
          height="18px"
          color="#b3b3b3"
          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/search.svg"
          {...componentsProps?.inputProps?.iconProps}
        />
        <AtomInput
          border="none"
          height="35px"
          labelWidth="100%"
          placeholder="Buscar producto"
          fontSize="12px"
          color="#484b4e"
          backgroundColor="transparent"
          placeholderColor="#abbac7"
          errorHeight="0px"
          errorPadding="0px"
          value={value}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleOnClick();
            }
          }}
          onChange={(e) => setValue(e.target.value)}
          {...componentsProps?.inputProps?.inputProps}
        />
      </AtomWrapper>
      <AtomButton
        backgroundColor="#fe6a6a"
        border="1px solid #fe6a6a"
        padding="7px 25px"
        margin="15px 0px 0px 0px"
        {...componentsProps?.buttonProps}
        onClick={() => {
          handleOnClick();
          componentsProps?.buttonProps?.onClick();
        }}
        customCSS={css`
          @media only screen and (max-width: 1200px) {
            margin: 15px 0px 0px 20px;
          }
          @media only screen and (max-width: 1200px) {
            margin: 0px 0px 0px 20px;
          }
          ${componentsProps?.buttonProps?.customCSS}
        `}
      >
        Buscar
      </AtomButton>
    </AtomWrapper>
  );
};

export default AtomFilterSearch;
