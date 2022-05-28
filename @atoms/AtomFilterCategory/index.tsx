import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import AtomInput from '../AtomInput';
import AtomWrapper from '../AtomWrapper';
import AtomButton from '../AtomButton';
import AtomSeparator from '../AtomSeparator';
import AtomText from '../AtomText';
import { AtomFilterCategoryTypes, CategoriesSelectedTypes } from './types';

const AtomFilterCategory: FC<AtomFilterCategoryTypes> = (props) => {
  const { onClick, componentsProps, options, children } = props;

  const router = useRouter();
  const { categories } = router.query;

  const [categoriesSelected, setCategoriesSelected] = useState<
    CategoriesSelectedTypes[]
  >([]);

  const [loadValue, setLoadValue] = useState(false);

  useEffect(() => {
    if (categories && loadValue === false) {
      setLoadValue(true);
      setCategoriesSelected([categories].flat());
    }
  }, [categories]);
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
        Filtrar por categoria
      </AtomText>
      <AtomSeparator
        height="1px"
        width="100%"
        color="#cacaca"
        margin="0px 0px 20px 0px"
        {...componentsProps?.separatorProps}
      />
      <AtomWrapper
        customCSS={css`
          @media only screen and (max-width: 1200px) {
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
          }
        `}
      >
        {children}
        {options?.map((option) => (
          <AtomInput
            key={option.id}
            type="checkbox"
            {...option}
            accentColor="#f75e5e"
            label=""
            errorHeight="0px"
            value={`${option.value}`}
            checked={!!categoriesSelected.find((item) => item === option.id)}
            onChange={() => {
              setCategoriesSelected(
                categoriesSelected.includes(option.id)
                  ? categoriesSelected.filter((item) => item !== option.id)
                  : [...categoriesSelected, option.id]
              );
            }}
            // accentColor="#f1576c"
            {...componentsProps?.optionsProps}
            customCSS={css`
              input {
                margin-right: 5px;
                filter: hue-rotate(67deg);
                :checked {
                  filter: hue-rotate(0deg);
                }
              }
              ${componentsProps?.optionsProps?.customCSS}
            `}
          >
            <AtomText
              margin="3px 0px 0px 0px"
              {...componentsProps?.textProps}
              fontSize="12px"
              color="#494949"
              fontWeight={600}
            >
              {option.label}
            </AtomText>
          </AtomInput>
        ))}
      </AtomWrapper>
      <AtomButton
        backgroundColor="#f1576c"
        padding="8px 25px"
        margin="15px 0px 0px 0px"
        onClick={() => {
          router.push({
            query: { ...router.query, categories: categoriesSelected },
            pathname: router.pathname,
          });
          onClick?.(categoriesSelected);
        }}
        {...componentsProps?.buttonProps}
      >
        Filtrar
      </AtomButton>
    </AtomWrapper>
  );
};

export default AtomFilterCategory;
