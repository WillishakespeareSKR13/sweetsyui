import { AtomWrapper } from '@atoms';
import { css, SerializedStyles } from '@emotion/react';
import { FC, ReactElement } from 'react';

interface FootercolumnsType {
  children?: ReactElement[];
  wrapper?: SerializedStyles;
  columns?: SerializedStyles;
}

const FooterColumnsComponent: FC<FootercolumnsType> = (props) => {
  const { children, columns, wrapper } = props;
  return (
    <AtomWrapper
      maxWidth="1440px"
      customCSS={css`
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        padding: 0px 180px;
        margin: 50px 0px;
        gap: 30px;

        @media (max-width: 980px) {
          flex-direction: column;
          padding: 0px 40px;
        }
        ${wrapper}
      `}
    >
      {children?.map((column, idx) => (
        <AtomWrapper
          key={`${idx + 1}Column`}
          justifyContent="center"
          alignItems="center"
          customCSS={css`
            justify-content: flex-start;
            align-items: center;
            flex-basis: calc((100vw / ${children?.length}px));
            ${columns}
          `}
        >
          {column}
        </AtomWrapper>
      ))}
    </AtomWrapper>
  );
};
export default FooterColumnsComponent;
