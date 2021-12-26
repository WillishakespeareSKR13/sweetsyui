import { FC, forwardRef } from 'react';
import NextLink from 'next/link';
import { AtomLinkProps } from './types';
import { TextStyledA } from '../AtomText/style';

const Animation = {
  whileHover: { scale: 1.02, transition: { duration: 0.3 } },
  whileTap: { scale: 0.95, opacity: 0.8 },
};

const LinkForewardRef = forwardRef<HTMLAnchorElement, AtomLinkProps>(
  (props, ref) => {
    const { children } = props;
    return (
      <TextStyledA
        {...Animation}
        fontWeight="bold"
        cursor="pointer"
        {...props}
        ref={ref}
      >
        {children}
      </TextStyledA>
    );
  }
);

LinkForewardRef.displayName = 'LinkForewardRef';

const Link: FC<AtomLinkProps> = (props) => {
  const { children, link } = props;
  return link ? (
    <NextLink href={link} passHref>
      <LinkForewardRef {...props}>{children}</LinkForewardRef>
    </NextLink>
  ) : (
    <TextStyledA {...Animation} fontWeight="bold" cursor="pointer" {...props}>
      {children}
    </TextStyledA>
  );
};

export default Link;
