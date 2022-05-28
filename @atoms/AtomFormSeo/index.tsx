import { css } from '@emotion/react';
import { FormikValues } from 'formik';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../../@utils';
import AtomButton from '../AtomButton';
import AtomInput from '../AtomInput';
import AtomIcon from '../AtomIcon';
import AtomText from '../AtomText';
import AtomWrapper from '../AtomWrapper';

import { SeoPageProps } from '../AtomSeoPage/types';

export type IInitialSeoValues = {
  seo: SeoPageProps;
};
export const initialSeoValues = {
  slug: '',
  seo: {
    title: '',
    description: '',
    page: '',
    website: '',
    keywords: [],
    image: '',
    icon: '',
    locale: '',
  },
} as IInitialSeoValues;

type Props = {
  formik?: FormikValues;
};

const AtomFormSeo = (props: Props) => {
  const { formik } = props;
  const [keyword, setKeyword] = useState('');
  return (
    <AtomWrapper
      customCSS={css`
        width: 100%;
        gap: 20px;
      `}
    >
      <AtomWrapper
        width="100%"
        backgroundColor="#ffffff"
        padding="30px 40px"
        customCSS={css`
          box-shadow: 0px 3px 6px #0000001a;
          @media (max-width: 980px) {
            width: 100%;
          }
        `}
      >
        <AtomText fontSize="14px" color="#023059" fontWeight="bold">
          Slug
        </AtomText>
        <AtomInput
          label="Slug (URL)"
          border="1px solid #0000003F"
          spanMargin="5px 0px 10px 0px"
          labelColor="#5c5c5c"
          labelFontSize="14px"
          labelFontWeight="bold"
          height="35px"
          labelWidth="100%"
          fontSize="12px"
          formik={formik}
          id="slug"
        />
      </AtomWrapper>
      <AtomWrapper
        width="100%"
        backgroundColor="#ffffff"
        padding="30px 40px"
        customCSS={css`
          box-shadow: 0px 3px 6px #0000001a;
          @media (max-width: 980px) {
            width: 100%;
          }
        `}
      >
        <AtomWrapper width="100%" margin="0px 0px 10px 0px">
          <AtomText fontSize="14px" color="#023059" fontWeight="bold">
            SEO
          </AtomText>
        </AtomWrapper>
        {Object.entries(initialSeoValues.seo).map(([key]) => {
          switch (key) {
            case 'keywords':
              return (
                <AtomWrapper>
                  <AtomText
                    fontSize="14px"
                    color="#023059"
                    fontWeight="bold"
                    margin="0px 0px 10px 0px"
                  >
                    {capitalizeFirstLetter(key)}
                  </AtomText>
                  <AtomWrapper
                    customCSS={css`
                      gap: 10px;
                    `}
                  >
                    <AtomWrapper
                      customCSS={css`
                        display: flex;
                        flex-direction: row;
                        gap: 20px;
                      `}
                    >
                      <AtomInput
                        border="1px solid #0000003F"
                        spanMargin="5px 0px 10px 0px"
                        labelColor="#5c5c5c"
                        labelFontSize="14px"
                        labelFontWeight="bold"
                        height="35px"
                        labelWidth="100%"
                        fontSize="12px"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        id={`seo.${key}`}
                      />
                      <AtomButton
                        onClick={() => {
                          formik.setFieldValue(`seo.${key}`, [
                            ...new Set([...formik.values.seo[key], keyword]),
                          ]);
                          setKeyword('');
                        }}
                        customCSS={css`
                          border-radius: 50%;
                          padding: 0px 10px;
                          height: 35px;
                        `}
                      >
                        <AtomIcon
                          width="15px"
                          height="15px"
                          icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/JRO-0001/iconmonstr-plus-2.svg"
                          customCSS={css`
                            svg {
                              path {
                                fill: white !important;
                              }
                            }
                          `}
                        />
                      </AtomButton>
                    </AtomWrapper>
                    <AtomWrapper
                      customCSS={css`
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                        gap: 10px;
                      `}
                    >
                      {formik.values.seo?.[key]?.map((item) => (
                        <AtomWrapper
                          key={item}
                          customCSS={css`
                            max-width: max-content;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            padding: 5px 10px;
                            border-radius: 5px;
                            background-color: #ececec;
                            gap: 5px;
                          `}
                        >
                          <AtomText>{item}</AtomText>
                          <AtomButton
                            onClick={() => {
                              formik.setFieldValue(
                                `seo.${key}`,
                                formik.values.seo[key].filter((v) => v !== item)
                              );
                            }}
                            customCSS={css`
                              padding: 0px;
                              background-color: transparent;
                              border-radius: 50%;
                            `}
                          >
                            <AtomIcon
                              width="16px"
                              height="16px"
                              icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/JRO-0001/icons/Component%20199%20%E2%80%93%202.svg"
                              customCSS={css`
                                svg {
                                  g {
                                    path {
                                      fill: none !important;
                                      stroke: #fe6a6a !important;
                                    }
                                  }
                                }
                              `}
                            />
                          </AtomButton>
                        </AtomWrapper>
                      ))}
                    </AtomWrapper>
                  </AtomWrapper>
                </AtomWrapper>
              );

            default:
              return (
                <AtomInput
                  label={capitalizeFirstLetter(key)}
                  border="1px solid #0000003F"
                  spanMargin="5px 0px 10px 0px"
                  labelColor="#5c5c5c"
                  labelFontSize="14px"
                  labelFontWeight="bold"
                  height="35px"
                  labelWidth="100%"
                  fontSize="12px"
                  formik={formik}
                  id={`seo.${key}`}
                />
              );
          }
        })}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default AtomFormSeo;
