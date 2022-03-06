import { AtomWrapper } from '@atoms';
import { css, SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import SidebarRecursive, { Links } from './SidebarRecursive';

type Props = {
  links?: Links[];
  customCSS?: SerializedStyles;
};

const SidebarLinks: FC<Props> = (props) => {
  const { links, children, customCSS } = props;
  return (
    <AtomWrapper
      height="100%"
      alignItems="flex-start"
      justifyContent="space-between"
      padding="40px 0px"
      customCSS={css`
        ${customCSS}
      `}
    >
      <AtomWrapper
        height="100%"
        alignItems="center"
        justifyContent="flex-start"
        customCSS={css`
          overflow-x: hidden;
          overflow-y: scroll;
        `}
      >
        <AtomWrapper
          height="max-content"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <SidebarRecursive data={links} />
        </AtomWrapper>
      </AtomWrapper>
      {children}
    </AtomWrapper>
  );
};

export default SidebarLinks;
