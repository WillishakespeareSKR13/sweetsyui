import { css } from '@emotion/react';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import AtomIcon from '../AtomIcon';
import AtomLink from '../AtomLink';
import AtomText from '../AtomText';
import AtomWrapper from '../AtomWrapper';
import { Link, RecursiveDropdownHook } from './types';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomTextTypes } from '../AtomText/types';
import { AtomLinkProps } from '../AtomLink/types';

const RecursiveDropdown = (
  props: Link[],
  recursive: boolean,
  hover: boolean,
  setHover: Dispatch<SetStateAction<boolean>>,
  stylesWrapper?: AtomWrapperTypes,
  stylesText?: AtomTextTypes,
  stylesLink?: AtomLinkProps
) => {
  const [actual, setActual] = useState(0);
  return (
    <AtomWrapper
      position="absolute"
      shadow
      backgroundColor="#fff"
      width="max-content"
      justifyContent="flex-start"
      alignItems="center"
      borderRadius="5px"
      padding="5px 0"
      customCSS={css`
        * {
          align-items: center !important;
          justify-content: space-around !important;
          align-text: center;
        }
        ${recursive
          ? css`
              top: 0;
              left: 140%;
            `
          : css`
              top: 18px;
              left: 50%;
            `}
        transform: translateX(-50%);
        a {
          width: 100%;
          padding: 5px 10px;
          font-width: bold;
        }
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: max-content;
          padding: 0px 4px;
        }
        min-width: 130px;
      `}
      {...stylesWrapper}
    >
      {props?.map((link, index) => (
        <>
          {link.type === 'dropdown' ? (
            <AtomLink
              margin="0px"
              key={`${index + 1}`}
              onHoverEnd={() => setHover(false)}
              onHoverStart={() => {
                setHover(true);
                setActual(index);
              }}
              customCSS={css`
                width: 100%;
                padding: 5px 10px;
              `}
            >
              <AtomText
                fontSize="12px"
                as="a"
                {...link}
                color="#7F7F7F"
                padding="5px 10px"
                align="center"
                fontWeight={600}
                customCSS={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  border-radius: 2px;
                  text-align: center;
                  width: max-content;
                  flex-grow: 1;
                  align-items: center;
                  justify-content: center;
                  align-text: center;
                  padding: 5px 10px;
                  :hover {
                    width: 100%;
                    background-color: #dadada;
                  }
                  transition: background-color 0.3s ease;
                `}
                {...stylesText}
              >
                {link.label}
                <AtomIcon
                  customCSS={css`
                    margin: 0px 0px 0px 10px;
                    transform: rotate(-90deg);
                  `}
                  height="10px"
                  width="10px"
                  color="#7F7F7F"
                  icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrow-down-3101.svg"
                />
              </AtomText>
              {link.subFields && hover && index === actual && (
                <RecursiveDropdownHook data={link.subFields} recursive />
              )}
            </AtomLink>
          ) : (
            <AtomLink
              fontSize="12px"
              as="a"
              {...link}
              color="#7F7F7F"
              padding="5px 10px"
              margin="4px 0px"
              fontWeight={600}
              customCSS={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                border-radius: 2px;
                text-align: center;
                width: 100%;
                padding: 5px 10px;
                :hover {
                  width: 100%;
                  background-color: #dadada;
                }
                transition: background-color 0.3s ease;
              `}
              {...stylesLink}
            >
              {link.label}
            </AtomLink>
          )}
        </>
      ))}
    </AtomWrapper>
  );
};

const RecursiveDropdownHook: FC<RecursiveDropdownHook> = ({
  data,
  recursive = false,
  stylesWrapper,
  stylesText,
  stylesLink,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      {RecursiveDropdown(
        data,
        recursive,
        hover,
        setHover,
        stylesWrapper,
        stylesText,
        stylesLink
      )}
    </>
  );
};

export default RecursiveDropdownHook;
