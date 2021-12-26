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
  return (
    <AtomWrapper
      position="absolute"
      shadow
      backgroundColor="#fff"
      maxWidth="100px"
      width="max-content"
      justifyContent="flex-start"
      alignItems="center"
      borderRadius="5px"
      padding="5px 0"
      customCSS={css`
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
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0px 4px;
        }
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
              onHoverStart={() => setHover(true)}
            >
              <AtomText
                fontSize="12px"
                as="a"
                {...link}
                color="#7F7F7F"
                padding="5px 15px"
                margin="4px 0px"
                align="right"
                fontWeight={600}
                customCSS={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  border-radius: 2px;
                  text-align: center;
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
              {link.subFields && hover && (
                <RecursiveDropdownHook data={link.subFields} recursive />
              )}
            </AtomLink>
          ) : (
            <AtomLink
              fontSize="12px"
              as="a"
              {...link}
              color="#7F7F7F"
              padding="5px 15px"
              margin="4px 0px"
              fontWeight={600}
              customCSS={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                border-radius: 2px;
                text-align: center;
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
