import { AtomButtonTypes } from '@atoms/AtomButton/types';
import { Link } from '@atoms/AtomDropdown/types';
import Wrapper from '@atoms/AtomWrapper';
import { css } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import React, { FC, useState } from 'react';
import BurgerBUtton from './BurgerButton';
import ContainerPublicLinks from './ContainerLinksPublic';
import HeaderLinkPublic from './LinksPublic';

type Props = {
  Links: Link[];
  buttonProps?: AtomButtonTypes;
};

const Sidebar: FC<Props> = (props) => {
  const { Links, buttonProps, children } = props;
  const [isShow, setIsShow] = useState(false);

  return (
    <Wrapper
      customCSS={css`
        width: max-content;
        display: none;
        @media screen and (max-width: 1200px) {
          display: block;
        }
      `}
    >
      <BurgerBUtton
        buttonProps={{
          onClick: () => setIsShow(!isShow),
          customCSS: css`
            z-index: 102;
            ${buttonProps?.customCSS}
          `,
        }}
      />
      {isShow && (
        <Wrapper width="max-content">
          <AnimatePresence>
            <ContainerPublicLinks>
              <HeaderLinkPublic
                data={Links}
                componentsProps={{
                  linksProps: {
                    customCSS: css`
                      :hover {
                        background: #e8e8e8;
                      }
                    `,
                  },
                }}
                linkedProps={{
                  customcss: css`
                    :hover {
                      background: #f1cece;
                    }
                  `,
                }}
              />
              {children}
            </ContainerPublicLinks>
          </AnimatePresence>
        </Wrapper>
      )}
    </Wrapper>
  );
};

export default Sidebar;
